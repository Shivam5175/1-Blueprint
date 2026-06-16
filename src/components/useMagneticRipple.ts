import { useRef, type PointerEvent as ReactPointerEvent } from "react";

/**
 * Magnetic pull toward the cursor + a click ripple, for primary CTAs.
 * Magnetic translate only applies to a real mouse (skips touch). Spread the
 * returned handlers + ref onto a `position: relative; overflow: hidden` element.
 */
export function useMagneticRipple<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onPointerMove = (e: ReactPointerEvent<T>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const onPointerDown = (e: ReactPointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const span = document.createElement("span");
    span.className = "ripple";
    const size = Math.max(r.width, r.height);
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    span.style.left = `${e.clientX - r.left}px`;
    span.style.top = `${e.clientY - r.top}px`;
    el.appendChild(span);
    window.setTimeout(() => span.remove(), 650);
  };

  return { ref, onPointerMove, onPointerLeave, onPointerDown };
}
