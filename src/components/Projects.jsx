import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Lock, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const Projects = () => {
    const scrollRef = useRef(null);
    const { language } = useLanguage();
    const t = translations[language];

    const projectsList = [
        {
            title: t.projects.data[0].title,
            category: t.projects.data[0].category,
            desc: t.projects.data[0].desc,
            tags: ['React', 'Next.js', 'Tailwind', 'Metodologia Própria'],
            link: 'https://calcarq.vercel.app/',
            image: '/projects/calcularq_v3.png',
            features: t.projects.data[0].features,
            status: 'live'
        },
        {
            title: t.projects.data[1].title,
            category: t.projects.data[1].category,
            desc: t.projects.data[1].desc,
            tags: ['SaaS', 'Automação', 'Engenharia', 'Telecom'],
            link: 'https://zeo.app.br/',
            image: '/projects/zeo_v3.png',
            features: t.projects.data[1].features,
            status: 'live'
        },
        {
            title: t.projects.data[2].title,
            category: t.projects.data[2].category,
            desc: t.projects.data[2].desc,
            tags: ['React', 'Tailwind', 'Vercel', 'UX Design'],
            link: 'https://tekoa-react-98s5.vercel.app/',
            image: '/projects/tekoa_v2.png',
            features: t.projects.data[2].features,
            status: 'live'
        }
    ];

    // Mouse wheel horizontal scroll logic
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 2,
                    behavior: 'smooth'
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-8 lg:py-14 relative" id="projects">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6 lg:mb-10">
                    <div className="flex flex-col items-start text-left gap-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-primary">{t.projects.badge}</h2>
                            <div className="h-px w-12 bg-primary/30"></div>
                        </div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            {t.projects.title} <br />
                            <span className="gradient-text">{t.projects.titleAccent}</span>
                        </h3>
                    </div>

                    <div className="flex gap-2 mb-2">
                        <button onClick={() => scroll('left')} className="size-12 rounded-full border border-white/5 bg-surface-dark/40 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90">
                            <ChevronLeft className="size-5" />
                        </button>
                        <button onClick={() => scroll('right')} className="size-12 rounded-full border border-white/5 bg-surface-dark/40 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90">
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>

                <div ref={scrollRef} className="flex gap-6 md:gap-14 overflow-x-auto pb-12 pt-6 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing group/projects items-stretch">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card border-white/5 group/card hover:border-primary/40 transition-all duration-700 overflow-hidden flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-center relative z-0 hover:z-10 hover:scale-[1.05] group-hover/projects:opacity-20 hover:!opacity-100 flex flex-col ${project.status === 'live' ? 'cursor-pointer' : ''}`}
                            onClick={() => project.status === 'live' && window.open(project.link, '_blank')}
                        >
                            <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
                                <img src={project.image} alt={project.title} className={`w-full h-full object-cover object-top block transition-transform duration-700 ${project.status === 'coming_soon' ? 'opacity-30 grayscale blur-[2px]' : ''}`} />
                                {project.status === 'live' && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 bg-black/20 backdrop-blur-[2px]">
                                        <div className="px-6 py-3 bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {t.projects.viewOnline} <ArrowUpRight className="size-4" />
                                        </div>
                                    </div>
                                )}
                                {project.status === 'coming_soon' && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                        <div className="size-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 mb-3">
                                            <Lock className="size-5 text-slate-500" />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{t.projects.comingSoon}</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-8 lg:p-10 flex-1 flex flex-col">
                                <div className="space-y-6 flex-1">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.category}</span>
                                            {project.status === 'live' && (
                                                <div className="flex items-center gap-1.5 overflow-hidden">
                                                    <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-[9px] font-bold text-green-500/80 uppercase">{t.projects.active}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 min-h-[44px] lg:min-h-[48px]">{project.desc}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 min-h-[60px]">
                                        {project.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                                                <div className="size-1 rounded-full bg-primary/40 flex-shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                    <div className="flex gap-2">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[9px] font-mono font-bold text-slate-500">{tag}</span>
                                        ))}
                                    </div>
                                    {project.status === 'live' && (
                                        <div className="text-white/40 group-hover/card:text-primary transition-colors">
                                            <Globe className="size-5" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Inline CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative mt-4 rounded-2xl border border-white/5 bg-surface-dark/60 backdrop-blur-sm overflow-hidden">
                    <div className="absolute -inset-6 bg-primary/8 blur-[80px] pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-6 sm:px-8 sm:py-7">
                        <div className="flex flex-col gap-1 text-center sm:text-left w-full sm:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">{t.projects.inlineCta.badge}</span>
                            <p className="text-white font-bold text-base leading-snug">
                                {t.projects.inlineCta.title}{' '}
                                <span className="text-slate-400 font-normal">{t.projects.inlineCta.subtitle}</span>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
                            <a href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.projects.inlineCta.waMsg)}`} target="_blank" rel="noopener noreferrer" className="button-primary h-12 px-6 text-xs tracking-widest font-black shadow-[0_0_25px_rgba(242,185,13,0.2)] hover:shadow-[0_0_35px_rgba(242,185,13,0.35)] flex items-center justify-center gap-2 group w-full sm:w-auto">
                                <svg viewBox="0 0 24 24" className="size-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                {t.projects.inlineCta.waBtn}
                            </a>
                            <a href="#contact" className="button-secondary h-12 px-6 text-xs tracking-widest font-black flex items-center justify-center gap-2 group w-full sm:w-auto">
                                {t.projects.inlineCta.moreBtn}
                                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style jsx>{` .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
        </section>
    );
};

export default Projects;
