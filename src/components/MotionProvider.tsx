"use client";

import { MotionConfig } from "framer-motion";

/**
 * Applies the user's prefers-reduced-motion setting to every Framer Motion
 * component in the tree. With reducedMotion="user", transform and layout
 * animations are skipped for users who opt out, while opacity fades (which are
 * considered safe) still play.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
