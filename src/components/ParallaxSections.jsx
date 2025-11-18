import React, { useEffect, useRef } from 'react'

const ParallaxSections = () => {
  const aboutRef = useRef(null)
  const listingsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const about = aboutRef.current
      const listings = listingsRef.current
      const contact = contactRef.current
      if (!about || !listings || !contact) return

      // Parallax transforms
      about.style.transform = `translateY(${scrollY * 0.15}px)`
      listings.style.transform = `translateY(${scrollY * -0.08}px)`
      contact.style.transform = `translateY(${scrollY * 0.1}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#0B1F3A]">
      {/* About */}
      <section id="about" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,181,124,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(212,181,124,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div ref={aboutRef} className="transition-transform duration-300 will-change-transform">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Modern spaces for urban living</h2>
            <p className="mt-4 text-white/75 max-w-3xl">
              We specialize in premium rentals and property sales across the city. From minimalist studios to expansive family homes, our portfolio focuses on design and convenience.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Curated Listings', desc: 'Handpicked properties that match your lifestyle.' },
                { title: 'Transparent Process', desc: 'From tours to paperwork, everything streamlined.' },
                { title: 'Local Expertise', desc: 'Neighborhood insights that help you decide faster.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div ref={listingsRef} className="transition-transform duration-300 will-change-transform">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured properties</h2>
              <a href="#cta" className="hidden sm:inline-flex rounded-full bg-[#D4B57C] text-[#0B1F3A] px-5 py-2 font-semibold hover:brightness-95">See all</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop', title: 'Penthouse with skyline view', price: '$4,800/mo', tag: 'For Rent' },
                { img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop', title: 'Family home in quiet suburb', price: '$850,000', tag: 'For Sale' },
                { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', title: 'Modern loft in arts district', price: '$2,600/mo', tag: 'For Rent' },
              ].map((card) => (
                <article key={card.title} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#D4B57C] text-[#0B1F3A] px-3 py-1 text-xs font-semibold">{card.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-[#D4B57C] font-semibold">{card.price}</p>
                    <button className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">View details</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(212,181,124,0.1),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div ref={contactRef} className="transition-transform duration-300 will-change-transform">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's find your next home</h2>
                <p className="mt-4 text-white/75">Tell us what you're looking for and our team will get back to you shortly.</p>
                <div className="mt-6 space-y-3 text-white/85">
                  <p><span className="text-[#D4B57C] font-semibold">Phone:</span> +1 (555) 012-3456</p>
                  <p><span className="text-[#D4B57C] font-semibold">Email:</span> hello@urbanehousing.com</p>
                  <p><span className="text-[#D4B57C] font-semibold">Address:</span> 88 Market Street, Suite 240, Metropolis</p>
                </div>
              </div>
              <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80">Name</label>
                    <input type="text" className="mt-1 w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4B57C]" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80">Email</label>
                    <input type="email" className="mt-1 w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4B57C]" placeholder="jane@domain.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm text-white/80">Message</label>
                    <textarea rows="4" className="mt-1 w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4B57C]" placeholder="I'm interested in a 2-bedroom rental in the city center..." />
                  </div>
                </div>
                <button type="button" id="cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D4B57C] px-5 py-3 font-semibold text-[#0B1F3A] hover:brightness-95">Send inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ParallaxSections
