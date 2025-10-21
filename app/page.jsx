"use client"


export default function Home() {

    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 tracking-tight mb-6">Hi, I'm Noah</h1>
                <p className="text-xl text-gray-700 mb-8 text-center font-medium">Fullstack Engineer passionate about building human-centric digital experiences and scalable platforms.</p>
                <nav className="flex flex-wrap gap-4 justify-center mb-8">
                    <a href="https://github.com/noahharshbarger" target="_blank" rel="noopener" className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-bold shadow hover:bg-indigo-700 transition-all duration-200">View Projects</a>
                    <a href="https://medium.com/@noahharshb" target="_blank" rel="noopener" className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-bold shadow hover:bg-indigo-700 transition-all duration-200">Read Blog</a>
                    <a href="https://www.linkedin.com/in/noahharshbarger" target="_blank" rel="noopener" className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-bold shadow hover:bg-indigo-700 transition-all duration-200">LinkedIn</a>
                </nav>
                <section className="w-full mt-4">
                    <div className="bg-indigo-50 rounded-xl p-6 shadow flex flex-col items-center">
                        <h2 id="aboutme" className="text-2xl font-bold text-indigo-800 mb-2">About Me</h2>
                        <p className="text-lg text-gray-600 text-center max-w-lg">I'm a Fullstack Engineer with 5+ years of experience designing user-friendly platforms and integrating backend systems with third-party services. Skilled in server-side logic, REST APIs, database design, and full software development stack. Experienced in Node.js, Python, Go, MySQL/PostgreSQL, cloud deployment (AWS), and ERP/data integration solutions.</p>
                    </div>
                </section>
                <section className="w-full mt-8">
                    <div className="rounded-xl p-6 shadow flex flex-col items-center bg-white">
                        <h2 id="featuredprojects" className="text-xl font-bold text-indigo-800 mb-4">Featured Projects</h2>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <div className="bg-indigo-100 rounded-lg p-4 shadow w-64 flex flex-col items-start">
                                <h3 className="font-bold text-indigo-700 mb-2">Solar Panel Tracker</h3>
                                <p className="text-gray-700 mb-2">A solar panel part tracking and management tool for United Construction and Restoration.</p>
                                <a href="https://github.com/noahharshbarger/Solar" target="_blank" rel="noopener" className="text-indigo-600 font-semibold hover:underline">View on GitHub</a>
                            </div>
                            <div className="bg-indigo-100 rounded-lg p-4 shadow w-64 flex flex-col items-start">
                                <h3 className="font-bold text-indigo-700 mb-2">e-Commerce Tool</h3>
                                <p className="text-gray-700 mb-2">Custom e-commerce platform with product management and authentication functionality.</p>
                                <a href="https://nextjs-boilerplate-geopnnpys-solar-project.vercel.app/" className="text-indigo-600 font-semibold hover:underline">Go to Site</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full mt-8">
                    <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                        <h2 className="text-xl font-bold text-indigo-800 mb-4">Latest Blog Posts</h2>
                        <ul className="list-none p-0 w-full">
                            <li className="mb-6 border-b border-indigo-100 pb-4">
                                <div className="text-sm text-gray-400 mb-1">April 9, 2024</div>
                                <a href="/blog/vim" className="text-lg text-indigo-500 font-semibold hover:underline">Embracing Vim: The Unsung Hero of Code Editors</a>
                            </li>
                            <li className="mb-6 border-b border-indigo-100 pb-4">
                                <div className="text-sm text-gray-400 mb-1">April 8, 2024</div>
                                <a href="/blog/spaces-vs-tabs" className="text-lg text-indigo-500 font-semibold hover:underline">Spaces vs. Tabs: The Indentation Debate Continues</a>
                            </li>
                            <li>
                                <div className="text-sm text-gray-400 mb-1">April 7, 2024</div>
                                <a href="/blog/static-typing" className="text-lg text-indigo-500 font-semibold hover:underline">The Power of Static Typing in Programming</a>
                            </li>
                        </ul>
                        <a href="/blog" className="text-indigo-600 font-bold hover:underline text-base mt-4 inline-block">See all posts →</a>
                    </div>
                </section>
                <footer className="w-full text-center text-gray-400 mt-10 text-base">
                    <div className="mb-2">
                        <a href="https://github.com/noahharshbarger/noahs-portfolio" target="_blank" rel="noopener" className="mx-2 text-indigo-500 font-bold hover:underline">github</a>
                        <a href="https://github.com/noahharshbarger/noahs-portfolio/blob/main/LICENSE" target="_blank" rel="noopener" className="mx-2 text-indigo-500 font-bold hover:underline">view source</a>
                    </div>
                    <div className="mt-4">
                        <a href="/hero-demo" className="mx-2 text-indigo-600 font-bold hover:underline">Hero Animation Demo</a>
                        <a href="/hero-demo-howto" className="mx-2 text-indigo-600 font-bold hover:underline">How-To Guide</a>
                    </div>
                    <p>© 2025 MIT Licensed</p>
                </footer>
            </div>
        </main>
    );
}