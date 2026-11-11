
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation, Inc.",
    period: "Currently Enrolled",
    description:
      "Currently pursuing a degree in Information Technology, developing knowledge and skills in programming, web development, database management, and software development.",
    achievements: [
      "Building programming and problem-solving skills",
      "Learning web development and database management",
      "Exploring software development and technology",
    ],
  },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6">

      {/* PAGE HEADING */}

      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <p className="pixel-text text-xs tracking-widest text-[#E53935]">
            TRAINER'S LEARNING RECORD
          </p>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">
          Education<span className="text-[#E53935]">.</span>
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          My academic journey and continuous learning in the field of
          Information Technology.
        </p>

      </div>

      {/* EDUCATION CARDS */}

      <div className="space-y-6">

        {educationList.map((item, idx) => (
          <Card
            key={idx}
            className="pokedex-card overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >

            <CardHeader className="border-b-2 border-[#E8DCAE] bg-[#FFF5CC] p-6 sm:p-8">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex items-start gap-4">

                  <div className="rounded-lg border-2 border-[#202020] bg-[#FFFDF5] p-3 text-[#E53935] shadow-[2px_2px_0_#202020]">

                    <GraduationCap className="h-6 w-6" />

                  </div>

                  <div className="space-y-2">

                    <CardTitle className="text-lg font-black leading-snug text-[#202020] sm:text-xl">
                      {item.degree}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-600">
                      {item.institution}
                    </CardDescription>

                  </div>

                </div>

                <span className="w-fit rounded-md border-2 border-[#202020] bg-[#E8F5E9] px-3 py-1.5 font-mono text-xs font-bold text-green-700">
                  {item.period}
                </span>

              </div>

            </CardHeader>

            <CardContent className="space-y-6 px-6 pb-7 sm:px-8">

              <div className="border-t-2 border-[#E8DCAE] pt-5">

                <p className="text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>

              <div>

                <h4 className="mb-3 flex items-center gap-2 text-sm font-black text-[#202020]">

                  <Award className="h-4 w-4 text-[#D99A00]" />

                  TRAINER ACHIEVEMENTS

                </h4>

                <ul className="space-y-3">

                  {item.achievements.map((ach, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >

                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E53935]" />

                      {ach}

                    </li>

                  ))}

                </ul>

              </div>

              {/* POKEMON TYPE DECORATIONS */}

              <div className="flex flex-wrap gap-2 border-t-2 border-[#E8DCAE] pt-5">

                <span className="type-badge type-electric">
                  ELECTRIC
                </span>

                <span className="type-badge type-water">
                  WATER
                </span>

                <span className="type-badge type-grass">
                  GRASS
                </span>

                <span className="type-badge type-fire">
                  FIRE
                </span>

              </div>

            </CardContent>

          </Card>
        ))}

      </div>

      {/* BOTTOM SECTION */}

      <div className="border-t-2 border-[#E8DCAE] pt-7">

        <p className="pixel-text text-[10px] tracking-wider text-[#E53935]">
          ALWAYS LEARNING
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
          Every lesson and project is an opportunity to improve my skills,
          explore new technologies, and grow as an aspiring software developer.
        </p>

        <p className="pixel-text mt-6 text-[9px] leading-6 text-gray-400">
          KEEP LEARNING. KEEP EVOLVING.
        </p>

      </div>

    </div>
  );
}
