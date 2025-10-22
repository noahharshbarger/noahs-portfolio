import Link from 'next/link'

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
            href="#aboutme"
              className="nav-link px-2 py-1 text-sm font-medium text-black hover:text-black"
            >
              About Me
            </Link>
            <Link
              href="#featuredprojects"
              className="nav-link px-2 py-1 text-sm font-medium text-black hover:text-black"
            >
              Featured Projects
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
