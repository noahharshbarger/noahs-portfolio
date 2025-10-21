import Link from "next/link";

export default function HeroDemoNav() {
  return (
    <nav className="w-full flex justify-center gap-6 mt-8">
      <Link href="/hero-demo" className="px-4 py-2 rounded bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">Hero Animation Demo</Link>
      <Link href="/hero-demo-howto" className="px-4 py-2 rounded bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">How-To Guide</Link>
    </nav>
  );
}
