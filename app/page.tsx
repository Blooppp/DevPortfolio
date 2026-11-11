
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Mail,
  Compass,
  BookOpen,
  Gamepad2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/* ================================
   PIXEL POKEBALL
================================ */

function PixelPokeball() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-32 w-32"
      shapeRendering="crispEdges"
      aria-label="Pixel Pokeball illustration"
      role="img"
    >
      {/* Top Half */}
      <rect x="10" y="2" width="12" height="2" fill="#202020" />
      <rect x="6" y="4" width="20" height="2" fill="#202020" />
      <rect x="4" y="6" width="24" height="2" fill="#202020" />
      <rect x="2" y="8" width="28" height="10" fill="#202020" />

      <rect x="4" y="8" width="24" height="8" fill="#E53935" />
      <rect x="6" y="6" width="20" height="2" fill="#E53935" />
      <rect x="10" y="4" width="12" height="2" fill="#E53935" />

      {/* Bottom Half */}
      <rect x="2" y="18" width="28" height="6" fill="#202020" />
      <rect x="4" y="24" width="24" height="2" fill="#202020" />
      <rect x="6" y="26" width="20" height="2" fill="#202020" />
      <rect x="10" y="28" width="12" height="2" fill="#202020" />

      <rect x="4" y="18" width="24" height="6" fill="white" />
      <rect x="6" y="24" width="20" height="2" fill="white" />
      <rect x="10" y="26" width="12" height="2" fill="white" />

      {/* Center Line */}
      <rect x="2" y="14" width="28" height="4" fill="#202020" />

      {/* Center Button */}
      <rect x="11" y="11" width="10" height="10" fill="#202020" />
      <rect x="13" y="13" width="6" height="6" fill="white" />
      <rect x="14" y="14" width="4" height="4" fill="#202020" />
      <rect x="15" y="15" width="2" height="2" fill="white" />
    </svg>
  );
}

/* ================================
   HOMEPAGE
================================ */

