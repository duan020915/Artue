"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ArtworkCard = {
  src: string;
  title: string;
  artist: string;
};

const items: ArtworkCard[] = [
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fhero-1.jpg&w=900&q=80", title: "Dry Wood", artist: "Jonghwan Jin" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-1.jpg&w=900&q=80", title: "Soft Geometry", artist: "Kim Ji-won" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-2.jpg&w=900&q=80", title: "Blue Pulse", artist: "Han Yuna" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-3.jpg&w=900&q=80", title: "Night Market Glow", artist: "Dao Lin" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-4.jpg&w=900&q=80", title: "City After Rain", artist: "Minho Park" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-5.jpg&w=900&q=80", title: "Lantern Field", artist: "Aya Nakamura" },
  { src: "https://artue.io/_next/image?url=%2Fimages%2Flanding%2Fgrid-6.jpg&w=900&q=80", title: "Signal Noise", artist: "Yu Chen" },
];

export function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ["0%", "-35%", "-70%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="border-b border-[#111111] px-6 py-4 flex items-center justify-between bg-[#F8F9FA]">
          <p className="font-serif text-sm tracking-[0.3em] uppercase text-[#111111]">
            Featured Exhibition
          </p>
          <Link
            href="/exhibition-list"
            className="font-sans text-xs tracking-[0.2em] uppercase text-[#111111] hover:text-[#E63946] transition-colors duration-150"
          >
            View All
          </Link>
        </div>
        <div className="flex-1 flex items-center overflow-hidden bg-[#111111]">
          <motion.div
            className="flex gap-0"
            style={{ x }}
          >
            {items.map((item) => (
              <ArtworkCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArtworkCard({ item }: { item: ArtworkCard }) {
  return (
    <div className="relative w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] h-[70vh] shrink-0 flex items-center justify-center border-r border-[#333] last:border-r-0 overflow-hidden group">
      <img
        src={item.src}
        alt={`${item.title} by ${item.artist}`}
        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-150"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#111111] text-[#F8F9FA] border-t border-[#333]">
        <p className="font-serif text-lg">{item.title}</p>
        <p className="font-sans text-xs tracking-wider uppercase mt-1 text-[#F8F9FA]/70">{item.artist}</p>
      </div>
    </div>
  );
}
