import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="relative py-32 flex flex-col justify-center overflow-hidden bg-black" id="cta">
            {/* Background Grid Overlay - consistent with hero */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-5 pointer-events-none"></div>
            
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black opacity-90 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-20 w-full flex flex-col gap-12 text-center">

                {/* Text Content */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-white tracking-tighter uppercase mb-6">
                        {t.cta.title} <br />
                        <span className="hero-highlight">{t.cta.titleAccent}</span>
                    </h2>
                </div>

                {/* Action */}
                <div className="flex justify-center">
                    <a
                        href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.cta.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-full sm:w-auto h-20 px-12 group inline-flex items-center justify-center gap-4 rounded-none uppercase tracking-[0.2em] text-[12px] font-black transition-all bg-primary hover:bg-white hover:text-black shadow-2xl shadow-primary/20"
                    >
                        {t.cta.button}
                        <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>
        </section>
    );
};

export default CTA;