export default function Home() {
  return (
    <main className="space-y-24 py-12">

      {/* HERO SECTION */}

      <section className="grid min-h-[520px] items-center gap-12 md:grid-cols-2">

        {/* INTRODUCTION */}

        <div className="space-y-7">

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

            <p className="pixel-text text-[9px] text-gray-500">
              A NEW ADVENTURE BEGINS
            </p>
          </div>

          <div className="space-y-3">

            <p className="font-mono text-lg text-gray-500">
              Hello, Trainer! I'm
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-7xl">
              JULIUS
              <span className="block">
                ALCANA<span className="text-[#E53935]">.</span>
              </span>
            </h1>

            <div className="flex items-center gap-2 pt-2">
              <Code2 className="h-5 w-5 text-[#E53935]" />

              <p className="font-mono text-sm font-bold">
                ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>

          </div>

          <p className="max-w-lg text-sm leading-8 text-gray-600">
            I'm an Information Technology student passionate
            about programming, technology, and creating
            meaningful digital experiences. Just like a Pokémon
            Trainer, I'm always ready to explore new ideas,
            learn new skills, and level up through every challenge.
          </p>

          {/* ACTION BUTTONS */}

          <div className="flex flex-wrap gap-4">

            <Button
              asChild
              className="pixel-button h-12 rounded-md border-2 border-[#202020] bg-[#E53935] px-6 font-mono text-xs text-white hover:bg-[#C62828]"
            >
              <Link href="/about">
                START ADVENTURE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="pixel-button h-12 rounded-md border-2 border-[#202020] bg-[#FFCB05] px-6 font-mono text-xs text-black hover:bg-[#F2B900]"
            >
              <Link href="/contact">
                CONTACT ME
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

          {/* STUDENT INFORMATION */}

          <div className="flex flex-wrap gap-6 border-t-2 border-[#E8DCAe] pt-6">

            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[#E53935]" />

              <span className="text-xs font-semibold">
                IT STUDENT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-[#E53935]" />

              <span className="text-xs font-semibold">
                LEVELING UP
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE TRAINER CARD */}

        <div className="flex justify-center md:justify-end">

          <Card className="pixel-border pokeball-pattern w-full max-w-sm overflow-hidden bg-white">

            <CardContent className="space-y-7 p-8">

              <div className="flex items-center justify-between">

                <Badge className="rounded-sm border-2 border-[#202020] bg-[#E53935] font-mono text-[9px] text-white hover:bg-[#C62828]">
                  TRAINER PROFILE
                </Badge>

                <span className="font-mono text-xs text-gray-400">
                  NO. 001
                </span>

              </div>

              {/* POKEBALL ILLUSTRATION */}

              <div className="flex h-56 items-center justify-center rounded-md border-2 border-dashed border-[#E8DCAE] bg-[#FFFDF5]">

                <div className="flex flex-col items-center gap-3">

                  <PixelPokeball />

                  <p className="pixel-text text-[8px] text-[#E53935]">
                    TRAINER MODE
                  </p>

                </div>

              </div>

              {/* PROFILE DETAILS */}

              <div className="space-y-2 text-center">

                <h2 className="text-2xl font-black">
                  JULIUS HALE ALCANA
                </h2>

                <p className="font-mono text-xs text-gray-500">
                  POKEMON TRAINER & STUDENT DEVELOPER
                </p>

              </div>

              {/* TRAINER SKILLS */}

              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-md border-2 border-[#202020] bg-[#FFF0E8] p-3 text-center">
                  <Code2 className="mx-auto mb-2 h-5 w-5 text-[#E53935]" />

                  <p className="text-[10px] font-bold">
                    CODING
                  </p>
                </div>

                <div className="rounded-md border-2 border-[#202020] bg-[#FFF5CC] p-3 text-center">
                  <GraduationCap className="mx-auto mb-2 h-5 w-5 text-[#D99A00]" />

                  <p className="text-[10px] font-bold">
                    LEARNING
                  </p>
                </div>

              </div>

              <div className="border-t-2 border-[#E8DCAE] pt-4">

                <p className="pixel-text text-center text-[8px] leading-6 text-gray-500">
                  KEEP TRAINING. KEEP GROWING.
                </p>

              </div>

            </CardContent>

          </Card>

        </div>

      </section>

      {/* QUICK NAVIGATION */}

      <section className="space-y-8">

        <div className="space-y-3">

          <p className="pixel-text text-[9px] text-[#E53935]">
            TRAINER JOURNEY
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            CHOOSE YOUR ADVENTURE.
          </h2>

          <p className="max-w-lg text-sm leading-7 text-gray-500">
            Every trainer has a unique journey. Explore my
            background, education, and the things I enjoy
            along the way.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              number: "01",
              title: "ABOUT ME",
              description: "Discover my background, personality, and goals.",
              href: "/about",
              icon: Compass,
              color: "bg-[#FFF0E8]",
            },
            {
              number: "02",
              title: "EDUCATION",
              description: "Explore my academic journey and achievements.",
              href: "/education",
              icon: BookOpen,
              color: "bg-[#FFF5CC]",
            },
            {
              number: "03",
              title: "HOBBIES",
              description: "Discover my interests outside programming.",
              href: "/hobbies",
              icon: Gamepad2,
              color: "bg-[#E8F5E9]",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (
              <Card
                key={item.number}
                className="pokedex-card border-2 border-[#202020] bg-white transition-all"
              >

                <CardContent className="space-y-5 p-6">

                  <div className="flex items-center justify-between">

                    <span className="pixel-text text-[10px] text-[#E53935]">
                      {item.number}
                    </span>

                    <div className={`rounded-md border-2 border-[#202020] p-2 ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>

                  </div>

                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E53935] underline underline-offset-4 hover:text-[#B71C1C]"
                  >
                    EXPLORE
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </CardContent>

              </Card>
            );

          })}

        </div>

      </section>

      {/* QUOTE SECTION */}

      <section className="pixel-border pixel-background pokeball-pattern p-8 text-center md:p-12">

        <p className="pixel-text text-[9px] leading-8 text-[#E53935]">
          A REMINDER FOR EVERY TRAINER
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-black leading-relaxed md:text-4xl">
          "THE JOURNEY IS JUST AS IMPORTANT AS THE DESTINATION."
        </h2>

        <p className="mt-5 font-mono text-xs text-gray-500">
          — TRAINER'S MOTTO
        </p>

        <div className="mt-6 flex justify-center">
          <PixelPokeball />
        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t-2 border-[#202020] py-8 text-center">

        <p className="pixel-text text-[9px] text-[#E53935]">
          DEVPORTFOLIO
        </p>

        <p className="mt-4 text-xs text-gray-500">
          © 2026 Julius Hale Alcana. All rights reserved.
        </p>

        <p className="mt-2 font-mono text-[10px] text-gray-400">
          BUILT WITH CREATIVITY, PASSION, AND CODE.
        </p>

      </footer>

    </main>
  );
}
