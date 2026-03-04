import Link from "next/link";

export default function ExhibitionList() {
  const tabs = ["Past", "Upcoming", "Current"];

  return (
    <div className="paper-texture dancheong-pattern min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8A317]" />
              <span className="w-2 h-2 rounded-full bg-[#C41E3A]" />
              <span className="w-2 h-2 rounded-full bg-[#1E3A5F]" />
            </div>
            <p className="text-[#C41E3A] text-sm tracking-[0.4em] uppercase mb-2 font-semibold">Discovery</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#0A0A0A]">
              Exhibitions
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-[#E8E2D8] mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                className="pb-4 text-sm font-medium text-[#5C5C5C] hover:text-[#C41E3A] border-b-2 border-transparent hover:border-[#C41E3A] transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Exhibition Grid - Placeholder */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link
                key={i}
                href={`/exhibition/${i}`}
                className="group block"
              >
                <div className="aspect-[3/4] bg-white border border-[#E8E2D8] mb-4 overflow-hidden relative group-hover:border-[#E8A317]/50 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8A317] via-[#C41E3A] to-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-full h-full bg-gradient-to-br from-[#E8A317]/5 via-[#F7F3ED] to-[#1E3A5F]/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 pl-1">
                    <span className="font-serif text-7xl opacity-50" style={{ color: ["#E8A317", "#C41E3A", "#1E3A5F"][(i - 1) % 3] }}>{["一", "二", "三", "四", "五", "六"][i - 1]}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#0A0A0A] group-hover:text-[#C41E3A] transition-colors">
                  Exhibition {i}
                </h3>
                <p className="text-sm text-[#5C5C5C] mt-1">Coming soon</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
