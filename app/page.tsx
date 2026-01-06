"use client";
import Intro from "../src/pages/Intro";
import Projects from "../src/pages/Projects";
import About from "../src/pages/About";
import Skills from "../src/pages/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <Skills />
    </main>
  );
}
