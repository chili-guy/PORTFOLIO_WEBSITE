import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Binary } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 lg:pb-0 overflow-hidden">
            <ParticlesBackground />
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>

            <div className="mx-auto max-w-7xl px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 relative z-10"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">DISPONÍVEL PARA PROJETOS</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                                Sistemas <span className="gradient-text">Full Stack</span> de Ponta a Ponta
                            </h1>
                            <p className="text-base lg:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                                Do front-end ao back-end: construo sites, sistemas e automações completas que
                                <span className="text-white"> resolvem o seu problema por inteiro</span>, sem deixar pontas soltas.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#projects" className="button-primary h-14 px-10 group shadow-[0_0_30px_rgba(242,185,13,0.15)] inline-flex items-center justify-center gap-2">
                                EXPLORAR PROJETOS
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#stack" className="button-secondary h-14 px-10 group inline-flex items-center justify-center gap-2">
                                STACK TÉCNICA
                                <ChevronRight className="size-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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
