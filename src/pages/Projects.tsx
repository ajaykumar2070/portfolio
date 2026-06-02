// import {
//   ExternalLink,
//   FolderGit2,

// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Footer from "@/components/layout/Footer";

// export default function ProjectsPage() {
//   return (
//     <div>
//       <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
//         {/* <header className="sticky z-50 backdrop-blur-md bg-zinc-950/80 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
//           <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16">
//             <div className="flex items-center gap-2">
//               <div className="size-9 rounded-lg bg-[#155dfc] flex justify-center items-center">
//                 <Code className="size-5 text-neutral-50" />
//               </div>
//               <span className="font-bold text-lg leading-7">
//                 Ajay<span className="text-[#155dfc]">.dev</span>
//               </span>
//             </div>
//             <nav className="flex justify-center items-center gap-2">
//               <a className="transition-colors rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-3 py-2 items-center gap-2">
//                 <Home className="size-4" />
//                 Home
//               </a>
//               <a className="transition-colors rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-3 py-2 items-center gap-2">
//                 <User className="size-4" />
//                 About
//               </a>
//               <a className="font-medium text-neutral-50 text-sm leading-5 border-[#155dfc] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2 items-center gap-2">
//                 <Code className="size-4" />
//                 Projects
//               </a>
//               <a className="transition-colors rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-3 py-2 items-center gap-2">
//                 <Zap className="size-4" />
//                 Skills
//               </a>
//               <a className="transition-colors rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-3 py-2 items-center gap-2">
//                 <Mail className="size-4" />
//                 Contact
//               </a>
//             </nav>
//             <Button className="bg-[#155dfc] text-neutral-50 gap-2">
//               <Download className="size-4" />
//               Resume
//             </Button>
//           </div>
//         </header> */}
//         <main className="max-w-[1140px] mx-auto px-8 py-12">
//           <div className="flex flex-col gap-3">
//             <div className="text-[#155dfc] text-sm leading-5 flex items-center gap-2">
//               <FolderGit2 className="size-4" />
//               <span className="font-medium uppercase tracking-wide">
//                 My Work
//               </span>
//             </div>
//             <h1 className="font-bold text-4xl leading-10 tracking-tight">
//               All Projects
//             </h1>
//             <p className="max-w-xl text-[#9f9fa9] text-base leading-6">
//               A complete collection of products, apps and experiments I've
//               designed and built from concept to deployment.
//             </p>
//           </div>
//           <div className="flex mt-8 flex-wrap items-center gap-2">
//             <Button className="rounded-full bg-[#155dfc] text-neutral-50 text-sm leading-5 px-4">
//               All
//             </Button>
//             <Button
//               className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-0 border-solid px-4"
//               variant="outline"
//             >
//               Web App
//             </Button>
//             <Button
//               className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-0 border-solid px-4"
//               variant="outline"
//             >
//               Mobile App
//             </Button>
//             <Button
//               className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-0 border-solid px-4"
//               variant="outline"
//             >
//               Dashboard
//             </Button>
//             <Button
//               className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-0 border-solid px-4"
//               variant="outline"
//             >
//               SaaS
//             </Button>
//           </div>
//           <div className="grid grid-cols-3 mt-8 gap-6">
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="Points Trading Platform"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="Luke Chesser"
//                   data-authorurl="https://unsplash.com/@lukechesser"
//                   data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
//                   data-photoid="JKUTrJ4vK00"
//                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmQlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8MHx8fDE3ODAzNzk2MDV8MA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   Web App
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     Points Trading Platform
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A points trading platform for buying and selling earned points
//                   before token launch, with custom buy/sell offers.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Next.js
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     TypeScript
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     TanStack
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="Auction Marketplace App"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="Azamat E"
//                   data-authorurl="https://unsplash.com/@esen_aza"
//                   data-blurhash="L255FBoJ00NG?boeE1NG8{of?bWB"
//                   data-photoid="eb1cgnNIazI"
//                   src="https://images.unsplash.com/photo-1603566234499-85676f87022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBkYXJrfGVufDF8MHx8fDE3ODAzNzk2MDV8MA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   Mobile App
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     Auction Marketplace App
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A cross-platform marketplace with real-time bidding, live
//                   streaming, in-app chat and secure payments.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     React Native
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Expo
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Hono
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="E-commerce Analytics"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="Carlos Muza"
//                   data-authorurl="https://unsplash.com/@kmuza"
//                   data-blurhash="LJEfTn-?D$8w_3ozf+M{9EV@%gx]"
//                   data-photoid="hpjSkU2UYSU"
//                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwYW5hbHl0aWNzfGVufDF8MHx8fDE3ODAzNzk2MDV8MA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   Dashboard
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     Commerce Analytics
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A real-time analytics dashboard for online stores with revenue
//                   tracking, charts and conversion insights.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     React.js
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Node.js
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     PostgreSQL
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="Crypto Wallet"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="Viktor Forgacs"
//                   data-authorurl="https://unsplash.com/@sonance"
//                   data-blurhash="L02rz1R48_yEV@t7j?ay8_kW%NaK"
//                   data-photoid="3PyBkxgTiL0"
//                   src="https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nJTIwYXBwJTIwZGFyayUyMHNjcmVlbnxlbnwxfDB8fHwxNzgwMzc5NjA1fDA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   Mobile App
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     Crypto Wallet
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A secure crypto wallet with portfolio tracking, swap
//                   functionality and biometric authentication.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     React Native
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Expo
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     MongoDB
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="Realtime Chat"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="kuu akura"
//                   data-authorurl="https://unsplash.com/@akurakuu"
//                   data-blurhash="LCIrU3i*_L%dX,t6adjKkSWZV{ob"
//                   data-photoid="pnK6Q-QTHM4"
//                   src="https://images.unsplash.com/photo-1662974770404-468fd9660389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8MHx8fDE3ODAyMjIyNjR8MA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   Web App
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     Realtime Chat Suite
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A scalable messaging platform with channels, threads, presence
//                   indicators and WebSocket sync.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Next.js
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Socket.io
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Redis
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="group shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] bg-zinc-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
//               <div className="relative w-full h-44 overflow-hidden">
//                 <img
//                   alt="SaaS Builder"
//                   className="object-cover transition-transform duration-300 w-full h-full"
//                   data-authorname="Luke Chesser"
//                   data-authorurl="https://unsplash.com/@lukechesser"
//                   data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
//                   data-photoid="JKUTrJ4vK00"
//                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwc29mdHdhcmUlMjBwcm9kdWN0JTIwZGFzaGJvYXJkfGVufDF8MHx8fDE3ODAzNzk2MDV8MA&ixlib=rb-4.1.0&q=80&w=400"
//                 />
//                 <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/0.7),transparent_60%)] absolute inset-0" />
//                 <Badge className="bg-[#155dfc] text-neutral-50 absolute left-3 top-3">
//                   SaaS
//                 </Badge>
//               </div>
//               <div className="flex p-6 flex-col gap-3">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="font-semibold text-lg leading-7">
//                     No-Code SaaS Builder
//                   </h3>
//                   <ExternalLink className="size-4 shrink-0 transition-colors text-[#9f9fa9]" />
//                 </div>
//                 <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
//                   A drag-and-drop app builder with reusable component library,
//                   theming and one-click deployment.
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     React.js
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Tailwind
//                   </Badge>
//                   <Badge
//                     className="text-[#9f9fa9] text-xs leading-4 border-white/10 border-0 border-solid"
//                     variant="outline"
//                   >
//                     Vercel
//                   </Badge>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         <Footer/>
//         </main>
//       </div>
//     </div>
//   );
// }
