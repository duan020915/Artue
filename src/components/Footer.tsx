import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#333]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#F8F9FA]">Artue</h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              The Art Intelligence Partner. Learning emotion through art.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/50 mb-4">Explore</h4>
            <ul className="space-y-3 font-sans text-xs text-white/70">
              <li><Link href="/exhibition-list" className="hover:text-[#E63946] transition-colors duration-150">Exhibitions</Link></li>
              <li><Link href="/3d-on-view" className="hover:text-[#E63946] transition-colors duration-150">3D On View</Link></li>
              <li><Link href="/galleries" className="hover:text-[#E63946] transition-colors duration-150">Galleries</Link></li>
              <li><Link href="/about" className="hover:text-[#E63946] transition-colors duration-150">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/50 mb-4">My Page</h4>
            <ul className="space-y-3 font-sans text-xs text-white/70">
              <li><Link href="/my-page/info" className="hover:text-[#E63946] transition-colors duration-150">My profile</Link></li>
              <li><Link href="/my-page/history" className="hover:text-[#E63946] transition-colors duration-150">My orders</Link></li>
              <li><Link href="/my-page/wish-list" className="hover:text-[#E63946] transition-colors duration-150">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/50 mb-4">Connect</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-white/70 hover:text-[#E63946] transition-colors duration-150">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#333] flex items-center justify-between">
          <p className="font-sans text-[0.65rem] text-white/40">© Artue. Contemporary artworks only available on Artue.</p>
          <div className="flex gap-3">
            <span className="w-px h-4 bg-[#E63946]" />
            <span className="w-px h-4 bg-[#1D3557]" />
            <span className="w-px h-4 bg-[#2A9D8F]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
