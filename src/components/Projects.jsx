import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Lock, Globe } from 'lucide-react';

const projects = [
    {
        title: 'Calcularq',
        category: 'SaaS / ArchTech',
        desc: 'Plataforma estratégica de precificação para arquitetos. Elimina a subjetividade do cálculo por m² através de uma metodologia baseada em complexidade técnica e esforço dedicado.',
        tags: ['React', 'Next.js', 'Tailwind', 'Metodologia Própria'],
        link: 'https://calcarq.vercel.app/',
        image: '/projects/calcularq_v3.png',
        features: ['Cálculo por Complexidade', 'Gestão de Faturamento', 'Análise de Etapas', 'Propostas Rápidas'],
        status: 'live'
    },
    {
        title: 'Zeo App',
        category: 'SaaS / Telecom Engineering',
        desc: 'Plataforma inovadora que automatiza análises estruturais de infraestrutura de telecomunicações, reduzindo prazos de dias para minutos.',
        tags: ['SaaS', 'Automação', 'Engenharia', 'Telecom'],
        link: 'https://zeo.app.br/',
        image: '/projects/zeo_v3.png',
        features: ['Automação de Laudos', 'Gestão de Planta', 'Redução de Custos', 'Eficiência em Tempo Real'],
        status: 'live'
    },
    {
        title: 'Tekóa',
        category: 'HealthTech / Social Support',
        desc: 'Ecossistema de apoio psicológico e social focado no bem-estar emocional e integração de comunidades em transição.',
        tags: ['React', 'Tailwind', 'Vercel', 'UX Design'],
        link: 'https://tekoa-react-98s5.vercel.app/',
        image: '/projects/tekoa_v2.png',
        features: ['Suporte Personalizado', 'Inscrição Segura', 'Foco Multicultural', 'Integração Ágil'],
        status: 'live'
    }
];

const Projects = () => {
    const scrollRef = useRef(null);

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
        <section className="py-12 lg:py-28 relative overflow-hidden" id="projects">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-10 lg:mb-20">
                    <div className="flex flex-col items-start text-left gap-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-primary">Trabalhos em Destaque</h2>
                            <div className="h-px w-12 bg-primary/30"></div>
                        </div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            Projetos que <br />
                            <span className="gradient-text">Impulsionam Negócios</span>
                        </h3>
                    </div>

                    <div className="flex gap-2 mb-2">
                        <button
                            onClick={() => scroll('left')}
                            className="size-12 rounded-full border border-white/5 bg-surface-dark/40 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90"
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="size-12 rounded-full border border-white/5 bg-surface-dark/40 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-14 overflow-x-auto pb-24 pt-10 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing group/projects items-stretch"
                >
                    {projects.map((project, index) => (
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
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover object-top block transition-transform duration-700 ${project.status === 'coming_soon' ? 'opacity-30 grayscale blur-[2px]' : ''}`}
                                />

                                {project.status === 'live' && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 bg-black/20 backdrop-blur-[2px]">
                                        <div className="px-6 py-3 bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Ver Projeto Online
                                            <ArrowUpRight className="size-4" />
                                        </div>
                                    </div>
                                )}

                                {project.status === 'coming_soon' && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                        <div className="size-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 mb-3">
                                            <Lock className="size-5 text-slate-500" />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                                            Em Desenvolvimento
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 lg:p-10 flex-1 flex flex-col">
                                <div className="space-y-6 flex-1">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                            {project.status === 'live' && (
                                                <div className="flex items-center gap-1.5 overflow-hidden">
                                                    <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-[9px] font-bold text-green-500/80 uppercase">Active</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 min-h-[44px] lg:min-h-[48px]">
                                            {project.desc}
                                        </p>
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
                                            <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[9px] font-mono font-bold text-slate-500">
                                                {tag}
                                            </span>
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
            </div >

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section >
    );
};

export default Projects;
