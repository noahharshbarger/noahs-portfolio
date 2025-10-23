// Hero.jsx
// This component renders the hero section of the portfolio homepage.
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="aboutme" className="w-full min-h-[80vh] flex flex-col justify-center items-center px-0 py-0 bg-white border-b-4 border-[#f6c453] pb-24">
  <div className="w-32 h-28 md:w-40 md:h-36 flex items-start justify-center overflow-hidden mt-4 mb-0">
        <img
          src="/profile.png"
          alt="Noah Harshbarger avatar"
          className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#218380] shadow-lg bg-[#e0e7ef] object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a2238] mb-4 tracking-tight drop-shadow-lg text-center">Noah Harshbarger</h1>
      <h2 className="text-2xl md:text-3xl text-[#218380] font-semibold mb-6 text-center">Data Engineer & Full Stack Developer</h2>
      <p className="text-[#22223b] text-lg md:text-xl text-center mb-10 max-w-2xl">
        I design, build, and optimize data pipelines, analytics platforms, and scalable web applications. My focus is on making data accessible, actionable, and impactful for organizations. Let's create something meaningful with data.
      </p>
      <div className="flex gap-6">
        <a href="#featuredprojects" className="bg-[#f6c453] hover:bg-[#218380] text-[#1a2238] px-8 py-3 rounded-xl font-bold shadow-lg transition-all text-lg border-2 border-[#f6c453] hover:text-white">View Projects</a>
        <a href="mailto:noahharshb@gmail.com" className="bg-[#218380] hover:bg-[#f6c453] text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all text-lg border-2 border-[#218380] hover:text-[#1a2238]">Contact</a>
      </div>
    </section>
  );
}
