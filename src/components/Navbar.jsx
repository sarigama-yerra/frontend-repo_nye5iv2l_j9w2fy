import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border border-white/10 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#0B1F3A] flex items-center justify-center text-[#D4B57C] font-bold">UH</div>
            <span className="text-white/90 font-semibold tracking-tight text-lg">Urbane Housing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#listings" className="hover:text-white transition-colors">Listings</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#cta" className="ml-2 inline-flex items-center rounded-full bg-[#D4B57C] text-[#0B1F3A] px-4 py-2 font-semibold hover:brightness-95 transition">Get in touch</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
