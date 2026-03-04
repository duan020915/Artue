"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 400, damping: 25 };
  const moveX = useSpring(useTransform(x, [-1, 1], [-6, 6]), springConfig);
  const moveY = useSpring(useTransform(y, [-1, 1], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = "inline-flex items-center px-8 py-3 rounded-full text-sm font-semibold transition-colors ";
  const styles =
    variant === "primary"
      ? "bg-[#0A0A0A] text-white hover:bg-[#C41E3A]"
      : "border-2 border-[#E8A317] text-[#0A0A0A] hover:bg-[#E8A317] hover:text-white";

  return (
    <Link href={href} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.span
        className={base + styles + " " + className}
        style={{ x: moveX, y: moveY }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
