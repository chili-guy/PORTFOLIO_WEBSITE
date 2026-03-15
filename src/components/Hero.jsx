import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SplineBackground from './SplineBackground';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative h-screen min-h-[700px] flex flex-col justify-between pt-32 pb-20 overflow-hidden">
            <SplineBackground />

            {/* Background Grid Overlay - Very subtle */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-5 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 w-full h-full flex flex-col justify-between relative z-10">

                {/* Top Section: Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-green-500/10 border border-green-500/20 w-fit mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-none h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 animate-blink">
                            {t.hero.badge}
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-white tracking-tighter">
                        {t.hero.title1} <br />
                        <span className="hero-highlight">{t.hero.title2}</span> <br />
                        {t.hero.title3}
                    </h1>
                </motion.div>

                {/* Bottom Section: Description & Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col lg:flex-row items-end justify-between gap-10"
                >
                    <div className="max-w-2xl text-left">
                        <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium">
                            {t.hero.subtitle}
                        </p>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                        <a href="#projects" className="button-primary w-full sm:w-auto h-16 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[11px] font-black transition-all bg-primary hover:bg-white hover:text-black">
                            {t.hero.ctaPrimary}
                            <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                        </a>
                        <a
                            href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.hero.waMsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-secondary w-full sm:w-auto h-16 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[11px] font-black border-2 border-white/20 hover:border-primary hover:text-primary transition-all bg-black/40 backdrop-blur-md"
                        >
                            {t.hero.ctaSecondary}
                            <ChevronRight className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>
        </section>
    );
};

export default Hero;
