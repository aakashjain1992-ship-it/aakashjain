import BackgroundFX from "@/components/BackgroundFX";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
      </main>
      <Closing />
    </>
  );
}
