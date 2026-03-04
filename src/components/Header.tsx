import Link from "next/link";
import { useState } from "react";
import { Logo, LogoText } from "./Logo";

const navItems = [
  { label: "Discovery", href: "/" },
  { label: "Exhibitions", href: "/exhibition-list" },
  { label: "3D On View", href: "/3d-on-view" },
  { label: "Galleries", href: "/galleries" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA] border-b border-[#111111]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="sm" />
            <LogoText size="sm" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-[#111111] hover:text-[#E63946] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-[#111111]/60">
              Exhibitions / 日本語
            </span>
            <Link
              href="/my-page"
              className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-[#111111] hover:text-[#E63946] transition-colors duration-150"
            >
              My Page
            </Link>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#111111]/20">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 font-sans text-xs tracking-wider uppercase text-[#111111]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
