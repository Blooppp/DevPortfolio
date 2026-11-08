
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
      {/* Page Heading */}
      <div className="space-y-3">
        <p className="pixel-text text-xs tracking-widest text-gray-500">
          MY BACKGROUND
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Education<span className="text-gray-400">.</span>
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          My academic journey and continuous learning in the field of
          Information Technology.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card
            key={idx}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-black hover:shadow-md"
          >
            <CardHeader className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-black">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-lg font-bold leading-snug text-black sm:text-xl">
                      {item.degree}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-500">
                      {item.institution}
                    </CardDescription>
                  </div>
                </div>

                <span className="w-fit rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-6 pb-7 sm:px-8">
              <div className="border-t border-gray-100 pt-5">
                <p className="text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-black">
                  <Award className="h-4 w-4" />
                  Key Highlights
                </h4>

                <ul className="space-y-3">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 pt-7">
        <p className="pixel-text text-[10px] tracking-wider text-gray-400">
          ALWAYS LEARNING
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
          Every lesson and project is an opportunity to improve my skills,
          explore new technologies, and grow as an aspiring software developer.
        </p>
      </div>
    </div>
  );
}
