"use client";
import Intro from "../pages/Intro";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
