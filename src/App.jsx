import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { LanguageProvider } from './context/LanguageContext'

// Lazy load sections for better performance
const Expertise = lazy(() => import('./components/Expertise'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const FAQ = lazy(() => import('./components/FAQ'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen selection:bg-primary/30 selection:text-black">
        {/* Dynamic Background */}
        <div className="fixed inset-0 bg-black -z-50" />
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-40" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-40" />}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-40" />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<div className="h-40" />}>
            <Expertise />
          </Suspense>
          <Suspense fallback={<div className="h-40" />}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<div className="h-40" />}>
            <CTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  )
}

export default App
