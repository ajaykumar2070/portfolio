import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-neutral-50 text-2xl leading-8">Featured Projects</h2>
          <p className="text-[#9f9fa9] text-sm leading-5">Selected work I'm proud of</p>
        </div>
        <Button className="text-primary" variant="ghost">View all<ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-2xl p-0 gap-0 overflow-hidden">
          <div className="relative w-full h-60">
            <img
              alt="Points Trading Platform"
              className="object-cover w-full h-full"
              data-authorname="Luke Chesser"
              data-authorurl="https://unsplash.com/@lukechesser"
              data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
              data-photoid="JKUTrJ4vK00"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXwwfHx8MTc4MDMxMzc0NXww&ixlib=rb-4.1.0&q=80&w=400"
            />
            <Badge className="rounded-md bg-primary text-white text-xs leading-4 absolute left-3 top-3 px-2 py-1">Web App</Badge>
          </div>
          <CardContent className="flex p-6 flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-neutral-50 text-lg leading-7">Points Trading Platform</h3>
              <ExternalLink className="size-4 text-[#9f9fa9]" />
            </div>
            <p className="text-[#9f9fa9] text-sm leading-5">
              A points trading platform for buying and selling
              earned points before token launch, with a custom
              buy/sell offer system.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive">Next.js</Badge>
              <Badge variant="destructive">Typescript</Badge>
              <Badge variant="destructive">Tailwind CSS</Badge>
              <Badge variant="destructive">ShadcnUI</Badge>
            </div>
          </CardContent>
        </Card>


        <Card className="rounded-2xl p-0 gap-0 overflow-hidden">
          <div className="relative w-full h-60">
            <img
              alt="Auction Marketplace App"
              className="object-cover w-full h-full"
              // src={Project2}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXwwfHx8MTc4MDMxMzc0NXww&ixlib=rb-4.1.0&q=80&w=400"
            />
            <Badge className="rounded-md bg-primary text-white text-xs leading-4 absolute left-3 top-3 px-2 py-1">Mobile/Web App</Badge>
          </div>
          <CardContent className="flex p-6 flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-neutral-50 text-lg leading-7">Auction Marketplace App</h3>
              <ExternalLink className="size-4 text-[#9f9fa9]" />
            </div>
            <p className="text-[#9f9fa9] text-sm leading-5">
              A cross-platform marketplace with real-time bidding,
              live streaming, in-app chat and secure payments.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive">React Native</Badge>
              <Badge variant="destructive">Nativewind</Badge>
              <Badge variant="destructive">Expo</Badge>
              <Badge variant="destructive">Hono</Badge>
              <Badge variant="destructive">PostgreSQL</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}