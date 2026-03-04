"use client";

import Link from "next/link";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import Hero from "@/components/Hero";
import { CuratedSection } from "@/components/CuratedSection";
import AISearchSection from "@/components/AISearchSection";
import { EditorialSection } from "@/components/EditorialSection";

export default function Home() {
  return (
    <div className="bg-[#111111]">
      <Hero />
      <CuratedSection />
      <AISearchSection />
      <EditorialSection />
    </div>
  );
}
