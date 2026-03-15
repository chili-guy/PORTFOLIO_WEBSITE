import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6;
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-48 flex flex-col justify-center items-center overflow-hidden bg-black" id="cta">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/Light_turning_on_off_delpmaspu_.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Overlay - more aggressive blending to avoid 'cuts' */}
            <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div className="mx-auto w-full max-w-screen-2xl px-10 relative z-30 flex flex-col items-center justify-center gap-10 text-center">

                {/* Text Content - Lifted more (approx 15% total) */}
                <div className="w-full max-w-5xl px-4 flex justify-center -translate-y-12 lg:-translate-y-20">
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight sm:leading-[1.1] text-white tracking-tighter uppercase mb-6 text-center w-full">
                        {t.cta.title} <br className="hidden sm:block" />
                        <span className="hero-highlight">{t.cta.titleAccent}</span>
                    </h2>
                </div>

                {/* Action - Lowered slightly (~5%) */}
                <div className="flex justify-center w-full max-w-xs translate-y-6 lg:translate-y-8">
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
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default React.memo(CTA);
