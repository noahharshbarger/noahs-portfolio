"use client";
import Hero from "../components/Hero";
import TechnicalSkills from "../components/TechnicalSkills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Page() {
    return (
        <main className="min-h-screen w-full bg-[#f5f6fa] flex flex-col items-center justify-center px-0 py-0">
            <Hero />
            <TechnicalSkills />
            <Projects />
            <Experience />
            <Footer />
        </main>
    );
}