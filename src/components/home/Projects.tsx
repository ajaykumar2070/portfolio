import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import Project2 from "@/assets/project-2.png";
import Project1 from "@/assets/Project-1.png";
export const projects = [
  {
    title: "Points Trading Platform",
    image: Project1,
    category: "Web App",
    description:
      "A points trading platform for buying and selling earned points before token launch, with a custom buy/sell offer system.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "ShadcnUI"],
    href: "/",
  },
  {
    title: "Auction Marketplace App",
    image: Project2,
    category: "Mobile/Web App",
    description:
      "A cross-platform marketplace with real-time bidding, live streaming, in-app chat and secure payments.",
    technologies: [
      "React Native",
      "Nativewind",
      "Expo",
      "Hono",
      "PostgreSQL",
    ],
    href: "/",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-neutral-50 text-2xl leading-8">Featured Projects</h2>
          <p className="text-[#9f9fa9] text-sm leading-5">Selected work I'm proud of</p>
        </div>
        {/* <Link to="/projects">
          <Button className="text-primary" variant="ghost">
            View all
            <ArrowRight className="size-4" />
          </Button>
        </Link> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-2xl p-0 md:p-0 gap-0 overflow-hidden"
          >
            <div className="relative w-full h-40 md:h-60 bg-white/80">
              <img
                src={project.image}
                alt={project.title}
                className="h-full mx-auto"
              />
            </div>

            <CardContent className="flex p-4 md:p-6 flex-col gap-3">
              <Badge className="rounded-md bg-primary text-white text-xs leading-4 px-2 py-1">
                {project.category}
              </Badge>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-neutral-50 text-lg leading-6">
                  {project.title}
                </h3>

                <Link to={project.href}>
                  <ExternalLink className="size-4 text-[#9f9fa9]" />
                </Link>
              </div>

              <p className="text-[#9f9fa9] text-sm leading-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="destructive" className="text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}