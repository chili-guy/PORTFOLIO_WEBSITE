import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Bolt, ShieldCheck, Code2 } from 'lucide-react';

const Expertise = () => {
    const principles = [
        {
            icon: <Layers className="size-8" />,
            title: 'Frontend & UI/UX',
            desc: 'Criação de interfaces modernas, responsivas e intuitivas focadas na melhor experiência do usuário.',
            color: 'from-blue-500/20'
        },
        {
            icon: <Bolt className="size-8" />,
            title: 'Backend & APIs',
            desc: 'Desenvolvimento de regras de negócio robustas, bancos de dados e integração completa entre sistemas.',
            color: 'from-primary/20'
        },
        {
            icon: <ShieldCheck className="size-8" />,
            title: 'Integrações & APIs',
            desc: 'Conexão entre sistemas, meios de pagamento e APIs para automatizar fluxos de dados.',
            color: 'from-green-500/20'
        },
        {
            icon: <Code2 className="size-8" />,
            title: 'Automações & Dashboards',
            desc: 'Criação de dashboards interativos e automações de processos para ganhar eficiência.',
            color: 'from-purple-500/20'
        }
    ];

    return (
        <section className="py-12 lg:py-28 relative" id="expertise">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 lg:mb-20 space-y-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-primary">Controle Total do Projeto</h2>
                        <div className="h-px flex-1 bg-border-dark"></div>
                    </div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Soluções de Engenharia <br />
                        <span className="gradient-text">Sem Compromissos</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group tech-card rounded-2xl hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-3xl -z-10`}></div>

                            <div className="size-16 rounded-2xl bg-accents/50 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all mb-8 shadow-xl">
                                {item.icon}
                            </div>

                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {item.title}
                            </h4>

                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
