import Sidebar from "@/components/home/Sidebar";
import Banner from "../components/home/Banner";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Footer from "@/components/layout/Footer";
import WorkExperience from "@/components/home/WorkExperience";

export default function HomePage() {
  return (
    <>
      <video src="https://wpriverthemes.com/jayden/wp-content/themes/jayden/images/bg-3d/video3.mp4" autoPlay muted loop className="fixed inset-0 w-full h-full object-cover"></video>
      <div className="bg-zinc-950/70 z-80 relative text-neutral-50 w-full lg:h-screen overflow-hidden">
        <div className="grid lg:flex h-full overflow-hidden">
          <Sidebar />
          <main className="overflow-y-auto flex-1 w-full max-w-7xl mx-auto scrollbar-hide">
            <div className="relative">
              <Banner />
              <div className="flex p-4 md:p-12 flex-col gap-8">
                <Stats />
                <TechStack />
                <WorkExperience />
                <Projects />
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
