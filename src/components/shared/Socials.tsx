import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function Socials() {
    return (
        <div className="flex justify-center items-center gap-3">
            <Link to={GITHUB_URL} target="_blank" className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
                <HugeiconsIcon icon={Github01Icon} className="text-white/80" />
            </Link>
            <Link to={LINKEDIN_URL} target="_blank" className="size-11 rounded-full bg-zinc-800 text-neutral-50 flex justify-center items-center hover:bg-primary transition-all duration-300">
                <HugeiconsIcon icon={Linkedin01Icon} className="text-white/80" />
            </Link>
        </div>
    )
}