"use client"

import { motion } from "framer-motion";

export default function Home() {
    return (
                <main className="min-h-screen w-full bg-black flex flex-col items-center px-4 py-10">
                    <section className="w-full max-w-3xl flex flex-col items-center text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-5xl md:text-7xl font-extrabold text-[#EDE8D0] mb-6"
                            >
                                Noah Harshbarger
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                                className="text-3xl md:text-4xl font-bold text-[#EDE8D0] mb-4"
                                >
                                    Fullstack Engineer
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                                    className="text-xl md:text-xl text-[#EDE8D0] max-w-2xl mb-8"
                                    >
                                        Experienced with building accessible, cross-browser, and responsive web applications. 
                                        Skilled in translating designs into functional, standards-compliant web interfaces.
                                        Passionate about accessibility, usability, and emerging web technologies. Fluent in effective communication
                                        and team collaboration. Strong analytical and problem-solving skillset with a focus on clean, maintainable code. 
                                    </motion.p>
                                    <div className="flex gap-10 justify-center mb-2">
                                        <a href="https://github.com/noahharshbarger" target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-[#c5b391] text-white font-bold hover:bg-[#b49e72] transition-all duration-200">
                                        GitHub
                                        </a>
                                        <a href="https://www.linkedin.com/in/noah-harshbarger/" target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-[#c5b391] text-white font-bold hover:bg-[#b49e72] transition-all duration-200">
                                        LinkedIn
                                        </a>
                                        <a href="mailto:noahharshb@gmail.com" className="px-4 py-2 rounded-lg bg-[#c5b391] text-white font-bold hover:bg-[#b49e72] transition-all duration-200">
                                            Email Me
                                        </a>
                                        <a href="/Noah_Harshbarger_Resume.html" className="px-4 py-2 rounded-lg bg-[#c5b391] text-white font-bold hover:bg-[#b49e72] transition-all duration-200" download>
                                            Download Resume
                                        </a>
                                    </div>
                    </section>
                    <motion.section
                        className="w-full max-w-2xl bg-white/10 rounded-2xl shadow-xl p-10 flex flex-col items-center mb-24"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <h2 className="text-2xl font-bold text-[#EDE8D0] mb-2">
                                About Me
                            </h2>
                            <p className="text-lg text-[#EDE8D0] text-center max-w-lg mb-4">
                                Air Force Veteran → Fullstack Engineer with 5+ years of experience building
                                and breaking things on the web. Novice at politics and expert at motorcycle repair.
                            </p>
                            <h3 className="text-lg font-semibold text-[#EDE8D0] mt-4 mb-2">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center text-sm mb-2">
                                <p className="bg-white/20 text-[#EDE8D0] px-2 py-1 rounded">Frontend</p>
                                <img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square" alt="JavaScript Shield" />
                                <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=fff&style=flat-square" alt="TypeScript Shield" />
                                <img src="https://shields.io/badge/React-61DAFB?logo=React&logoColor=000&style=flat-square" alt="React Shield" />
                                <img src="https://shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=fff&style=flat-square" alt="HTML5 Shield" />
                                <img src="https://img.shields.io/badge/CSS3-Frontend-yellow" alt="CSS3 Shield" />
                                <img src="https://shields.io/badge/Sass-CC6699?logo=Sass&logoColor=fff&style=flat-square" alt="Sass Shield" />
                                <img src="https://shields.io/badge/Next.js-000000?logo=Next.js&logoColor=fff&style=flat-square" alt="Next.js Shield" />
                                <img src="https://shields.io/badge/Tailwind_CSS-38B2AC?logo=TailwindCSS&logoColor=fff&style=flat-square" alt="Tailwind CSS Shield" />
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center text-sm mb-2">
                                <br />
                                <p className="bg-white/20 text-[#EDE8D0] px-2 py-1 rounded">Backend</p>
                                <img src="https://shields.io/badge/Node.js-339933?logo=Node.js&logoColor=fff&style=flat-square" alt="Node.js Shield" />
                                <img src="https://shields.io/badge/Python-3776AB?logo=Python&logoColor=fff&style=flat-square" alt="Python Shield" />
                                <img src="https://shields.io/badge/Go-00ADD8?logo=Go&logoColor=fff&style=flat-square" alt="Go Shield" />
                                <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Shield" />
                                <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Shield" />
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center text-sm mb-2">
                                <br />
                                <p className="bg-white/20 text-[#EDE8D0] px-2 py-1 rounded">DevOps & Others</p>
                                <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Shield" />
                                <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Shield" />
                                <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes Shield" />
                                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux Shield" />
                                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Shield" />
                                <img src="https://img.shields.io/badge/REST_API-000000?style=for-the-badge&logo=rest-api&logoColor=white" alt="REST API Shield" />
                            </div>
                        </motion.section>
                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-full max-w-3xl flex flex-col items-center mb-24">
                                <h2 className="text-2xl font-bold text-[#EDE8D0] mb-6">
                                    Projects
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8 w-full">
                                    <div className="bg-white/10 rounded-xl shadow p-6 flex flex-col items-center">
                                        <h3 className="font-bold text-[#EDE8D0] mb-2">
                                            EDUcational
                                        </h3>
                                        <p className="text-[#EDE8D0] mb-2">
                                            A full-featured learning management system (LMS) built with 
                                            React and Next.js, designed to facilitate online education
                                            with a focus on accessibility and user engagement.
                                        </p>
                                        <a href="https://nextjs-boilerplate-green-chi-43.vercel.app/" target="_blank" rel="noopener"
                                            className="text-[#c5b391] font-semibold hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                    <div className="bg-white/10 rounded-xl shadow p-6 flex flex-col items-center">
                                        <h3 className="font-bold text-[#EDE8D0] mb-2">
                                            SumUp Accelerator Suite
                                        </h3>
                                        <p className="text-[#EDE8D0] mb-2">
                                            Co-designed and built Savings Wallet and Reviews components for 1M+ merchants,
                                            delivering accessible investment opportunities and review analyses to small business owners.
                                        </p>
                                        <a href="https://www.sumup.com/en-us/investments/" target="_blank" rel="noopener"
                                            className="text-[#c5b391] font-semibold hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                    <div className="bg-white/10 rounded-xl shadow p-6 flex flex-col items-center">
                                        <h3 className="font-bold text-[#EDE8D0] mb-2">
                                            Data Doctor
                                        </h3>
                                        <p className="text-[#EDE8D0] mb-2">
                                            A Python library for data validation and cleaning. Published on PyPi.
                                        </p>
                                        <a href="https://pypi.org/project/data-doctor/" target="_blank" rel="noopener"
                                            className="text-[#c5b391] font-semibold hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                        <div className="bg-white/10 rounded-xl shadow p-6 flex flex-col items-center">
                                        <h3 className="font-bold text-[#EDE8D0] mb-2">
                                            WV Broadband Map
                                        </h3>
                                        <p className="text-[#EDE8D0] mb-2">
                                            An interactive map highlighting broadband availability across West Virginia,
                                            built with React and Vite. Features filtering options and responsive design for optimal user experience.
                                        </p>
                                        <a href="https://noahharshbarger.github.io/wv-broadband-map/" target="_blank" rel="noopener"
                                            className="text-[#c5b391] font-semibold hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </motion.section>
                            <motion.section
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full max-w-2xl bg-white/10 rounded-2xl shadow-xl p-10 flex flex-col items-center mb-24">
                                    <h2 className="text-2xl font-bold text-[#EDE8D0] mb-6">
                                        Experience
                                    </h2>
                                    <p className="text-[#EDE8D0] text-center mb-4">
                                        <b>Frontend Instructor @ ERA Solutions (Present)</b>
                                        <br />
                                        Teaching web development fundamentals including HTML, CSS, JavaScript,
                                        React, and Next.js to cohorts of 15+ students.
                                    </p>
                                    <p className="text-[#EDE8D0] text-center mb-4">
                                        <b>Civil Technologist / Systems Engineer @ City of Milton (Present)</b>
                                        <br />
                                        Leading digital transformation projects, creating systems for stormwater and 
                                        sewage management. Developing accessible web resources for public education and engagement.
                                    </p>
                                    <p className="text-[#EDE8D0] text-center mb-4">
                                        <b>Freelance Software Engineer (2022-Present)</b>
                                        <br />
                                        Collaborating with clients to develop and maintain custom web applications.
                                        Specializing in fullstack development with a focus on accessibility and responsive design.
                                    </p>
                                    <p className="text-[#EDE8D0] text-center mb-4">
                                        <b>Software Engineer @ SumUp (2024-2025)</b>
                                        <br />
                                        Designed and launched three production applications within SumUp's
                                        fintech ecosystem, enhancing merchant engagement. Owned full-stack development
                                        from concept to deployment, collaborating with cross-functional teams to deliver
                                        accessible, high-performance solutions for small business owners globally.
                                    </p>
                                    <p className="text-[#EDE8D0] text-center mb-4">
                                        <b>Law Enforcement & Correctional Operations Manager @ USAF (2012-2022)</b>
                                        <br />
                                        Oversaw mission-critical electronic security systems and supervised 75+ personnel
                                        in high-pressure environments, developing strong leadership and problem-solving skills.
                                    </p>
                                </motion.section>
                                <motion.section
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full max-w-2xl bg-white/10 rounded-2xl shadow-xl p-10 flex flex-col items-center mb-24">
                                        <h2 className="text-2xl font-bold text-[#EDE8D0] mb-6">
                                            Education
                                        </h2>
                                        <p className="text-[#EDE8D0] text-center mb-4">
                                            <b>Fullstack Engineering Certification</b>
                                            <br />
                                            Hack Reactor, 2024
                                        </p>
                                        <p className="text-[#EDE8D0] text-center mb-4">
                                            <b>Bachelor of Science in Business Administration</b>
                                            <br />
                                            Liberty University, 2019
                                        </p>
                                    </motion.section>
                </main>

    )
}