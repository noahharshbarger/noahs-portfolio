import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 bg-white shadow-sm border-b border-[#f6c453] mb-8 sticky top-0 z-50">
      <div className="flex gap-8">
        <Link
          href="#aboutme"
          className="text-base font-semibold text-[#1a2238] hover:text-[#218380] transition-colors"
        >
          About Me
        </Link>
        <Link
          href="#featuredprojects"
          className="text-base font-semibold text-[#1a2238] hover:text-[#218380] transition-colors"
        >
          Featured Projects
        </Link>
        <Link
          href="#experience"
          className="text-base font-semibold text-[#1a2238] hover:text-[#218380] transition-colors"
        >
          Experience
        </Link>
      </div>
    </nav>
  )
}
