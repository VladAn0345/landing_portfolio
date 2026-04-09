import Hero from "./sections/hero";
import About from "./sections/about";
import Quote from "./sections/quote";
import Projects from "./sections/projects";
import Logos from "./sections/logos";
import Resume from "./sections/resume";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Quote />
      <Projects />
      <Logos />
      <Resume />
    </main>
  );
}
