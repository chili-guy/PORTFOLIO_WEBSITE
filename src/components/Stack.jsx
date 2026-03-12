import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers, Database, Shield, Zap } from 'lucide-react';

const Stack = () => {
    const techGroups = [
        {
            title: 'Frontend Architecture',
            items: [
                { name: 'React', icon: 'react' },
                { name: 'Next.js', icon: 'nextdotjs' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Three.js', icon: 'threedotjs' },
                { name: 'Framer Motion', icon: 'framer' }
            ]
        },
        {
            title: 'Backend & Systems',
            items: [
                { name: 'Node.js', icon: 'nodedotjs' },
                { name: 'FastAPI', icon: 'fastapi' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'GraphQL', icon: 'graphql' },
                { name: 'Redis', icon: 'redis' },
                { name: 'Prisma', icon: 'prisma' },
                { name: 'Supabase', icon: 'supabase' }
            ]
        },
        {
            title: 'Ops & Infrastructure',
            items: [
                { name: 'Docker', icon: 'docker' },
                { name: 'Kubernetes', icon: 'kubernetes' },
                { name: 'Terraform', icon: 'terraform' },
                { name: 'Vercel', icon: 'vercel' },
                { name: 'GitHub Actions', icon: 'githubactions' }
            ]
        }
    ];

    return (
        <section className="py-12 lg:py-32 relative bg-background-dark overflow-hidden" id="stack">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(242,185,13,0.03)_0%,transparent_50%)]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col items-center text-center gap-6 mb-12 lg:mb-24">
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                        <Cpu className="size-3 text-primary animate-pulse" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Core Technical Stack</span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                        Ecosistema <span className="gradient-text">Técnico</span>
                    </h3>
                    <p className="text-slate-500 text-sm lg:text-base max-w-xl font-medium">
                        Um arsenal selecionado para entregar performance crítica e escalabilidade absoluta,
                        eliminando a complexidade do desenvolvimento.
                    </p>
                </div>

                <div className="space-y-12 lg:space-y-24">
                    {techGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-10">
                            <div className="flex items-center gap-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em] whitespace-nowrap">
                                    {group.title}
                                </h4>
                                <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/5 to-transparent"></div>
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
                                {group.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 + groupIdx * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative px-6 py-4 bg-surface-dark border border-white/5 hover:border-primary/40 transition-all duration-300 flex items-center gap-4">
                                            <img
                                                src={`https://cdn.simpleicons.org/${item.icon}/white`}
                                                alt={item.name}
                                                className="size-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <span className="text-xs lg:text-sm font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest font-display">
                                                {item.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
