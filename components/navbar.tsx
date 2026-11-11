
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

function PokeballLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8"
      shapeRendering="crispEdges"
      aria-label="Pokeball logo"
      role="img"
    >
      <circle cx="16" cy="16" r="14" fill="#202020" />
      <path d="M3 16 A13 13 0 0 1 29 16 Z" fill="#E53935" />
      <path d="M3 16 A13 13 0 0 0 29 16 Z" fill="white" />
      <rect x="2" y="14" width="28" height="4" fill="#202020" />
      <rect x="12" y="12" width="8" height="8" fill="#202020" />
      <rect x="14" y="14" width="4" height="4" fill="white" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#202020] bg-[#fffdf5] shadow-[0_3px_0_#e8dcae]">

      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6 py-3">

        {/* POKEMON BRAND */}

        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
        >
          <PokeballLogo />

          <div className="flex flex-col">
            <span className="pixel-wordmark text-[10px] sm:text-[12px]">
              DEVPORTFOLIO
            </span>

            <span className="font-mono text-[8px] font-bold tracking-widest text-gray-500">
              TRAINER EDITION
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}

        <nav className="flex items-center gap-1 overflow-x-auto">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md border-2 px-2 py-2 font-mono text-[9px] font-bold transition-all sm:px-3 sm:text-[10px] ${
                  isActive
                    ? "border-[#202020] bg-[#E53935] text-white shadow-[2px_2px_0_#202020]"
                    : "border-transparent text-gray-600 hover:border-[#202020] hover:bg-[#FFCB05] hover:text-black"
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
