import { Atom, Database, Server, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

export const techStacks = [
  {
    title: "Frontend",
    icon: Atom,
    skills: [
      "HTML/CSS",
      "React.js",
      "Next.js",
      "Typescript",
      "Javascript",
      "Tanstack Query",
      "Tailwind CSS",
      "ShadCN UI",
      "React Context",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Hono",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "PHP",
    ],
  },
  {
    title: "CMS",
    icon: Database,
    skills: [
      "WordPress",
      "Elementor",
      "Gutenberg",
      "Divi Builder",
      "Theme Customization",
      "AJAX",
      "jQuery",
    ],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    skills: [
      "React Native",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-neutral-50 text-2xl leading-8">{`Tech Stack & Skills`}</h2>
          <p className="text-[#9f9fa9] text-sm leading-5">
            Technologies I work with every day
          </p>
        </div>
        <Zap className="size-5 text-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techStacks.map((stack) => {
          const Icon = stack.icon;

          return (
            <Card
              key={stack.title}
              className="rounded-2xl gap-4"
            >
              <CardHeader className="flex p-0 flex-row items-center gap-3">
                <span className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
                  <Icon className="size-4 text-primary" />
                </span>

                <span className="font-semibold text-neutral-50 text-lg leading-6">
                  {stack.title}
                </span>
              </CardHeader>

              <CardContent className="flex p-0 flex-wrap gap-2">
                {stack.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="rounded-md"
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  )
}