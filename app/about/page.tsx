
import {
  UserRound,
  Target,
  Code2,
  GraduationCap,
  Heart,
  Trophy,
  Compass,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "JavaScript / TypeScript", type: "type-electric" },
  { name: "React & Next.js", type: "type-water" },
  { name: "Tailwind CSS", type: "type-grass" },
  { name: "Node.js & Express", type: "type-grass" },
  { name: "MySQL / Oracle", type: "type-water" },
  { name: "Git & GitHub", type: "type-normal" },
  { name: "REST APIs & GraphQL", type: "type-psychic" },
  { name: "Shadcn UI", type: "type-fairy" },
];

export default function About() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 py-12">

      {/* PAGE HEADER */}

      <section className="space-y-3">

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <p className="pixel-text text-[9px] text-[#E53935]">
            TRAINER INFORMATION
          </p>
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          MEET THE TRAINER<span className="text-[#E53935]">.</span>
        </h1>

        <p className="max-w-2xl text-sm leading-7 text-gray-500">
          Every trainer has a story. Here's mine, along with the
          skills I'm developing and the goals I'm working toward.
        </p>

      </section>

      {/* TRAINER PROFILE */}

      <Card className="pokedex-card overflow-hidden">

        <CardHeader className="border-b-2 border-[#E8DCAE] bg-[#FFF5CC]">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <UserRound className="h-6 w-6 text-[#E53935]" />

              <CardTitle className="text-lg font-black">
                TRAINER PROFILE
              </CardTitle>
            </div>

            <Badge className="rounded-sm border border-[#202020] bg-[#E53935] font-mono text-[9px] text-white hover:bg-[#C62828]">
              TRAINER ID: 001
            </Badge>

          </div>

        </CardHeader>

        <CardContent className="space-y-6 p-6 md:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border-2 border-[#202020] bg-[#FFF0E8] shadow-[3px_3px_0_#202020]">

              <span className="text-5xl">⚡</span>

            </div>

            <div className="space-y-2">

              <h2 className="text-2xl font-black">
                JULIUS HALE ALCANA
              </h2>

              <p className="font-mono text-xs text-gray-500">
                INFORMATION TECHNOLOGY STUDENT
              </p>

              <div className="flex flex-wrap gap-2">

                <Badge className="type-badge type-electric">
                  CODING
                </Badge>

                <Badge className="type-badge type-water">
                  LEARNING
                </Badge>

              </div>

            </div>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            <div className="rounded-md border-2 border-[#202020] bg-[#FFFDF5] p-4">

              <p className="pixel-text text-[8px] text-gray-400">
                CLASS
              </p>

              <p className="mt-3 text-sm font-bold">
                BSIT STUDENT
              </p>

            </div>

            <div className="rounded-md border-2 border-[#202020] bg-[#FFFDF5] p-4">

              <p className="pixel-text text-[8px] text-gray-400">
                SPECIALTY
              </p>

              <p className="mt-3 text-sm font-bold">
                SOFTWARE DEVELOPMENT
              </p>

            </div>

          </div>

        </CardContent>

      </Card>

      {/* MY STORY */}

      <Card className="pokedex-card">

        <CardHeader>

          <CardTitle className="flex items-center gap-3 text-xl font-black">

            <Compass className="h-6 w-6 text-[#E53935]" />

            MY JOURNEY

          </CardTitle>

        </CardHeader>

        <div className="flex gap-3 px-6">
          <span>🔴</span>
          <span>⚡</span>
          <span>💧</span>
          <span>🌿</span>
          <span>🔥</span>
        </div>

        <CardContent className="space-y-5 text-sm leading-8 text-gray-600">

          <p>
            My name is Julius Hale Alcana, and I am an Information
            Technology student with a growing passion for programming
            and software development. My journey in IT is still a
            work in progress, and every project and challenge gives
            me an opportunity to learn something new. I may still
            have a lot to learn, but I am willing to put in the time
            and effort to improve my skills.
          </p>

          <p>
            Beyond learning how to code, I see technology as an
            opportunity to build a better future for myself and my
            family. One of my biggest motivations is to finish my
            education, become a skilled software developer, and
            help support the people who have supported me. I know
            the journey will not always be easy, but I believe that
            patience, consistency, and determination will help me
            reach my goals.
          </p>

        </CardContent>

      </Card>

      {/* GOALS */}

      <Card className="pokedex-card">

        <CardHeader>

          <CardTitle className="flex items-center gap-3 text-xl font-black">

            <Target className="h-6 w-6 text-[#E53935]" />

            MY OBJECTIVES

          </CardTitle>

        </CardHeader>

        <CardContent className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-md border-2 border-[#202020] bg-[#FFF0E8] p-5">

            <GraduationCap className="mb-3 h-7 w-7 text-[#E53935]" />

            <h3 className="font-black">
              COMPLETE MY EDUCATION
            </h3>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Finish my BSIT degree and continue learning
              new technologies.
            </p>

          </div>

          <div className="rounded-md border-2 border-[#202020] bg-[#FFF5CC] p-5">

            <Trophy className="mb-3 h-7 w-7 text-[#D99A00]" />

            <h3 className="font-black">
              BECOME A DEVELOPER
            </h3>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Improve my programming skills and build
              meaningful projects.
            </p>

          </div>

          <div className="rounded-md border-2 border-[#202020] bg-[#E8F5E9] p-5">

            <Heart className="mb-3 h-7 w-7 text-green-600" />

            <h3 className="font-black">
              SUPPORT MY FAMILY
            </h3>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Build a better future for myself and the
              people who motivate me.
            </p>

          </div>

          <div className="rounded-md border-2 border-[#202020] bg-[#E3F2FD] p-5">

            <Code2 className="mb-3 h-7 w-7 text-blue-600" />

            <h3 className="font-black">
              KEEP IMPROVING
            </h3>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Learn from every challenge and become
              better than yesterday.
            </p>

          </div>

        </CardContent>

      </Card>

      {/* TRAINER SKILLS */}

      <Card className="pokedex-card">

        <CardHeader>

          <div className="flex items-center gap-3">

            <Code2 className="h-6 w-6 text-[#E53935]" />

            <CardTitle className="text-xl font-black">
              SKILLS & TECHNOLOGIES
            </CardTitle>

          </div>

          <p className="text-xs text-gray-500">
            Technologies I'm exploring throughout my development journey.
          </p>

        </CardHeader>

        <CardContent className="space-y-5">

          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (
              <Badge
                key={skill.name}
                className={`type-badge ${skill.type}`}
              >
                {skill.name}
              </Badge>
            ))}

          </div>

          <div className="border-t-2 border-[#E8DCAE] pt-4">

            <p className="pixel-text text-center text-[8px] leading-6 text-gray-500">
              KEEP TRAINING. KEEP EVOLVING.
            </p>

          </div>

        </CardContent>

      </Card>

      {/* CLOSING MESSAGE */}

      <section className="pixel-border pixel-background p-8 text-center md:p-10">

        <p className="pixel-text text-[9px] leading-7 text-[#E53935]">
          TRAINER'S REMINDER
        </p>

        <h2 className="mt-5 text-2xl font-black leading-relaxed md:text-3xl">
          YOUR POKÉMON JOURNEY STARTS HERE.
        </h2>

        <p className="mt-4 text-xs text-gray-500">
          Still learning. Still growing. Still moving forward.
        </p>

      </section>

    </main>
  );
}
  