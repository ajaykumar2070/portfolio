import {
  Briefcase,
  Component,
  Globe,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

const stats = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Websites Built",
  },
  {
    icon: Component,
    value: "20+",
    label: "UI Components",
  },
  {
    icon: Trophy,
    value: "5th",
    label: "Global Hackathon Rank",
  },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-2  mt-8 gap-4 md:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label} className="group relative transition-all duration-300 gap-4 overflow-hidden">
            <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.18),transparent_60%)] transition-opacity duration-300 opacity-0 absolute inset-0" />
            <CardHeader className="relative flex p-0 flex-row justify-between items-center gap-2">
              <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.15)] rounded-xl border-primary/20 border flex justify-center items-center">
                <Icon className="size-5 text-primary" />
              </div>
              <TrendingUp className="size-4 text-[#9f9fa9]/60" />
            </CardHeader>

            <CardContent className="relative flex p-0 flex-col gap-1">
              <h3 className="font-bold text-white text-5xl md:text-6xl leading-13 md:leading-16 tracking-tight">
                {stat.value}
              </h3>

              <span className="text-[#9f9fa9] text-sm leading-5">
                {stat.label}
              </span>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}