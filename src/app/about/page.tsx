import Link from "next/link";

const teamMembers = [
  { name: "Bo Young Song", role: "Co-founder", desc: "CEO, Cahiers d'art Korea · Selection committee for Art Basel HK" },
  { name: "Hoon Sagong", role: "Co-founder, CEO", desc: "Co-founder & CEO of OTD Corporation" },
  { name: "Eugene Whang", role: "Creative Advisor", desc: "Designer at LoveFrom · Designer at Apple" },
  { name: "Jiwoong Jeong", role: "Art Director", desc: "Deputy Director at Kukje Gallery · B.A. From Columbia University" },
  { name: "Brice Lee", role: "Head of Business", desc: "Product Manager at Radish Fiction · M.Eng. from Columbia University" },
  { name: "EJ Jung", role: "Head of Product", desc: "Founder & CEO at Viewee · Ph.D. from SNU" },
  { name: "Taewoong Ohm", role: "Tech Lead", desc: "Co-founder at Mutation, Viewee · AI engineer at NAVER" },
  { name: "Fogg Choi", role: "Blockchain Lead", desc: "Data lead at TMAX · B.A./M.S. from KAIST" },
  { name: "Dotdot Kim", role: "Production Lead", desc: "Healthport production lead · Mutation full-stack developer" },
];

const userTypes = [
  {
    type: "Collector",
    items: [
      "Be the first to discover young and emerging artists from around the world.",
      "Explore the new world of art appreciation through online viewing.",
      "Easily resell artwork purchased through Artue.",
      "Enjoy our white-glove art storage service.",
      "Become a part of the art community through collecting.",
    ],
  },
  {
    type: "Artist",
    items: [
      "Showcase your precious artworks to collectors worldwide.",
      "Easily manage your artwork's data online.",
      "Instantly build your catalogue raisonné online.",
      "Safely store delicate artwork using Artue's full-service storage.",
      "Network in real-time with various members of the global art community.",
    ],
  },
  {
    type: "Dealer",
    items: [
      "Research young and emerging artists from around the world and meet new collectors online.",
      "Replace physical paperwork required in the art sales process with electronic documents.",
      "Efficiently manage art provenance digitally.",
      "Rely on Artue to safely store, deliver, and install your artwork.",
      "Join a diverse global network of artists and collectors.",
    ],
  },
];

const ACCENT_COLORS = ["#E8A317", "#C41E3A", "#1E3A5F"] as const;

export default function About() {
  return (
    <div className="paper-texture dancheong-pattern">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-0 top-20 bottom-20 w-1 bg-gradient-to-b from-[#E8A317] via-[#C41E3A] to-[#1E3A5F]" />
        <div className="max-w-4xl mx-auto pl-8">
          <div className="flex gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E8A317]" />
            <span className="w-2 h-2 rounded-full bg-[#C41E3A]" />
            <span className="w-2 h-2 rounded-full bg-[#1E3A5F]" />
          </div>
          <p className="text-[#C41E3A] text-sm tracking-[0.4em] uppercase mb-4 font-semibold">About</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#0A0A0A]">
            Artue for Shaping Your Art Habitus
          </h1>
          <p className="mt-8 text-lg text-[#5C5C5C] leading-relaxed">
            Every artist, whether established or not, deserves equal respect for dedicating their lives to creating something beautiful and inspiring. Art collecting is a meaningful way to support contemporary and emerging artists and contribute to the art community.
          </p>
          <p className="mt-4 text-[#2D2D2D]">
            A beautiful consumption that can set you apart from others. Refine your Habitus at Artue.
          </p>
        </div>
      </section>

      <div className="decorative-line w-full max-w-7xl mx-auto" />

      {/* User types with Asian numbering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-center mb-16">
            Your Art · Your Habitus · Your Artue
          </h2>
          <div className="space-y-20">
            {userTypes.map((user, idx) => (
              <div key={user.type} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-2">
                  <span className="text-6xl font-serif" style={{ color: ACCENT_COLORS[idx] }}>
                    {["一", "二", "三"][idx]}
                  </span>
                  <h3 className="font-serif text-xl font-medium mt-2 text-[#0A0A0A]">{user.type}</h3>
                </div>
                <div className="md:col-span-10 space-y-4">
                  {user.items.map((item, i) => (
                    <p key={i} className="text-[#2D2D2D] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="dancheong-bar w-16 mb-8" />
          <h2 className="font-serif text-3xl font-light mb-16 text-[#0A0A0A]">Team Artue</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <h4 className="font-serif text-lg font-medium">{member.name}</h4>
                <p className="text-[#C41E3A] text-sm mt-1 font-medium">{member.role}</p>
                <p className="text-[#5C5C5C] text-sm mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-light mb-12">Advisors</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alan Lau", role: "Business Advisor", desc: "CEO at Animoca Brands" },
              { name: "Changwook Kim", role: "Product Advisor", desc: "Founder of SNOW · CEO at Kream, Zepeto" },
              { name: "Fed Tan", role: "Communication Advisor", desc: "Managing Director at sacai, Balmain, Kenzo" },
              { name: "Jonghun Shin", role: "Tech Advisor", desc: "CTO of Radish Fiction" },
            ].map((adv) => (
              <div key={adv.name}>
                <h4 className="font-serif text-lg font-medium">{adv.name}</h4>
                <p className="text-[#C41E3A] text-sm font-medium">{adv.role}</p>
                <p className="text-[#5C5C5C] text-sm mt-1">{adv.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-[#5C5C5C]">Investor: Softbank Ventures Asia</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/exhibition-list"
            className="inline-flex items-center px-10 py-4 bg-[#0A0A0A] text-[#F7F3ED] text-sm font-medium hover:bg-[#C41E3A] transition-colors"
          >
            Explore Artue
          </Link>
        </div>
      </section>
    </div>
  );
}
