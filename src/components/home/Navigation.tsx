import { Code, Home, Mail, User, Zap } from "lucide-react";
import { Button } from "../ui/button";

export default function Navigation(){
    return(
      <div className="flex items-center gap-2 absolute right-4 top-4 z-50">
      {/* <div className="shrink-0 flex py-8 flex-col items-center gap-2"> */}
            {/* <nav className="rounded-full bg-zinc-900 border-white/10 border flex p-2 flex-col items-center gap-2"> */}
            <nav className="rounded-full bg-zinc-900 border-white/10 border flex p-2 items-center gap-2">
              <Button
                className="size-12 rounded-full bg-primary text-[#1c398e] flex justify-center items-center"
                variant="ghost"
              >
                <Home className="size-5" />
              </Button>
              <Button
                className="size-12 rounded-full text-[#9f9fa9] flex justify-center items-center"
                variant="ghost"
              >
                <User className="size-5" />
              </Button>
              <Button
                className="size-12 rounded-full text-[#9f9fa9] flex justify-center items-center"
                variant="ghost"
              >
                <Code className="size-5" />
              </Button>
              <Button
                className="size-12 rounded-full text-[#9f9fa9] flex justify-center items-center"
                variant="ghost"
              >
                <Zap className="size-5" />
              </Button>
              <Button
                className="size-12 rounded-full text-[#9f9fa9] flex justify-center items-center"
                variant="ghost"
              >
                <Mail className="size-5" />
              </Button>
            </nav>
          </div>
    )
}