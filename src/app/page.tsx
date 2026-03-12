import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIBuild from "@/components/HowIBuild";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white overflow-hidden selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      
      {/* Background ambient light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <HowIBuild />
        <Projects />
        <Experience />
        <TechStack />
        <WhyMe />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
