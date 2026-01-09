import AboutPage from "@/components/About";
import FAQS from "@/components/Faqs";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Skills from "@/components/Skills";
import Works from "@/components/Works"

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutPage/>
      <Works/>
      <Services/>
      <Skills/>
      <FAQS/>
    </div>
  );
}
