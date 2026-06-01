import { Atom, Database, Server, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

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
        <Card className="rounded-2xl p-6 gap-4">
          <CardHeader className="flex p-0 flex-row items-center gap-3">
            <span className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
              <Atom className="size-4 text-primary" />
            </span>
            <span className="font-semibold text-neutral-50 text-base leading-6">
              Frontend
            </span>
          </CardHeader>
          <CardContent className="flex p-0 flex-wrap gap-2">
            <Badge className="rounded-md" variant="secondary"> HTML/CSS</Badge>
            <Badge className="rounded-md" variant="secondary">React.js</Badge>
            <Badge className="rounded-md" variant="secondary"> Next.js</Badge>
            <Badge className="rounded-md" variant="secondary"> Typescript</Badge>
            <Badge className="rounded-md" variant="secondary"> Javascript</Badge>
            <Badge className="rounded-md" variant="secondary">Tanstack</Badge>
            <Badge className="rounded-md" variant="secondary">Tailwind CSS</Badge>
            <Badge className="rounded-md" variant="secondary">ShadCN UI</Badge>
            <Badge className="rounded-md" variant="secondary">React Context</Badge>
            <Badge className="rounded-md" variant="secondary">Redux Toolkit</Badge>
          </CardContent>
        </Card>
        <Card className="rounded-2xl p-6 gap-4">
          <CardHeader className="flex p-0 flex-row items-center gap-3">
            <span className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
              <Server className="size-4 text-primary" />
            </span>
            <span className="font-semibold text-neutral-50 text-base leading-6">
              Backend
            </span>
          </CardHeader>
          <CardContent className="flex p-0 flex-wrap gap-2">
            <Badge className="rounded-md" variant="secondary">Node.js</Badge>
            <Badge className="rounded-md" variant="secondary">Hono</Badge>
            <Badge className="rounded-md" variant="secondary">Express</Badge>
            <Badge className="rounded-md" variant="secondary">REST APIs</Badge>
            <Badge className="rounded-md" variant="secondary">PostgreSQL</Badge>
            <Badge className="rounded-md" variant="secondary">MongoDB</Badge>
            <Badge className="rounded-md" variant="secondary">PHP</Badge>
          </CardContent>
        </Card>
        <Card className="rounded-2xl p-6 gap-4">
          <CardHeader className="flex p-0 flex-row items-center gap-3">
            <span className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
              <Database className="size-4 text-primary" />
            </span>
            <span className="text-neutral-50 text-base leading-6">CMS</span>
          </CardHeader>
          <CardContent className="flex p-0 flex-wrap gap-2">
            <Badge className="rounded-md" variant="secondary">Wordpress</Badge>
            <Badge className="rounded-md" variant="secondary">Elementor</Badge>
            <Badge className="rounded-md" variant="secondary">Gutenberg</Badge>
            <Badge className="rounded-md" variant="secondary">Divi Builder</Badge>
            <Badge className="rounded-md" variant="secondary">Theme customization</Badge>
            <Badge className="rounded-md" variant="secondary">AJAX</Badge>
            <Badge className="rounded-md" variant="secondary">Jquery</Badge>
          </CardContent>
        </Card>
        <Card className="rounded-2xl p-6 gap-4">
          <CardHeader className="flex p-0 flex-row items-center gap-3">
            <span className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
              <Smartphone className="size-4 text-primary" />
            </span>
            <span className="font-semibold text-neutral-50 text-base leading-6">{`Mobile & Tools`}</span>
          </CardHeader>
          <CardContent className="flex p-0 flex-wrap gap-2">
            <Badge className="rounded-md" variant="secondary">React Native</Badge>
            <Badge className="rounded-md" variant="secondary">Git</Badge>
            <Badge className="rounded-md" variant="secondary">Github</Badge>
            <Badge className="rounded-md" variant="secondary">Vercel</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}