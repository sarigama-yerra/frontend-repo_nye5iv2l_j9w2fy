import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 via-[#0B1F3A]/60 to-[#0B1F3A]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/40 via-transparent to-[#0B1F3A]/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
              Luxury Rentals • Prime Sales • Modern Living
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Urbane Housing
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Your trusted partner for premium apartments and houses in the city. Explore curated listings with an emphasis on design, comfort, and location.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#listings" className="inline-flex items-center rounded-full bg-[#D4B57C] text-[#0B1F3A] px-5 py-3 font-semibold hover:brightness-95 transition">
                Explore Listings
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/20 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
