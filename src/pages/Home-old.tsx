
// import {
//   ArrowRight,
//   Atom,
//   Briefcase,
//   Building2,
//   Check,
//   Code,
//   Component,
//   Database,
//   Download,
//   ExternalLink,
//   Flame,
//   Gavel,
//   GitBranch,
//   Globe,
//   Hexagon,
//   Home,
//   Layers,
//   Layout,
//   Leaf,
//   Mail,
//   MapPin,
//   Phone,
//   Rocket,
//   Route,
//   Send,
//   Server,
//   Smartphone,
//   TrendingUp,
//   Triangle,
//   Trophy,
//   User,
//   Webhook,
//   Wind,
//   Zap,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";

// export default function SecondHome() {
//   return (
//     <div>
//       <div className="font-sans bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
//         <header className="sticky z-50 backdrop-blur-md bg-zinc-950/80 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
//           <div className="max-w-6xl flex mx-auto px-8 justify-between items-center h-16">
//             <div className="flex items-center gap-2">
//               <div className="size-8 rounded-lg bg-primary text-[#1c398e] flex justify-center items-center">
//                 <Code className="size-4" />
//               </div>
//               <span className="font-bold text-lg leading-7 tracking-tight">
//                 Ajay<span className="text-primary">.dev</span>
//               </span>
//             </div>
//             <nav className="flex justify-center items-center gap-1">
//               <a className="font-medium text-neutral-50 text-sm leading-5 border-primary border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <Home className="size-4" />
//                 Home
//               </a>
//               <a className="border-transparent font-medium text-[#9f9fa9] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <User className="size-4" />
//                 About
//               </a>
//               <a className="border-transparent font-medium text-[#9f9fa9] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <Code className="size-4" />
//                 Projects
//               </a>
//               <a className="border-transparent font-medium text-[#9f9fa9] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <Zap className="size-4" />
//                 Skills
//               </a>
//               <a className="border-transparent font-medium text-[#9f9fa9] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <Mail className="size-4" />
//                 Contact
//               </a>
//             </nav>
//             <Button className="bg-primary text-[#1c398e] gap-2">
//               <Download className="size-4" />
//               Resume
//             </Button>
//           </div>
//         </header>
//         <main className="max-w-6xl mx-auto px-8 py-12">
//           <section className="relative rounded-3xl bg-zinc-900 border-white/10 border-1 border-solid p-12 overflow-hidden">
//             <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.25),transparent_55%)] absolute inset-0" />
//             <div className="relative grid grid-cols-3 items-center gap-12">
//               <div className="col-span-2 flex flex-col gap-6">
//                 <div className="rounded-full bg-zinc-800 border-white/10 border-1 border-solid flex px-4 py-1.5 items-center gap-2 w-fit">
//                   <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
//                   <span className="font-medium text-neutral-50 text-xs leading-4">
//                     Available for new opportunities
//                   </span>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                   <h1 className="leading-tight font-bold text-6xl leading-15 tracking-tight">
//                     Hi, I'm Ajay Kumar
//                     <span className="block text-primary">
//                       Full Stack Developer
//                     </span>
//                   </h1>
//                   <p className="max-w-xl leading-relaxed text-[#9f9fa9] text-lg leading-7" />
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <Button className="bg-primary text-[#1c398e] px-6 gap-2">
//                     <Rocket className="size-4" />
//                     View My Work
//                   </Button>
//                   <Button
//                     className="bg-transparent border-white/10 border-1 border-solid px-6 gap-2"
//                     variant="outline"
//                   >
//                     <Mail className="size-4" />
//                     Get in Touch
//                   </Button>
//                 </div>
//                 <div className="flex pt-2 items-center gap-4">
//                   <a className="size-10 rounded-full text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
//                     {/* <FallbackComponent className="size-4" /> */}
//                   </a>
//                   <a className="size-10 rounded-full text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
//                     {/* <FallbackComponent className="size-4" /> */}
//                   </a>
//                   <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
//                     <MapPin className="size-4" />
//                     Chandigarh, India
//                   </div>
//                 </div>
//               </div>
//               <div className="relative flex justify-center">
//                 <div className="bg-[conic-gradient(from_120deg,oklch(0.546_0.245_262.881/0.6),transparent,oklch(0.546_0.245_262.881/0.4))] blur-xl rounded-3xl absolute -inset-2" />
//                 <div className="relative aspect-[3/4] rounded-2xl border-white/10 border-1 border-solid w-full overflow-hidden">
//                   <img
//                     alt="Ajay Kumar"
//                     className="object-cover w-full h-full"
//                     data-authorname="khaled elshamy"
//                     data-authorurl="https://unsplash.com/@khaled_elshamy20"
//                     data-blurhash="LE7wmIoe0LRks:oJR+R*D%ay-;j["
//                     data-photoid="_Ty7VRTlzE8"
//                     src="https://images.unsplash.com/photo-1764545973653-94c40d993495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8MXx8fDE3ODAxNjMyMzh8MA&ixlib=rb-4.1.0&q=80&w=400"
//                   />
//                   <div className="bg-gradient-to-t from-background/80 to-transparent absolute inset-0" />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="grid grid-cols-4 mt-8 gap-6">
//             <Card className="group relative transition-all duration-300 bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4 overflow-hidden">
//               <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.18),transparent_60%)] transition-opacity duration-300 opacity-0 absolute inset-0" />
//               <CardHeader className="relative flex p-0 flex-row justify-between items-center gap-2">
//                 <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.15)] transition-colors duration-300 rounded-xl border-primary/20 border-1 border-solid flex justify-center items-center">
//                   <Briefcase className="size-5 text-primary" />
//                 </div>
//                 <TrendingUp className="size-4 text-[#9f9fa9]/60" />
//               </CardHeader>
//               <CardContent className="relative flex p-0 flex-col gap-1">
//                 <span className="font-bold text-primary text-4xl leading-10 tracking-tight">
//                   4+
//                 </span>
//                 <span className="text-[#9f9fa9] text-sm leading-5">
//                   Years Experience
//                 </span>
//               </CardContent>
//             </Card>
//             <Card className="group relative transition-all duration-300 bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4 overflow-hidden">
//               <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.18),transparent_60%)] transition-opacity duration-300 opacity-0 absolute inset-0" />
//               <CardHeader className="relative flex p-0 flex-row justify-between items-center gap-2">
//                 <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.15)] transition-colors duration-300 rounded-xl border-primary/20 border-1 border-solid flex justify-center items-center">
//                   <Globe className="size-5 text-primary" />
//                 </div>
//                 <TrendingUp className="size-4 text-[#9f9fa9]/60" />
//               </CardHeader>
//               <CardContent className="relative flex p-0 flex-col gap-1">
//                 <span className="font-bold text-primary text-4xl leading-10 tracking-tight">
//                   45+
//                 </span>
//                 <span className="text-[#9f9fa9] text-sm leading-5">
//                   Websites Built
//                 </span>
//               </CardContent>
//             </Card>
//             <Card className="group relative transition-all duration-300 bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4 overflow-hidden">
//               <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.18),transparent_60%)] transition-opacity duration-300 opacity-0 absolute inset-0" />
//               <CardHeader className="relative flex p-0 flex-row justify-between items-center gap-2">
//                 <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.15)] transition-colors duration-300 rounded-xl border-primary/20 border-1 border-solid flex justify-center items-center">
//                   <Component className="size-5 text-primary" />
//                 </div>
//                 <TrendingUp className="size-4 text-[#9f9fa9]/60" />
//               </CardHeader>
//               <CardContent className="relative flex p-0 flex-col gap-1">
//                 <span className="font-bold text-primary text-4xl leading-10 tracking-tight">
//                   20+
//                 </span>
//                 <span className="text-[#9f9fa9] text-sm leading-5">
//                   UI Components
//                 </span>
//               </CardContent>
//             </Card>
//             <Card className="group relative transition-all duration-300 bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4 overflow-hidden">
//               <div className="bg-[radial-gradient(circle_at_top_right,oklch(0.546_0.245_262.881/0.18),transparent_60%)] transition-opacity duration-300 opacity-0 absolute inset-0" />
//               <CardHeader className="relative flex p-0 flex-row justify-between items-center gap-2">
//                 <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.15)] transition-colors duration-300 rounded-xl border-primary/20 border-1 border-solid flex justify-center items-center">
//                   <Trophy className="size-5 text-primary" />
//                 </div>
//                 <TrendingUp className="size-4 text-[#9f9fa9]/60" />
//               </CardHeader>
//               <CardContent className="relative flex p-0 flex-col gap-1">
//                 <span className="font-bold text-primary text-4xl leading-10 tracking-tight">
//                   5th
//                 </span>
//                 <span className="text-[#9f9fa9] text-sm leading-5">
//                   Global Hackathon Rank
//                 </span>
//               </CardContent>
//             </Card>
//           </section>
//           <section className="flex mt-12 flex-col gap-6">
//             <div className="flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <h2 className="font-bold text-2xl leading-8 tracking-tight" />
//                 <p className="text-[#9f9fa9] text-sm leading-5">
//                   Technologies I work with every day
//                 </p>
//               </div>
//               <Zap className="size-5 text-primary" />
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4">
//                 <CardHeader className="flex p-0 flex-row items-center gap-2">
//                   <div className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
//                     <Layout className="size-4 text-primary" />
//                   </div>
//                   <span className="font-semibold">Frontend</span>
//                 </CardHeader>
//                 <CardContent className="flex p-0 flex-wrap gap-2">
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Atom className="size-3 text-primary" />
//                     </span>
//                     React.js
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Triangle className="size-3 text-primary" />
//                     </span>
//                     Next.js
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Wind className="size-3 text-primary" />
//                     </span>
//                     Tailwind
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Component className="size-3 text-primary" />
//                     </span>
//                     ShadCN UI
//                   </Badge>
//                 </CardContent>
//               </Card>
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4">
//                 <CardHeader className="flex p-0 flex-row items-center gap-2">
//                   <div className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
//                     <Server className="size-4 text-primary" />
//                   </div>
//                   <span className="font-semibold">Backend</span>
//                 </CardHeader>
//                 <CardContent className="flex p-0 flex-wrap gap-2">
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Hexagon className="size-3 text-primary" />
//                     </span>
//                     Node.js
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Flame className="size-3 text-primary" />
//                     </span>
//                     Hono
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Route className="size-3 text-primary" />
//                     </span>
//                     Express
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Webhook className="size-3 text-primary" />
//                     </span>
//                     REST APIs
//                   </Badge>
//                 </CardContent>
//               </Card>
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4">
//                 <CardHeader className="flex p-0 flex-row items-center gap-2">
//                   <div className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
//                     <Database className="size-4 text-primary" />
//                   </div>
//                   <span className="font-semibold">Database</span>
//                 </CardHeader>
//                 <CardContent className="flex p-0 flex-wrap gap-2">
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Database className="size-3 text-primary" />
//                     </span>
//                     PostgreSQL
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Leaf className="size-3 text-primary" />
//                     </span>
//                     MongoDB
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Layers className="size-3 text-primary" />
//                     </span>
//                     TanStack Query
//                   </Badge>
//                 </CardContent>
//               </Card>
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-4">
//                 <CardHeader className="flex p-0 flex-row items-center gap-2">
//                   <div className="size-9 rounded-lg bg-zinc-800 flex justify-center items-center">
//                     <Smartphone className="size-4 text-primary" />
//                   </div>
//                   <span className="font-semibold" />
//                 </CardHeader>
//                 <CardContent className="flex p-0 flex-wrap gap-2">
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Smartphone className="size-3 text-primary" />
//                     </span>
//                     React Native
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <GitBranch className="size-3 text-primary" />
//                     </span>
//                     Git
//                   </Badge>
//                   <Badge
//                     className="bg-zinc-800 text-neutral-50 pl-1.5 gap-1.5"
//                     variant="secondary"
//                   >
//                     <span className="size-4 bg-[oklch(0.546_0.245_262.881/0.2)] rounded-sm flex justify-center items-center">
//                       <Triangle className="size-3 text-primary" />
//                     </span>
//                     Vercel
//                   </Badge>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//           <section className="flex mt-12 flex-col gap-8">
//             <div className="flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <h2 className="font-bold text-2xl leading-8 tracking-tight">
//                   Professional Journey
//                 </h2>
//                 <p className="text-[#9f9fa9] text-sm leading-5">
//                   My career path and key milestones
//                 </p>
//               </div>
//               <Briefcase className="size-5 text-primary" />
//             </div>
//             <div className="relative">
//               <div className="left-1/2 -translate-x-1/2 bg-white/10 absolute inset-y-0 w-px" />
//               <div className="flex flex-col gap-10">
//                 <div className="grid grid-cols-2 items-center gap-12">
//                   <div className="flex justify-end">
//                     <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-3 w-full">
//                       <CardHeader className="flex p-0 flex-col gap-2">
//                         <Badge className="bg-primary text-[#1c398e] w-fit">
//                           2022 - Present
//                         </Badge>
//                         <div className="flex flex-col gap-0.5">
//                           <h3 className="font-semibold text-lg leading-7">
//                             Senior Full Stack Developer
//                           </h3>
//                           <span className="font-medium text-primary text-sm leading-5 flex items-center gap-1.5">
//                             <Building2 className="size-4" />
//                             Metanect
//                           </span>
//                         </div>
//                       </CardHeader>
//                       <CardContent className="flex p-0 flex-col gap-2">
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Led development of scalable web platforms serving 50k+
//                           active users.
//                         </div>
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                         </div>
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Mentored a team of 4 engineers and improved delivery
//                           velocity by 30%.
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                   <div />
//                   <span className="left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-zinc-950 border-4 border-solid absolute" />
//                 </div>
//                 <div className="grid grid-cols-2 items-center gap-12">
//                   <div />
//                   <div className="flex justify-start">
//                     <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-3 w-full">
//                       <CardHeader className="flex p-0 flex-col gap-2">
//                         <Badge className="bg-primary text-[#1c398e] w-fit">
//                           2020 - 2022
//                         </Badge>
//                         <div className="flex flex-col gap-0.5">
//                           <h3 className="font-semibold text-lg leading-7">
//                             Web Developer
//                           </h3>
//                           <span className="font-medium text-primary text-sm leading-5 flex items-center gap-1.5">
//                             <Building2 className="size-4" />
//                             Kynet Web Solutions
//                           </span>
//                         </div>
//                       </CardHeader>
//                       <CardContent className="flex p-0 flex-col gap-2">
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Built responsive client websites with Next.js and
//                           Tailwind CSS.
//                         </div>
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Integrated REST APIs and optimized page load times by
//                           40%.
//                         </div>
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Collaborated with designers to ship pixel-perfect
//                           interfaces.
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                   <span className="left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-zinc-950 border-4 border-solid absolute" />
//                 </div>
//                 <div className="grid grid-cols-2 items-center gap-12">
//                   <div className="flex justify-end">
//                     <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-6 gap-3 w-full">
//                       <CardHeader className="flex p-0 flex-col gap-2">
//                         <Badge className="bg-primary text-[#1c398e] w-fit">
//                           2019 - 2020
//                         </Badge>
//                         <div className="flex flex-col gap-0.5">
//                           <h3 className="font-semibold text-lg leading-7">
//                             Frontend Intern
//                           </h3>
//                           <span className="font-medium text-primary text-sm leading-5 flex items-center gap-1.5">
//                             <Building2 className="size-4" />
//                             TechStart Labs
//                           </span>
//                         </div>
//                       </CardHeader>
//                       <CardContent className="flex p-0 flex-col gap-2">
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Developed interactive UI features using React and
//                           modern CSS.
//                         </div>
//                         <div className="text-[#9f9fa9] text-sm leading-5 flex items-start gap-2">
//                           <Check className="size-4 shrink-0 text-primary mt-0.5" />
//                           Contributed to internal design system and component
//                           library.
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                   <div />
//                   <span className="left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-zinc-950 border-4 border-solid absolute" />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="flex mt-12 flex-col gap-6">
//             <div className="flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <h2 className="font-bold text-2xl leading-8 tracking-tight">
//                   Featured Projects
//                 </h2>
//                 <p className="text-[#9f9fa9] text-sm leading-5">
//                   Selected work I'm proud of
//                 </p>
//               </div>
//               <a className="font-medium text-primary text-sm leading-5 flex items-center gap-1">
//                 View all
//                 <ArrowRight className="size-4" />
//               </a>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-0 gap-0 overflow-hidden">
//                 <div className="relative w-full h-44 overflow-hidden">
//                   <img
//                     alt="Points Trading Platform"
//                     className="object-cover w-full h-full"
//                     data-authorname="Jakub Żerdzicki"
//                     data-authorurl="https://unsplash.com/@jakubzerdzicki"
//                     data-blurhash="L34K:MB@]?XD#fwWwWw;G1=jOv$."
//                     data-photoid="n3ba57RKVNs"
//                     src="https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwdGVjaG5vbG9neSUyMGNvZGUlMjBiYWNrZ3JvdW5kfGVufDF8MHx8fDE3ODAzMTIxMTF8MA&ixlib=rb-4.1.0&q=80&w=400"
//                   />
//                   <div className="bg-gradient-to-t from-card to-transparent absolute inset-0" />
//                   <Badge className="bg-primary text-[#1c398e] absolute left-4 top-4">
//                     Web App
//                   </Badge>
//                 </div>
//                 <CardContent className="flex p-6 flex-col gap-3">
//                   <div className="flex justify-between items-center">
//                     <h3 className="font-semibold text-lg leading-7">
//                       Points Trading Platform
//                     </h3>
//                     <ExternalLink className="size-4 text-[#9f9fa9]" />
//                   </div>
//                   <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                     A points trading platform for buying and selling earned
//                     points before token launch, with a custom buy/sell offer
//                     system and real-time API integration.
//                   </p>
//                   <div className="flex pt-1 flex-wrap gap-2">
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       Next.js
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       TypeScript
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       TanStack Query
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       ShadCN
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="bg-zinc-900 border-white/10 border-1 border-solid p-0 gap-0 overflow-hidden">
//                 <div className="relative bg-[radial-gradient(circle_at_center,oklch(0.546_0.245_262.881/0.4),oklch(0.21_0.006_285.885))] w-full h-44 overflow-hidden">
//                   <div className="flex justify-center items-center w-full h-full">
//                     <Gavel className="size-16 text-primary/70" />
//                   </div>
//                   <Badge className="bg-primary text-[#1c398e] absolute left-4 top-4">
//                     Mobile App
//                   </Badge>
//                 </div>
//                 <CardContent className="flex p-6 flex-col gap-3">
//                   <div className="flex justify-between items-center">
//                     <h3 className="font-semibold text-lg leading-7">
//                       Auction Marketplace App
//                     </h3>
//                     <ExternalLink className="size-4 text-[#9f9fa9]" />
//                   </div>
//                   <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                     A cross-platform marketplace with real-time bidding, live
//                     streaming, in-app chat, push notifications and secure
//                     Razorpay payments.
//                   </p>
//                   <div className="flex pt-1 flex-wrap gap-2">
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       React Native
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       Expo
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       Hono
//                     </Badge>
//                     <Badge
//                       className="text-[#9f9fa9] border-white/10 border-1 border-solid"
//                       variant="outline"
//                     >
//                       PostgreSQL
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//           <section className="mt-12">
//             <Card className="relative bg-zinc-900 border-white/10 border-1 border-solid p-12 gap-0 overflow-hidden">
//               <div className="bg-[radial-gradient(circle_at_bottom_left,oklch(0.546_0.245_262.881/0.25),transparent_60%)] absolute inset-0" />
//               <CardContent className="relative flex p-0 justify-between items-center">
//                 <div className="flex flex-col gap-3">
//                   <h2 className="font-bold text-3xl leading-9 tracking-tight">
//                     Let's build something great together
//                   </h2>
//                   <p className="max-w-md text-[#9f9fa9]">
//                     Have a project in mind or just want to connect? Reach out
//                     and let's talk.
//                   </p>
//                   <div className="text-[#9f9fa9] text-sm leading-5 flex pt-2 items-center gap-4">
//                     <span className="flex items-center gap-2">
//                       <Mail className="size-4 text-primary" />
//                       ajaykumar.builds@gmail.com
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <Phone className="size-4 text-primary" />
//                       9910611594
//                     </span>
//                   </div>
//                 </div>
//                 <Button className="bg-primary text-[#1c398e] text-base leading-6 px-8 py-6 gap-2">
//                   <Send className="size-4" />
//                   Contact Me
//                 </Button>
//               </CardContent>
//             </Card>
//           </section>
//           <footer className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-12 pt-8 justify-between items-center">
//             <span className="text-[#9f9fa9] text-sm leading-5" />
//             <div className="flex items-center gap-3">
//               <a className="size-9 rounded-full text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
//                 {/* <FallbackComponent className="size-4" /> */}
//               </a>
//               <a className="size-9 rounded-full text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
//                 {/* <FallbackComponent className="size-4" /> */}
//               </a>
//               <a className="size-9 rounded-full text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
//                 <Mail className="size-4" />
//               </a>
//             </div>
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// }
