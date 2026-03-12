import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Quote, ExternalLink } from 'lucide-react';

const reviews = [
    {
        project: "Design de landing page SaaS de engenharia",
        rating: 5,
        comment: "O Ramon é um profissional rápido na entrega e realizou todas as alterações e ajustes solicitados, mostrando-se bastante disposto e paciente! Obrigado pelo trabalho!",
        date: "Fev 2026",
        client: "Cliente 99Freelas"
    },
    {
        project: "Calculadora web para precificação de arquitetura",
        rating: 5,
        comment: "Ramon é um ótimo profissional, foi um prazer trabalhar com ele! Sempre muito educado e compreensível com minha falta de experiência. Recomendo bastante.",
        date: "Dez 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Criação de Landing Page do Zero para venda",
        rating: 5,
        comment: "Excelente profissional! Demanda atrasou um pouco por culpa minha, mas ele é muito bom. Recomendo!",
        date: "Dez 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Reformular landing page de pós-graduação",
        rating: 5,
        comment: "Trabalho impecável na reformulação da página. Profissional atencioso e técnico.",
        date: "Jan 2026",
        client: "Cliente 99Freelas"
    },
    {
        project: "Script RPA/automação web e Excel",
        rating: 5,
        comment: "Automação entregue com perfeição, superando as expectativas iniciais do projeto.",
        date: "Dez 2025",
        client: "Cliente 99Freelas"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" id="testimonials">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-20">
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Star className="size-3 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Social Proof</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                        O que dizem os <span className="gradient-text">Clientes</span>
                    </h2>
                    <p className="text-slate-500 text-sm max-w-xl font-medium">
                        Avaliações reais extraídas diretamente do <span className="text-white">99Freelas</span>,
                        refletindo o compromisso com a excelência técnica e entrega.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col gap-6 group relative h-full"
                        >
                            <Quote className="absolute top-6 right-8 size-10 text-primary/5 group-hover:text-primary/10 transition-colors" />

                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="size-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed font-medium italic relative z-10">
                                "{review.comment}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">
                                        {review.project}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                            {review.client}
                                        </span>
                                        <span className="text-[10px] text-slate-700">•</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                            {review.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <a
                        href="https://www.99freelas.com.br/user/ramonsousa-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary group flex items-center gap-3 px-8 h-14"
                    >
                        VER PERFIL NO 99FREELAS
                        <ExternalLink className="size-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
