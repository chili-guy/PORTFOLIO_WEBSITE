import React, { Suspense, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';

const CTA = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const sectionRef = useRef(null);

    // Performance: Only render Spline when user is near the section
    const isInView = useInView(sectionRef, { once: false, margin: "400px" });

    return (
        <section ref={sectionRef} className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden bg-black" id="cta">
            {/* Background Spline */}
            <div className="absolute inset-0 z-0">
                {isInView && (
                    <Suspense fallback={<div className="w-full h-full bg-black" />}>
                        <Spline
                            scene="https://prod.spline.design/QQCY2RvJyeuiiQQY/scene.splinecode"
                            className="w-full h-full"
                        />
                    </Suspense>
                )}
            </div>

            {/* Cinematic Overlay - matching hero style */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black opacity-90 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-20 w-full flex flex-col gap-14 text-center lg:text-left">

                {/* Text Content - Brutalist Hero Style */}
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-white tracking-tighter uppercase">
                        {t.cta.title} <br />
                        <span className="hero-highlight">{t.cta.titleAccent}</span>
                    </h2>
                </div>

                {/* Action - Brutalist Button Style */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 mt-4 items-center lg:items-start justify-center lg:justify-start">
                    <a
                        href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.cta.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-full sm:w-auto h-16 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[11px] font-black transition-all bg-primary hover:bg-white hover:text-black"
                    >
                        {t.cta.button}
                        <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Anti-watermark mask */}
            <div className="absolute bottom-0 right-0 w-[150px] h-[50px] bg-black z-30 pointer-events-none opacity-0 lg:opacity-100" />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>
        </section>
    );
};

export default CTA;
