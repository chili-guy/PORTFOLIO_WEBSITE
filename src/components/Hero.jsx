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
        <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden" id="hero">
            <SplineBackground />

            {/* Background Grid Overlay - Very subtle */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-5 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 w-full h-full flex flex-col pt-24 md:pt-36 pb-12 md:pb-24 relative z-10">

                {/* Top Group: Title & Badge */}
                <div className="flex flex-col items-start text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 md:mb-4"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-none h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-green-400">
                                {t.hero.badge}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl lg:max-w-4xl"
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[1.1] md:leading-[0.95] text-white tracking-tight md:tracking-tighter">
                            {t.hero.title1} <br />
                            <span className="hero-highlight">{t.hero.title2}</span> <br />
                            {t.hero.title3}
                        </h1>
                    </motion.div>
                </div>

                {/* Bottom Group: Action Block */}
                <div className="flex flex-col items-start md:items-end w-full mt-10 md:mt-16 md:self-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto" 
                    >
                        <div className="max-w-xl">
                            <div className="p-6 md:p-10 bg-black/30 backdrop-blur-2xl border-l md:border-l-0 md:border-r-2 border-primary/50 text-left md:text-right">
                                <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
                                    {t.hero.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
                            <a href="#projects" className="button-primary w-full sm:w-auto h-14 md:h-16 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-black transition-all bg-primary hover:bg-white hover:text-black">
                                {t.hero.ctaPrimary}
                                <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a
                                href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.hero.waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-secondary w-full sm:w-auto h-14 md:h-16 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-black border border-white/20 hover:border-primary hover:text-primary transition-all bg-black/40 backdrop-blur-md"
                            >
                                {t.hero.ctaSecondary}
                                <ChevronRight className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>
        </section>
    );
};

export default React.memo(Hero);
