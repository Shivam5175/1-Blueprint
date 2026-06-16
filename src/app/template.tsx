"use client";

import { motion } from "framer-motion";

// Re-mounted on every navigation, so this animates page-to-page transitions.
// The y-offset is a transform (skipped under MotionConfig reducedMotion="user");
// the opacity fade remains, which is considered motion-safe.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
