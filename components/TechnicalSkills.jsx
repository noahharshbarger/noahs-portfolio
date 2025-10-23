// TechnicalSkills.jsx
// Renders technical skills grouped by category.
import React from "react";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="w-full min-h-[60vh] flex flex-col justify-center items-center px-0 py-0 bg-[#f5f6fa] border-b-4 border-[#f6c453] pb-24">
      <h2 className="text-3xl font-extrabold text-[#1a2238] tracking-tight mb-10 border-b-2 border-[#218380] pb-2 w-full text-center">Technical Skills</h2>
      <div className="w-full grid md:grid-cols-2 gap-8 px-8">
        {/* Card: Frontend */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-semibold text-[#1a2238] mb-2 text-lg">Frontend</h3>
          <ul className="text-[#22223b] text-sm list-disc list-inside">
            <li>React, Next.js, TypeScript</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>Framer Motion, Chart.js</li>
            <li>Accessibility (WCAG), Responsive Design</li>
          </ul>
        </div>
        {/* Card: Backend & DevOps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-semibold text-[#1a2238] mb-2 text-lg">Backend & DevOps</h3>
          <ul className="text-[#22223b] text-sm list-disc list-inside">
            <li>Node.js, Express, Python</li>
            <li>PostgreSQL, MongoDB, Redis</li>
            <li>AWS, Docker, CI/CD</li>
            <li>Testing: Jest, Playwright</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
