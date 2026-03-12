import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: 'Projetos', value: '28', suffix: '+', desc: 'Concluídos com sucesso no 99Freelas' },
        { label: 'Avaliações', value: '4.5', suffix: '★', desc: 'Média de satisfação dos clientes' },
        { label: 'Recomendações', value: '27', suffix: '', desc: 'Clientes que indicam meu trabalho' },
        { label: 'Experiência', value: '03', suffix: '+', desc: 'Anos resolvendo problemas reais' },
    ];

    return (
        <section className="relative z-10 py-10 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 glass-card rounded-2xl border-white/5 hover:border-primary/20 transition-all duration-300 h-full"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="size-1 bg-primary rounded-full animate-ping"></div>
                            </div>

                            <span className="text-primary text-[10px] font-bold mb-4 block">
                                {stat.label}
                            </span>

                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white">
                                    {stat.value}
                                </span>
                                <span className="text-2xl font-bold text-primary">
                                    {stat.suffix}
                                </span>
                            </div>

                            <p className="text-slate-500 text-xs font-medium leading-relaxed lg:max-w-[140px]">
                                {stat.desc}
                            </p>

                            <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-primary/30 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
