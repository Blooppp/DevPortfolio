
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function PixelSpider() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-32 w-32"
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-label="Pixel spider illustration"
      role="img"
    >
      <rect x="13" y="9" width="6" height="6" />
      <rect x="11" y="15" width="10" height="9" />
      <rect x="14" y="24" width="4" height="2" />

      <rect x="7" y="5" width="3" height="3" />
      <rect x="9" y="8" width="4" height="2" />
      <rect x="3" y="11" width="9" height="2" />
      <rect x="1" y="9" width="3" height="3" />
      <rect x="6" y="16" width="6" height="2" />
      <rect x="3" y="18" width="3" height="4" />
      <rect x="9" y="21" width="3" height="4" />
      <rect x="6" y="25" width="3" height="3" />

      <rect x="22" y="5" width="3" height="3" />
      <rect x="19" y="8" width="4" height="2" />
      <rect x="20" y="11" width="9" height="2" />
      <rect x="28" y="9" width="3" height="3" />
      <rect x="20" y="16" width="6" height="2" />
      <rect x="26" y="18" width="3" height="4" />
      <rect x="20" y="21" width="3" height="4" />
      <rect x="23" y="25" width="3" height="3" />

      <rect x="14" y="11" width="2" height="2" fill="white" />
      <rect x="17" y="11" width="2" height="2" fill="white" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="space-y-24 py-12">

      {/* HERO SECTION */}

      <section className="grid min-h-[520px] items-center gap-12 md:grid-cols-2">

        {/* INTRODUCTION */}

        <div className="space-y-7">

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-black animate-pulse" />
            <p className="pixel-text text-[9px] text-gray-500">
              WELCOME TO MY WORLD
            </p>
          </div>

          <div className="space-y-3">

            <p className="font-mono text-lg text-gray-500">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-7xl">
              JULIUS
              <span className="block">
                ALCANA<span className="text-gray-400">.</span>
              </span>
            </h1>

            <div className="flex items-center gap-2 pt-2">
              <Code2 className="h-5 w-5" />
              <p className="font-mono text-sm font-bold">
                ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>

          </div>

          <p className="max-w-lg text-sm leading-8 text-gray-600">
            I'm an Information Technology student passionate
            about programming, technology, and creating
            meaningful digital experiences. I enjoy exploring
            new ideas, learning new skills, and turning
            creativity into reality through code.
          </p>

          {/* ACTION BUTTONS */}

          <div className="flex flex-wrap gap-4">

            <Button
              asChild
              className="pixel-button h-12 rounded-none border-2 border-black bg-black px-6 font-mono text-xs text-white hover:bg-gray-800"
            >
              <Link href="/about">
                EXPLORE MY WORK
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-2 border-black bg-white px-6 font-mono text-xs text-black hover:bg-gray-100"
            >
              <Link href="/contact">
                CONTACT ME
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

          {/* STUDENT INFORMATION */}

          <div className="flex flex-wrap gap-6 border-t-2 border-gray-200 pt-6">

            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs font-semibold">
                IT STUDENT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              <span className="text-xs font-semibold">
                DEVELOPER IN PROGRESS
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE PROFILE CARD */}

        <div className="flex justify-center md:justify-end">

          <Card className="pixel-border web-pattern w-full max-w-sm overflow-hidden bg-white">

            <CardContent className="space-y-7 p-8">

              <div className="flex items-center justify-between">
                <Badge className="rounded-none bg-black font-mono text-[9px] text-white hover:bg-black">
                  PLAYER PROFILE
                </Badge>

                <span className="font-mono text-xs text-gray-400">
                  ID: 001
                </span>
              </div>

              {/* PIXEL SPIDER */}

              <div className="flex h-56 items-center justify-center border-2 border-dashed border-gray-300 bg-white">
                <div className="flex flex-col items-center gap-3">
                  <PixelSpider />

                  <p className="pixel-text text-[8px]">
                    SPIDER MODE
                  </p>
                </div>
              </div>

              {/* PROFILE DETAILS */}

              <div className="space-y-2 text-center">

                <h2 className="text-2xl font-black">
                  JULIUS HALE ALCANA
                </h2>

                <p className="font-mono text-xs text-gray-500">
                  STUDENT DEVELOPER
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="border-2 border-black p-3 text-center">
                  <Code2 className="mx-auto mb-2 h-5 w-5" />
                  <p className="text-[10px] font-bold">
                    CODING
                  </p>
                </div>

                <div className="border-2 border-black p-3 text-center">
                  <GraduationCap className="mx-auto mb-2 h-5 w-5" />
                  <p className="text-[10px] font-bold">
                    LEARNING
                  </p>
                </div>

              </div>

              <div className="border-t-2 border-black pt-4">
                <p className="pixel-text text-center text-[8px] text-gray-500">
                  GREAT THINGS TAKE TIME.
                </p>
              </div>

            </CardContent>

          </Card>

        </div>

      </section>

      {/* QUICK NAVIGATION */}

      <section className="space-y-8">

        <div className="space-y-3">
          <p className="pixel-text text-[9px] text-gray-400">
            EXPLORE
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            GET TO KNOW ME.
          </h2>

          <p className="max-w-lg text-sm leading-7 text-gray-500">
            Every developer has a story. Explore my background,
            education, and the things I enjoy.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              number: "01",
              title: "ABOUT ME",
              description: "My background, personality, and goals.",
              href: "/about",
            },
            {
              number: "02",
              title: "EDUCATION",
              description: "My academic journey and achievements.",
              href: "/education",
            },
            {
              number: "03",
              title: "HOBBIES",
              description: "My interests and activities outside coding.",
              href: "/hobbies",
            },
          ].map((item) => (

            <Card
              key={item.number}
              className="rounded-none border-2 border-black bg-white shadow-[4px_4px_0_#111] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >

              <CardContent className="space-y-5 p-6">

                <div className="flex items-center justify-between">
                  <span className="pixel-text text-[10px]">
                    {item.number}
                  </span>

                  <ArrowRight className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="text-xs leading-6 text-gray-500">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-bold underline underline-offset-4"
                >
                  VIEW MORE
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </CardContent>

            </Card>

          ))}

        </div>

      </section>

      {/* QUOTE SECTION */}

      <section className="pixel-border pixel-background p-8 text-center md:p-12">

        <p className="pixel-text text-[9px] leading-8 text-gray-500">
          A REMINDER FOR EVERY DEVELOPER
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-black leading-relaxed md:text-4xl">
          "WITH GREAT POWER COMES GREAT RESPONSIBILITY."
        </h2>

        <p className="mt-5 font-mono text-xs text-gray-500">
          — UNCLE BEN
        </p>

        <div className="mt-6 flex justify-center">
          <PixelSpider />
        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t-2 border-black py-8 text-center">

        <p className="pixel-text text-[9px]">
          DevPortfolio
        </p>

        <p className="mt-4 text-xs text-gray-500">
          © 2026 Julius Hale Alcana. All rights reserved.
        </p>

        <p className="mt-2 font-mono text-[10px] text-gray-400">
          BUILT WITH CREATIVITY AND CODE.
        </p>

      </footer>

    </main>
  );
}
