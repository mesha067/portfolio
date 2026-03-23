import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Evidence from "@/components/Evidence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import ScrollNavigation from "@/components/ScrollNavigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Evidence />
        <Contact />
      </main>
      <Footer />
      <ScrollNavigation />
    </>
  );
}
