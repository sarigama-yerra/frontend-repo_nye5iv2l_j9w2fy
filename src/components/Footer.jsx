import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Urbane Housing. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <span className="opacity-30">•</span>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
