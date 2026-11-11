
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Gamepad2,
  Music,
  Dumbbell,
  Plane,
  BookOpen,
  Star,
} from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    type: "type-normal",
    description: "Capturing street landscapes and urban architecture during evening walks.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    type: "type-electric",
    description: "Enthusiast for strategy and RPG games.",
  },
  {
    title: "Music & Guitar",
    icon: Music,
    type: "type-psychic",
    description: "Playing acoustic guitar and exploring indie rock music.",
  },
  {
    title: "Fitness & Running",
    icon: Dumbbell,
    type: "type-fighting",
    description: "Staying active through regular workout sessions and weekend runs.",
  },
  {
    title: "Travel & Hiking",
    icon: Plane,
    type: "type-water",
    description: "Exploring national parks, hiking trails, and new places.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    type: "type-grass",
    description: "Fascinated by tech history and sci-fi novels.",
  },
];

export default function Hobbies() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 py-8">

      {/* PAGE HEADING */}

      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <p className="pixel-text text-[9px] tracking-widest text-[#E53935]">
            TRAINER'S PERSONAL INTERESTS
          </p>
        </div>

        <h1 className="text-3xl font-black tracking-tight md:text-4xl">
          Hobbies & Interests<span className="text-[#E53935]">.</span>
        </h1>

        <p className="mt-1 max-w-xl text-sm leading-7 text-gray-500">
          What I enjoy doing outside of coding and how I spend my time
          exploring different interests.
        </p>

      </div>

      {/* HOBBIES GRID */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <Card
              key={hobby.title}
              className="pokedex-card group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_#202020]"
            >

              <CardHeader>

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-[#202020] bg-[#FFF5CC] text-[#E53935] shadow-[2px_2px_0_#202020] transition-transform duration-300 group-hover:rotate-6">

                    <Icon className="h-5 w-5" />

                  </div>

                  <CardTitle className="text-lg font-black">
                    {hobby.title}
                  </CardTitle>

                </div>

              </CardHeader>

              <CardContent className="space-y-4">

                <p className="text-sm leading-7 text-gray-600">
                  {hobby.description}
                </p>

                <div className="flex items-center justify-between border-t-2 border-[#E8DCAE] pt-3">

                  <span className={`type-badge ${hobby.type}`}>
                    INTEREST
                  </span>

                  <Star className="h-4 w-4 text-[#D99A00]" />

                </div>

              </CardContent>

            </Card>
          );
        })}

      </div>

      {/* BOTTOM MESSAGE */}

      <section className="pixel-border pixel-background p-7 text-center md:p-9">

        <p className="pixel-text text-[9px] tracking-widest text-[#E53935]">
          TRAINER'S NOTE
        </p>

        <h2 className="mt-4 text-xl font-black leading-relaxed md:text-2xl">
          EVERY ADVENTURE IS A CHANCE TO DISCOVER SOMETHING NEW.
        </h2>

        <p className="mt-3 text-xs leading-6 text-gray-500">
          Exploring new interests, gaining experiences, and enjoying the journey.
        </p>

      </section>

    </div>
  );
}
