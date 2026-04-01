import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Lock, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' }
    })
};

const ProjectCard = React.memo(({ project, index, t }) => (
    <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={`border border-white/5 bg-black/60 group/card flex-shrink-0 w-[85%] sm:w-[55%] lg:w-[32%] snap-center relative z-0 flex flex-col ${project.status === 'live' ? 'cursor-pointer' : ''}`}
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        onClick={() => project.status === 'live' && window.open(project.link, '_blank')}
    >
        <div className="relative overflow-hidden aspect-[16/9] flex-shrink-0">
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover object-top block ${project.status === 'coming_soon' ? 'opacity-30 grayscale blur-[2px]' : ''}`}
            />
            {project.status === 'live' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-30 bg-black/40">
                    <div className="px-5 py-2.5 bg-primary text-black font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                        {t.projects.viewOnline} <ArrowUpRight className="size-3.5" />
                    </div>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            {project.status === 'coming_soon' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-3">
                        <Lock className="size-4 text-slate-500" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{t.projects.comingSoon}</span>
                </div>
            )}
        </div>
        <div className="p-6 lg:p-8 flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{project.category}</span>
                        {project.status === 'live' && (
                            <div className="flex items-center gap-1.5">
                                <div className="size-1.5 rounded-full bg-green-500" />
                                <span className="text-[9px] font-bold text-green-500/80 uppercase tracking-widest">{t.projects.active}</span>
                            </div>
                        )}
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1">
                    {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="size-1.5 bg-primary/40 flex-shrink-0" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-8">
                <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider border border-white/[0.03]">{tag}</span>
                    ))}
                </div>
                {project.status === 'live' && <Globe className="size-5 text-white/30" />}
            </div>
        </div>
    </motion.div>
));
ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
    const scrollRef = useRef(null);
    const { language } = useLanguage();
    const t = translations[language];

    const projectsList = [
        { title: t.projects.data[0].title, category: t.projects.data[0].category, desc: t.projects.data[0].desc, tags: ['Node.js', 'WhatsApp', 'IA', 'FinTech'], link: 'https://www.nicoassessor.com/', image: '/projects/nico_assessor.png', features: t.projects.data[0].features, status: 'live' },
        { title: t.projects.data[1].title, category: t.projects.data[1].category, desc: t.projects.data[1].desc, tags: ['React', 'Next.js', 'Tailwind', 'Metodologia Própria'], link: 'https://calcarq.vercel.app/', image: '/projects/calcularq_v3.png', features: t.projects.data[1].features, status: 'live' },
        { title: t.projects.data[2].title, category: t.projects.data[2].category, desc: t.projects.data[2].desc, tags: ['SaaS', 'Automação', 'Engenharia', 'Telecom'], link: 'https://zeo.app.br/', image: '/projects/zeo_v3.png', features: t.projects.data[2].features, status: 'live' },
        { title: t.projects.data[3].title, category: t.projects.data[3].category, desc: t.projects.data[3].desc, tags: ['React', 'Tailwind', 'Vercel', 'UX Design'], link: 'https://tekoa-react-98s5.vercel.app/', image: '/projects/tekoa_v2.png', features: t.projects.data[3].features, status: 'live' },
    ];

    const onWheel = useCallback((e) => {
        const el = scrollRef.current;
        if (!el || e.deltaY === 0) return;
        const isDown = e.deltaY > 0;
        const canRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
        const canLeft = el.scrollLeft > 10;
        if ((isDown && canRight) || (!isDown && canLeft)) {
            e.preventDefault();
            el.scrollLeft += e.deltaY * 2.5;
        }
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || window.innerWidth < 1024) return;
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [onWheel]);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -el.clientWidth / 1.5 : el.clientWidth / 1.5, behavior: 'smooth' });
    };

    return (
        <section className="py-6 lg:py-10 relative" id="projects">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6 lg:mb-10">
                    <div className="flex flex-col items-start text-left gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-primary">{t.projects.badge}</h2>
                            <div className="h-px w-12 bg-primary/30" />
                        </div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            {t.projects.title} <br />
                            <span className="gradient-text">{t.projects.titleAccent}</span>
                        </h3>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <button onClick={() => scroll('left')} className="size-12 border border-white/5 bg-black/40 flex items-center justify-center text-white active:scale-90 transition-transform">
                            <ChevronLeft className="size-5" />
                        </button>
                        <button onClick={() => scroll('right')} className="size-12 border border-white/5 bg-black/40 flex items-center justify-center text-white active:scale-90 transition-transform">
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-8 overflow-x-auto pb-10 pt-4 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar"
                    style={{
                        overscrollBehaviorX: 'contain',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {projectsList.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} t={t} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative mt-4 border border-white/5 bg-black/60 overflow-hidden"
                >
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-6 sm:px-8 sm:py-7">
                        <div className="flex flex-col gap-1 text-center sm:text-left w-full sm:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t.projects.inlineCta.badge}</span>
                            <p className="text-white font-bold text-base leading-snug">
                                {t.projects.inlineCta.title}{' '}
                                <span className="text-slate-400 font-normal">{t.projects.inlineCta.subtitle}</span>
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.projects.inlineCta.waMsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-primary h-12 px-6 text-xs tracking-widest font-black flex items-center justify-center gap-2 group w-full sm:w-auto rounded-none"
                        >
                            <svg viewBox="0 0 24 24" className="size-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            {t.projects.inlineCta.waBtn}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(Projects);
