import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Stack from './components/Stack'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-black">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-background-dark -z-50" />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Testimonials />

        <Expertise />
        <Stack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
