// Footer.jsx
// This component renders the footer of the portfolio homepage.
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-16 px-0 bg-[#1a2238] border-t-4 border-[#f6c453]">
      <div className="mb-2 text-[#f6c453] font-semibold">noahharshb@gmail.com | (720) 678-5926 | <a href="https://linkedin.com/in/noahharshbarger" target="_blank" rel="noopener" className="text-[#218380] font-bold hover:underline">LinkedIn</a> | <a href="https://github.com/noahharshbarger" target="_blank" rel="noopener" className="text-[#218380] font-bold hover:underline">GitHub</a></div>
      <div className="text-[#f5f6fa] text-base mb-2">Contact: <a href="mailto:noah@example.com" className="text-[#218380] hover:underline font-semibold">noah@example.com</a></div>
      <div className="text-[#f6c453] text-xs">&copy; {new Date().getFullYear()} Noah Harshbarger. All rights reserved.</div>
    </footer>
  );
}
