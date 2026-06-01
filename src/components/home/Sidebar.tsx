import { ArrowUpRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import PrifileImage from "@/assets/profile2.png";

export default function Sidebar() {
  return (
    <aside className="sticky shrink-0 top-0 p-6 w-full lg:w-95 2xl:w-105">
      <Card className="rounded-3xl flex p-8 flex-col justify-between gap-6 h-full">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center gap-4">
            <h2 className="italic font-serif font-bold text-2xl text-primary">AK.builds</h2>
            <div className="flex items-center justify-end gap-2 rounded-full py-1 px-3 shadow-[inset_0px_0px_20px_#ffffff10]">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <p className="text-white">Open to work</p>
            </div>
          </div>
          <div className="relative aspect-4/5 rounded-2xl w-full overflow-hidden">
            <img
              alt="Ajay Kumar"
              className="object-cover w-full h-full"
              // data-authorname="Ben Tofan"
              // data-authorurl="https://unsplash.com/@bentofan"
              // data-blurhash="L79HRo4Uuism?tMdIBj[4o%gv#f5"
              // data-photoid="liy0P6AmGPM"
              // src="https://images.unsplash.com/photo-1576110598658-096ae24cdb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGRldmVsb3BlciUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MXwxfHx8MTc4MDMxMzc0NXww&ixlib=rb-4.1.0&q=80&w=400"
              src={PrifileImage}
            />
            <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/.7),transparent_55%)] absolute inset-0" />
            <span className="italic font-serif text-neutral-50 text-3xl leading-9 absolute left-5 bottom-4">
              Ajay Kumar
            </span>
          </div>
          <div className="text-center flex flex-col items-center gap-1">
            <p className="font-medium text-neutral-50 text-lg leading-7">ajaykumar.builds@gmail.com</p>
            <p className="text-[#9f9fa9] text-sm leading-5">+91 9910611594</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Link to={GITHUB_URL} className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
              <HugeiconsIcon icon={Github01Icon} className="text-white/80" />
            </Link>
            <Link to={LINKEDIN_URL} className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
              <HugeiconsIcon icon={Linkedin01Icon} className="text-white/80" />
            </Link>
          </div>
        </div>
        <Button className="justify-between w-full mx-auto gap-8 bg-transparent border border-white/10 h-14">
          <span className="text-base font-regular leading-6">Get Resume/CV</span>
          <span className="size-6 rounded-full border flex justify-center items-center">
            <ArrowUpRight className="size-4" />
          </span>
        </Button>
      </Card>
    </aside>
  )
}