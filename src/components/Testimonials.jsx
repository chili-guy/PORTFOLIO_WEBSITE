import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

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
        <section className="py-8 lg:py-14 relative overflow-hidden" id="testimonials">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 lg:mb-10">
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
                    className="flex gap-6 md:gap-10 overflow-x-auto pb-10 pt-4 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
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

                <div className="mt-8 flex flex-col items-center gap-10">
                    {/* 99freelas link */}
                    <a
                        href="https://www.99freelas.com.br/user/ramonsousa-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary group flex items-center gap-3 px-10 h-16 text-xs tracking-widest font-black"
                    >
                        VER PERFIL COMPLETO NO 99FREELAS
                        <ExternalLink className="size-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>

                    {/* Inline CTA — Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-2xl"
                    >
                        {/* Glow aura */}
                        <div className="absolute inset-0 bg-primary/8 blur-[60px] rounded-3xl pointer-events-none" />

                        <div className="relative glass-card rounded-2xl border border-white/5 overflow-hidden">
                            {/* Top accent line */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                            <div className="px-10 py-10 flex flex-col items-center text-center gap-5">
                                {/* Stars cluster */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-5 fill-primary text-primary" />
                                    ))}
                                    <span className="ml-3 text-xs font-black text-primary tracking-widest uppercase">5.0</span>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-white font-bold text-xl sm:text-2xl leading-tight">
                                        Junte-se a mais de{' '}
                                        <span className="gradient-text">11 clientes satisfeitos</span>
                                    </h4>
                                    <p className="text-slate-500 text-sm font-medium">
                                        Pronto para ser o próximo caso de sucesso?
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/5591991266136?text=Olá Ramon, vi suas avaliações e quero iniciar um projeto!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-primary h-13 px-10 text-xs tracking-[0.2em] font-black shadow-[0_0_30px_rgba(242,185,13,0.2)] hover:shadow-[0_0_50px_rgba(242,185,13,0.35)] flex items-center gap-3 group mt-1"
                                >
                                    <svg viewBox="0 0 24 24" className="size-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    INICIAR PROJETO AGORA
                                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
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
