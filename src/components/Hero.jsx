import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative min-h-[85vh] flex items-center pt-24 lg:pt-32 pb-8 lg:pb-0">
            <ParticlesBackground />
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-primary/8 blur-3xl rounded-full"></div>

            <div className="mx-auto max-w-7xl px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-5 relative z-10"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{t.hero.badge}</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                                {t.hero.title1} <span className="gradient-text">{t.hero.title2}</span> {t.hero.title3}
                            </h1>
                            <p className="text-base lg:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                                {t.hero.subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#projects" className="button-primary w-full sm:w-auto h-16 sm:h-14 px-10 group shadow-[0_0_40px_rgba(242,185,13,0.2)] inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[11px] font-black border-none ring-1 ring-primary/20 hover:ring-primary/50 transition-all">
                                {t.hero.ctaPrimary}
                                <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a
                                href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.hero.waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-secondary w-full sm:w-auto h-16 sm:h-14 px-10 group inline-flex items-center justify-center gap-3 rounded-none uppercase tracking-[0.2em] text-[11px] font-black border-2 border-white/10 hover:border-primary/50 hover:text-primary transition-all bg-transparent backdrop-blur-sm"
                            >
                                {t.hero.ctaSecondary}
                                <ChevronRight className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative group perspective-1000"
                    >
                        {/* Fancy Image Frame */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/50 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>

                        <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-3xl border border-white/10 bg-surface-dark/40 p-2 backdrop-blur-sm">
                            <div className="absolute top-4 left-4 z-20 flex gap-1.5 antialiased">
                                <div className="size-2 rounded-full bg-red-500/50"></div>
                                <div className="size-2 rounded-full bg-amber-500/50"></div>
                                <div className="size-2 rounded-full bg-green-500/50"></div>
                            </div>

                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
                                {/* Scanline Effect */}
                                <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                                    <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
                                </div>

                                {/* Floating UI Elements */}
                                <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                                    <span className="text-[10px] bg-primary text-black px-2 py-0.5 font-bold uppercase tracking-tighter rounded">Live_Feed_04</span>
                                    <span className="text-[8px] text-white/50 font-mono tracking-widest">34.9812 - 90.1123</span>
                                </div>

                                <img
                                    alt="Ramon Sousa - Software Architect"
                                    className="w-full h-full object-cover object-[center_15%] transition-all duration-700 hover:scale-105"
                                    src="/profile.png"
                                />
                            </div>
                        </div>

                        {/* Decoration Elements */}
                        <div className="absolute -top-6 -right-6 size-24 border-t-2 border-r-2 border-primary/30 pointer-events-none hidden lg:block"></div>
                        <div className="absolute -bottom-6 -left-6 size-24 border-b-2 border-l-2 border-primary/30 pointer-events-none hidden lg:block"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
