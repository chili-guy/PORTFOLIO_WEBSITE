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
        <section className="relative z-10 py-6 lg:py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="group relative p-6 lg:p-8 glass-card border-white/5 lg:hover:border-primary/30 transition-all duration-500 h-full flex flex-col justify-between"
                        >
                            <div className="relative z-10">
                                <motion.span 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-3 block"
                                >
                                    {stat.label}
                                </motion.span>
    
                                <div className="flex items-baseline gap-1 mb-3">
                                    <motion.span 
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 100,
                                            delay: 0.3 + index * 0.1 
                                        }}
                                        className="text-4xl lg:text-6xl font-black text-white tracking-tighter"
                                    >
                                        {stat.value}
                                    </motion.span>
                                    <span className="text-2xl font-bold text-primary">
                                        {stat.suffix}
                                    </span>
                                </div>
    
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-slate-400 text-xs lg:text-sm font-medium leading-relaxed"
                                >
                                    {stat.desc}
                                </motion.p>
                            </div>

                            <div className="mt-6 w-full h-[1px] bg-white/5 relative overflow-hidden">
                                <motion.div 
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "0%" }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                                />
                            </div>

                            {/* Hover Ping */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="size-1.5 bg-primary rounded-full animate-ping shadow-[0_0_10px_rgba(0,102,255,0.8)]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
