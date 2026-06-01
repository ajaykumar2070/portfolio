import { Briefcase, Building2, Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

export default function WorkExperience() {
  return (
    <section className="flex mt-12 flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-2xl leading-8 tracking-tight">Professional Journey</h2>
          <p className="text-[#9f9fa9] text-sm leading-5">My career path and key milestones</p>
        </div>
        <Briefcase className="size-5 text-primary" />
      </div>
      <div className="relative">
        <div className="left-1/2 -translate-x-1/2 bg-white/10 absolute inset-y-0 w-px" />
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="flex justify-end">
              <Card className="p-6 gap-3 w-full z-10">
                <CardHeader className="flex p-0 flex-col gap-2">
                  <Badge className="bg-primary">
                    July, 2025 - Present
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold text-lg leading-7 text-white">
                      Full Stack Developer
                    </h3>
                    <span className="font-medium text-primary text-sm leading-5 flex items-center gap-1.5">
                      <Building2 className="size-4" />
                      Metanect Pvt. Ltd.
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    Led development of scalable web platforms serving 50k+ active users.
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    {`Architected reusable UI component systems with React & ShadCN.`}
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    Mentored a team of 4 engineers and improved delivery velocity by 30%.
                  </div>
                </CardContent>
              </Card>
            </div>
            <div />
            <span className="left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-zinc-950 border-4 border-solid absolute" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div />
            <div className="flex justify-start">
              <Card className="p-6 gap-3 w-full z-10">
                <CardHeader className="flex p-0 flex-col gap-2">
                  <Badge className="bg-primary">
                    Oct,2021 - June,2025
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold text-lg leading-7 text-white">
                      Web Developer
                    </h3>
                    <span className="font-medium text-primary text-sm leading-5 flex items-center gap-1.5">
                      <Building2 className="size-4" />
                      Kynet Web Solutions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    Built responsive client websites with React.js, Tailwind CSS, Wordpress.
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    Integrated REST APIs and optimized page load times by 40%.
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    Collaborated with designers to ship pixel-perfect interfaces.
                  </div>
                </CardContent>
              </Card>
            </div>
            <span className="left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-zinc-950 border-4 border-solid absolute" />
          </div>

        </div>
      </div>
    </section>
  )
}