// Experience.jsx
// This component renders the Experience section of the portfolio homepage.

export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-[60vh] flex flex-col justify-center items-center px-0 py-0 bg-[#f5f6fa] border-b-4 border-[#f6c453] pb-24">
      <h2 className="text-3xl font-extrabold text-[#1a2238] tracking-tight mb-10 border-b-2 border-[#218380] pb-2 w-full text-center">Experience</h2>
      <div className="w-full flex flex-col gap-8 px-8">
        {/* Chronological order, most recent first */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="text-xl font-bold text-[#1a2238] mb-1 flex items-center gap-2">Frontend Instructor <span className="text-[#f6c453] font-normal">@ ERA Solutions</span></h3>
          <div className="text-xs text-[#22223b] mb-2">Remote | 2025–Present</div>
          <p className="text-[#22223b] text-sm mb-2">Taught web development (HTML, CSS, JS, React, Next.js) to cohorts of 15+ students. Focused on accessibility, data-driven UI, and responsive design.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="text-xl font-bold text-[#1a2238] mb-1 flex items-center gap-2">Civil Technologist / Systems Engineer <span className="text-[#f6c453] font-normal">@ City of Milton</span></h3>
          <div className="text-xs text-[#22223b] mb-2">2025–Present</div>
          <p className="text-[#22223b] text-sm mb-2">Led digital transformation and data engineering projects for public infrastructure and education. Developed accessible, data-driven web resources for the city.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="text-xl font-bold text-[#1a2238] mb-1 flex items-center gap-2">Software Engineer <span className="text-[#f6c453] font-normal">@ SumUp</span></h3>
          <div className="text-xs text-[#22223b] mb-2">Boulder, CO | 2024–2025</div>
          <p className="text-[#22223b] text-sm mb-2">Designed and launched production fintech and data engineering apps for 1M+ merchants. Led full-stack and data pipeline development, collaborating with cross-functional teams.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="text-xl font-bold text-[#1a2238] mb-1 flex items-center gap-2">Freelance Software Engineer</h3>
          <div className="text-xs text-[#22223b] mb-2">Remote | 2022–Present</div>
          <p className="text-[#22223b] text-sm mb-2">Built and maintained custom web and data engineering apps for clients. Specialized in fullstack development, data pipelines, and accessibility.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="text-xl font-bold text-[#1a2238] mb-1 flex items-center gap-2">Law Enforcement & Correctional Operations Manager <span className="text-[#f6c453] font-normal">@ USAF</span></h3>
          <div className="text-xs text-[#22223b] mb-2">2012–2022</div>
          <p className="text-[#22223b] text-sm mb-2">Supervised 75+ personnel and managed mission-critical electronic security and data systems in high-pressure environments.</p>
        </div>
      </div>
    </section>
  );
}
