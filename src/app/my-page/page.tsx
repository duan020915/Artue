import Link from "next/link";

const menuItems = [
  { label: "My profile", href: "/my-page/info" },
  { label: "My orders", href: "/my-page/history" },
  { label: "Offer", href: "/my-page/offer" },
  { label: "Following", href: "/my-page/following" },
  { label: "Wishlist", href: "/my-page/wish-list" },
];

export default function MyPage() {
  return (
    <div className="paper-texture min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl font-light text-[#1A1A1A] mb-12">
          My Page
        </h1>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-4 px-6 bg-[#F7F3ED] border border-[#E8E2D8] hover:bg-[#E8E2D8]/50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="mt-8 text-sm text-[#5C5C5C] hover:text-[#1A1A1A]">
          Sign out
        </button>
      </div>
    </div>
  );
}
