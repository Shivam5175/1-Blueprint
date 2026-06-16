import { NextResponse } from "next/server";

// Basic, pragmatic email shape check (defence in depth — the client checks too).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let email: string;

  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // No provider wired up yet: accept the address but be explicit that it was
  // NOT persisted, rather than silently pretending it was stored.
  if (!apiKey || !audienceId) {
    console.warn(
      "[subscribe] No email provider configured (set RESEND_API_KEY and " +
        "RESEND_AUDIENCE_ID). Address not stored:",
      email
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("[subscribe] Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Could not subscribe right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[subscribe] Network error", err);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 }
    );
  }
}
