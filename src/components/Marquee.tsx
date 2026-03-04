"use client";

const PHRASES = [
  { text: "Culture Over Capital", color: "#C41E3A" },
  { text: "Discovery Over Transaction", color: "#2C5282" },
  { text: "Art That Resonates", color: "#2E7D32" },
  { text: "For You", color: "#E8A317" },
  { text: "Emerging Voices", color: "#C41E3A" },
  { text: "Your Art Habitus", color: "#2C5282" },
  { text: "Edit. Curate. Discover.", color: "#2E7D32" },
  { text: "亚洲新兴艺术", color: "#E8A317" },
];

export function Marquee() {
  const duplicated = [...PHRASES, ...PHRASES];

  return (
    <div className="relative overflow-hidden py-6 border-y-2 border-black/10">
      <div className="marquee-track flex gap-12">
        {duplicated.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap uppercase tracking-tight"
            style={{ color: item.color }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
