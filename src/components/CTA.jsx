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
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative py-48 lg:py-80 min-h-[700px] lg:min-h-[1000px] flex flex-col justify-center items-center overflow-hidden bg-black" id="cta">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                autoPlay
                loop
                muted
                playsInline
                preload={window.innerWidth < 768 ? "none" : "auto"}
            >
                <source src="/Flow_delpmaspu_.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Overlay - Rounded Vignette & Edge Blending */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,black_90%)] opacity-80"></div>
            
            {/* Edge Security Blending */}
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-10 relative z-30 flex flex-col items-center justify-center gap-12 sm:gap-20 text-center">

                {/* Text Content - Balanced for taller section */}
                <div className="w-full max-w-5xl px-4 flex justify-center -translate-y-8 lg:-translate-y-24">
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight sm:leading-[1.1] text-white tracking-tighter uppercase mb-2 sm:mb-6 text-center w-full">
                        {t.cta.title} <br className="hidden sm:block" />
                        <span className="hero-highlight">{t.cta.titleAccent}</span>
                    </h2>
                </div>

                {/* Action - Balanced for taller section */}
                <div className="flex justify-center w-full max-w-xs translate-y-8 lg:translate-y-20">
                    <a
                        href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.cta.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-full h-16 sm:h-20 px-8 group inline-flex items-center justify-center gap-4 rounded-none uppercase tracking-widest text-[10px] sm:text-xs font-black transition-all bg-primary hover:bg-white hover:text-black shadow-2xl shadow-primary/20"
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
