"use client";

import Link from "next/link";
import React from "react";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  className?: string;
  size?: LogoSize;
  invert?: boolean;
}

const iconSizes: Record<LogoSize, string> = {
  sm: "h-6",
  md: "h-10",
  lg: "h-14"
};

export function Logo({ className = "", size = "md", invert = false }: LogoProps) {
  return (
    <div className={`inline-block shrink-0 ${className}`}>
      <img
        src="/logo-icon.png"
        alt="Artue Logo"
        className={`${iconSizes[size]} w-auto object-contain ${invert ? "invert" : ""}`}
      />
    </div>
  );
}

export function LogoText({ className = "", size = "md", invert = false }: LogoProps) {
  const textSizes: Record<LogoSize, string> = {
    sm: "text-lg md:text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl"
  };

  return (
    <span className={`font-serif font-bold tracking-tight text-[#111111] uppercase whitespace-nowrap ${textSizes[size]} ${invert ? "text-[#F4F4F0]" : ""} ${className}`}>
      Artue.io
    </span>
  );
}
