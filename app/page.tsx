import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { FeatureDemo } from "@/components/FeatureDemo";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDockDemo />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <FeatureDemo />
        <Footer />
      </div>
    </main>
  );
}
