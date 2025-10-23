// Projects.jsx
// This component renders the Projects section of the portfolio homepage.
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="featuredprojects"
      className="w-full min-h-[60vh] flex flex-col justify-center items-center px-0 py-0 bg-[#f5f6fa] border-b-4 border-[#f6c453] pb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-extrabold text-[#1a2238] tracking-tight mb-10 border-b-2 border-[#218380] pb-2 w-full text-center">Projects</h2>
      <div className="w-full grid md:grid-cols-2 gap-8 px-8">
        {/* Project: Data Doctor */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-bold text-[#1a2238] mb-2">Data Doctor</h3>
          <div className="text-xs text-[#22223b] mb-1">Tech Stack: Python, pandas, NumPy, PyPI</div>
          <p className="mb-1"><span className="font-semibold">Problem:</span> Data scientists and analysts needed a simple, reliable way to validate and clean large datasets in Python workflows.</p>
          <p className="mb-1"><span className="font-semibold">Contribution:</span> Designed and published a robust open-source library with clear API, documentation, and test coverage.</p>
          <p className="mb-1"><span className="font-semibold">Outcome:</span> Adopted by 1,000+ users; streamlined data cleaning for research and business teams.</p>
          <p className="text-[#218380] text-sm font-medium mb-2">Enabled 1,000+ users to process data 30% faster.</p>
          <div className="flex gap-2 mt-auto">
            <a href="https://pypi.org/project/data-doctor-lib/" target="_blank" rel="noopener" className="text-[#f6c453] font-semibold hover:underline">View on PyPI</a>
            <a href="https://github.com/noahharshbarger/data-doctor-lib" target="_blank" rel="noopener" className="text-[#f6c453] font-semibold hover:underline">GitHub</a>
          </div>
        </div>
        {/* Project: SumUp Accelerator Suite */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-bold text-[#1a2238] mb-2">SumUp Accelerator Suite</h3>
          <div className="text-xs text-[#22223b] mb-1">Tech Stack: React, Next.js, TypeScript, Python, Go, AWS</div>
          <p className="mb-1"><span className="font-semibold">Problem:</span> Small business merchants needed accessible, scalable tools to manage savings and customer reviews.</p>
          <p className="mb-1"><span className="font-semibold">Contribution:</span> Co-designed and built Savings Wallet and Reviews components for 1M+ merchants, collaborating with designers and back-end engineers.</p>
          <p className="mb-1"><span className="font-semibold">Outcome:</span> Launched to 1M+ users, improved merchant engagement and financial literacy.</p>
          <p className="text-[#218380] text-sm font-medium mb-2">Empowered 1M+ merchants to manage finances and reviews more efficiently.</p>
          <div className="flex gap-2 mt-auto">
            <a href="https://www.sumup.com/en-us/investments/" target="_blank" rel="noopener" className="text-[#f6c453] font-semibold hover:underline">Live Site</a>
          </div>
        </div>
        {/* Project: WV Broadband Map */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-bold text-[#1a2238] mb-2">WV Broadband Map</h3>
          <div className="text-xs text-[#22223b] mb-1">Tech Stack: React, Vite, Mapbox, JavaScript, GeoJSON, Python (data ingestion)</div>
          <p className="mb-1"><span className="font-semibold">Problem:</span> West Virginia residents and policymakers needed a clear, interactive way to visualize broadband coverage gaps and underlying data.</p>
          <p className="mb-1"><span className="font-semibold">Contribution:</span> Built a data-driven interactive map using GeoJSON, Mapbox, and custom data ingestion pipelines (Python) to surface real-time broadband data and analytics on the frontend.</p>
          <p className="mb-1"><span className="font-semibold">Outcome:</span> Used by local government and residents to advocate for improved broadband access and data-driven policy decisions.</p>
          <p className="text-[#218380] text-sm font-medium mb-2">Helped 5,000+ residents and officials analyze broadband gaps with data science tools.</p>
          <div className="flex gap-2 mt-auto">
            <a href="https://noahharshbarger.github.io/wv-broadband-map/" target="_blank" rel="noopener" className="text-[#f6c453] font-semibold hover:underline">Live Map</a>
            <a href="https://github.com/noahharshbarger/wv-broadband-map" target="_blank" rel="noopener" className="text-[#f6c453] font-semibold hover:underline">GitHub</a>
          </div>
        </div>
        {/* Project: Quadratic (AI Spreadsheet Beta Test) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-bold text-[#1a2238] mb-2">Quadratic (AI Spreadsheet Beta Test)</h3>
          <div className="text-xs text-[#22223b] mb-1">Tech Stack: Data analysis, QA, AI, spreadsheet automation</div>
          <p className="mb-1"><span className="font-semibold">Contribution:</span> Beta tested and provided feedback for an AI-powered spreadsheet startup, focusing on data integration, formula accuracy, and user experience. Helped shape product features by validating real-world data workflows.</p>
          <p className="mb-1"><span className="font-semibold">Outcome:</span> Improved data reliability and usability for early users; contributed to product-market fit for a next-gen data tool.</p>
        </div>
        {/* Project: EverythingWeather (Severe Weather Data Pipeline) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-[#218380]">
          <h3 className="font-bold text-[#1a2238] mb-2">EverythingWeather (Severe Weather Data Pipeline)</h3>
          <div className="text-xs text-[#22223b] mb-1">Tech Stack: React Native, Firebase, AWS MRMS, R2, data engineering</div>
          <p className="mb-1"><span className="font-semibold">Contribution:</span> Optimized ingestion, parsing, and smoothing of severe weather data for a mobile notification app. Implemented efficient data pipelines and storage, enabling real-time alerts and configurable data sampling.</p>
          <p className="mb-1"><span className="font-semibold">Outcome:</span> Delivered reliable, scalable weather notifications to users; improved data processing speed and reduced costs for the client.</p>
        </div>
      </div>
    </motion.section>
  );
}
