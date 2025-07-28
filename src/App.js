import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => (
  <div className="bg-black text-white scroll-smooth">
    <NavBar />
    <main className="pt-20">
      <Intro />
      <About />
      <Education />
      <Certificates />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
