import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxSections from './components/ParallaxSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1F3A]">
      <Navbar />
      <Hero />
      <ParallaxSections />
      <Footer />
    </div>
  )
}

export default App
