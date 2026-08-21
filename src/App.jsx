import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import AboutPage from "./routes/AboutPage";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
