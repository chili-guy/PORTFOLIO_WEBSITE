import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import About from './components/About'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen selection:bg-primary/30 selection:text-black">
        {/* Dynamic Background */}
        <div className="fixed inset-0 bg-black -z-50" />
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Testimonials />
          <Expertise />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
