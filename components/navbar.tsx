
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 py-3">
        
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-black transition-opacity hover:opacity-70"
        >
          <Code2 className="h-5 w-5" strokeWidth={2} />
          <span className="text-lg font-semibold tracking-tight">
            DevPortfolio
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
