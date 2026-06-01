import { Mail, Phone, Send } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <>
      <Card className="relative rounded-2xl p-8 gap-4 overflow-hidden">
        <div className="bg-[radial-gradient(circle_at_top_left,oklch(0.546_0.245_262.881/.25),transparent_60%)] absolute inset-0" />
        <CardContent className="relative flex flex-wrap p-0 justify-between items-center gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-neutral-50 text-3xl leading-9">
              Let's build something great together
            </h2>
            <p className="max-w-md text-[#9f9fa9] text-sm leading-5">
              Have a project in mind or just want to connect? Reach
              out and let's talk.
            </p>
            <div className="text-[#9f9fa9] text-sm leading-5 flex mt-2 items-center gap-6">
              <span className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                ajaykumar.builds@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                9910611594
              </span>
            </div>
          </div>
          <Button className="rounded-full bg-primary flex px-6 items-center gap-2 h-12">
            <Send className="size-4" />
            Contact Me
          </Button>
        </CardContent>
      </Card>
      <div className="border-white/10 border-t border-r-0 border-b-0 border-l-0 border-solid flex pt-6 justify-between items-center">
        <p className="text-[#9f9fa9] text-sm leading-5">{`© ${new Date().getFullYear()} Ajay Kumar.`}</p>
        <div className="flex justify-center items-center gap-3">
          <Link to={GITHUB_URL} className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
            <HugeiconsIcon icon={Github01Icon} className="text-white/80" />
          </Link>
          <Link to={LINKEDIN_URL} className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
            <HugeiconsIcon icon={Linkedin01Icon} className="text-white/80" />
          </Link>
        </div>
      </div>
    </>
  )
}