import Link from "next/link";

export default function ThreeDOnView() {
  return (
    <div className="paper-texture min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#9A7B4F] text-sm tracking-[0.3em] uppercase mb-2">Discovery</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mb-8">
          3D On View
        </h1>
        <p className="text-[#5C5C5C] mb-12">Experience exhibitions in 3D. Coming soon.</p>
        <Link
          href="/exhibition-list"
          className="inline-flex items-center px-8 py-3 border border-[#C4B8A8] text-[#1A1A1A] text-sm font-medium hover:bg-[#E8E2D8]/50 transition-colors"
        >
          View All Exhibitions
        </Link>
      </div>
    </div>
  );
}
