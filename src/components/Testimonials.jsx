import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const reviews = [
    {
        project: "Corrigir integração da API em PWA JavaScript",
        rating: 5,
        comment: "Trabalhar com Ramon foi excepcional. Superou as expectativas referente a tempo e qualidade dos serviços. Parabéns!",
        date: "Mar 2026",
        client: "Cliente 99Freelas"
    },
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
        project: "Criação de Landing Page do Zero para venda de produto",
        rating: 5,
        comment: "Excelente profissional! Demanda atrasou um pouco por culpa minha, mas ele é muito bom. Recomento ",
        date: "Dez 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Desenvolvedor Power BI para dashboards de eficiência",
        rating: 5,
        comment: "Excelente o serviço executado.",
        date: "Set 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Adicionar campos no PowerApps",
        rating: 5,
        comment: "Ágil, técnico e direto, resolveu meu problema de forma rápida, recomendo.",
        date: "Set 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Edição de planilha do Excel/Google Sheets",
        rating: 5,
        comment: "O Ramon fez o meu projeto exatamente como eu precisava. Muito profissional. Entrega super rapida e com um otimo atendimento.",
        date: "Set 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Documentação de fórmulas e cálculos de planilhas",
        rating: 5,
        comment: "O profissional realizou o trabalho de forma muito rápida e eficiente, demonstrando competência, atenção aos detalhes e profissionalismo.",
        date: "Set 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Suporte na elaboração de dashboard em Power BI",
        rating: 5,
        comment: "Excelente experiência trabalhar com o Ramon! A comunicação foi sempre clara e rápida, demonstrou muito profissionalismo e domínio técnico em Power BI. O projeto foi entregue com qualidade acima do esperado, trazendo soluções práticas e criativas para as demandas. Com certeza voltaria a trabalhar com ele e recomendo fortemente para qualquer projeto na área.",
        date: "Ago 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Inserir fórmulas em planilha pronta",
        rating: 5,
        comment: "Trabalho feito com qualidade, ele conseguiu me atender no prazo bem apertado que eu tinha, muito dedicado, quando tiver mais demanda irei trabalhar com ele novamente com certeza.",
        date: "Ago 2025",
        client: "Cliente 99Freelas"
    },
    {
        project: "Integração do Conta Azul com Power BI",
        rating: 5,
        comment: "Muito atencioso e rapido na entrega !! Com certeza indico para outros usuários do site ! Obrigado Ramon pela presteza",
        date: "Ago 2025",
        client: "Cliente 99Freelas"
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    // Mouse wheel horizontal scroll logic (synced with Projects section)
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
        <section className="py-20 lg:py-28 relative overflow-hidden" id="testimonials">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 lg:mb-20">
                    <div className="flex flex-col items-start text-left gap-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-primary italic uppercase tracking-widest">Feedback Real</h2>
                            <div className="h-px w-12 bg-primary/30"></div>
                        </div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            O que dizem os <br />
                            <span className="gradient-text">Clientes no 99Freelas</span>
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
                    className="flex gap-6 md:gap-10 overflow-x-auto pb-24 pt-10 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
                    style={{ alignItems: 'stretch' }}
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-white/5 hover:border-primary/40 transition-all duration-700 flex-shrink-0 w-[85%] md:w-[60%] lg:w-[35%] snap-center relative flex flex-col hover:scale-[1.02] group"
                            style={{ height: '420px' }}
                        >
                            <Quote className="absolute top-8 right-10 size-12 text-primary/5 group-hover:text-primary/10 transition-colors" />

                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="size-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-medium italic relative z-10 flex-1 mb-10 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                "{review.comment.trim()}"
                            </p>

                            <div className="pt-8 border-t border-white/5 mt-auto">
                                <h4 className="text-white font-bold text-base tracking-wide mb-3">
                                    {review.project}
                                </h4>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                                        {review.client}
                                    </span>
                                    <span className="text-[10px] text-slate-700 font-black">•</span>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        {review.date}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <a
                        href="https://www.99freelas.com.br/user/ramonsousa-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary group flex items-center gap-3 px-10 h-16 text-xs tracking-widest font-black"
                    >
                        VER PERFIL COMPLETO NO 99FREELAS
                        <ExternalLink className="size-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
