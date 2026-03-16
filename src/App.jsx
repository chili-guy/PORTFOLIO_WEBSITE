import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { LanguageProvider } from './context/LanguageContext'
import { LazyMotion, domMax } from 'framer-motion'

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
      <LazyMotion features={domMax}>
        <div className="relative min-h-screen selection:bg-primary/30 selection:text-black">
          {/* Dynamic Background */}
          <div className="fixed inset-0 bg-black -z-50" />
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-[500px]" />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="h-[500px]" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="h-[500px]" />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<div className="h-[500px]" />}>
              <Expertise />
            </Suspense>
            <Suspense fallback={<div className="h-[400px]" />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<div className="h-[300px]" />}>
              <CTA />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </LazyMotion>
    </LanguageProvider>
  )
}

export default App
