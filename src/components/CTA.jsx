import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-48 flex flex-col justify-center items-center overflow-hidden bg-black" id="cta">
            {/* Background Grid Overlay - consistent with hero */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-5 pointer-events-none"></div>
            
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black opacity-90 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-20 w-full flex flex-col items-center justify-center gap-10 text-center">

                {/* Text Content */}
                <div className="w-full max-w-5xl px-4 flex justify-center">
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight sm:leading-[1.1] text-white tracking-tighter uppercase mb-6 text-center w-full">
                        {t.cta.title} <br className="hidden sm:block" />
                        <span className="hero-highlight">{t.cta.titleAccent}</span>
                    </h2>
                </div>

                {/* Action */}
                <div className="flex justify-center w-full max-w-xs">
                    <a
                        href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.cta.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-full h-20 px-8 group inline-flex items-center justify-center gap-4 rounded-none uppercase tracking-widest text-xs font-black transition-all bg-primary hover:bg-white hover:text-black shadow-2xl shadow-primary/20"
                    >
                        {t.cta.button}
                        <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>
        </section>
    );
};

export default CTA;
