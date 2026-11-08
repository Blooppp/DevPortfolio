
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            My name is Julius Hale Alcana, and I am an Information Technology
            student with a growing passion for programming and software
            development. My journey in IT is still a work in progress, and
            every project and challenge gives me an opportunity to learn
            something new. I may still have a lot to learn, but I am willing
            to put in the time and effort to improve my skills.
          </p>
          <p>
            Beyond learning how to code, I see technology as an opportunity
            to build a better future for myself and my family. One of my
            biggest motivations is to finish my education, become a skilled
            software developer, and help support the people who have
            supported me. I know the journey will not always be easy, but
            I believe that patience, consistency, and determination will
            help me reach my goals.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
