import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Monitor, Server, Wrench, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const Stack = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const techGroups = [
        {
            icon: <Monitor className="size-4" />,
            title: t.stack.groups[0],
            color: 'text-primary',
            borderColor: 'border-primary/20',
            glowColor: 'bg-primary/5',
            items: [
                { name: 'React', icon: 'react' },
                { name: 'Next.js', icon: 'nextdotjs' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Framer Motion', icon: 'framer' },
                { name: 'Vite', icon: 'vite' },
            ]
        },
        {
            icon: <Server className="size-4" />,
            title: t.stack.groups[1],
            color: 'text-orange-400',
            borderColor: 'border-orange-500/20',
            glowColor: 'bg-orange-500/5',
            items: [
                { name: 'Node.js', icon: 'nodedotjs' },
                { name: 'FastAPI', icon: 'fastapi' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'Supabase', icon: 'supabase' },
                { name: 'Prisma', icon: 'prisma' },
            ]
        },
        {
            icon: <Brain className="size-4" />,
            title: t.stack.groups[2],
            color: 'text-rose-400',
            borderColor: 'border-rose-500/20',
            glowColor: 'bg-rose-500/5',
            items: [
                { name: 'n8n', icon: 'n8n' },
                { name: 'OpenAI', icon: 'openai' },
                { name: 'LangChain', icon: 'langchain' },
                { name: 'Evolution API', icon: 'whatsapp' },
                { name: 'Flowise', icon: 'flowise' },
                { name: 'Groq', icon: 'groq' },
            ]
        },
        {
            icon: <Wrench className="size-4" />,
            title: t.stack.groups[3],
            color: 'text-stone-300',
            borderColor: 'border-stone-400/20',
            glowColor: 'bg-stone-400/5',
            items: [
                { name: 'Docker', icon: 'docker' },
                { name: 'Vercel', icon: 'vercel' },
                { name: 'GitHub Actions', icon: 'githubactions' },
                { name: 'Cloudflare', icon: 'cloudflare' },
                { name: 'AWS', icon: 'amazonwebservices' },
                { name: 'Railway', icon: 'railway' },
            ]
        }
    ];

    return (
        <section className="py-8 lg:py-16 relative" id="stack">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-3 mb-8 lg:mb-12">
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                        <Cpu className="size-3 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{t.stack.badge}</span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-lg font-medium">
                        {t.stack.subtitle}
                    </p>
                </div>

                {/* Grid of category cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {techGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.08 }}
                            className={`relative rounded-2xl border ${group.borderColor} bg-surface-dark overflow-hidden`}
                        >
                            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${group.color} opacity-30`} />

                            <div className="p-5 flex flex-col gap-4">
                                <div className="flex items-center gap-2.5">
                                    <div className={`size-7 rounded-lg ${group.glowColor} flex items-center justify-center ${group.color}`}>
                                        {group.icon}
                                    </div>
                                    <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${group.color}`}>
                                        {group.title}
                                    </h4>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    {group.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: groupIdx * 0.08 + i * 0.04 }}
                                            className="group flex items-center gap-2 py-2 px-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                                        >
                                            <img
                                                src={`https://cdn.simpleicons.org/${item.icon}`}
                                                alt={item.name}
                                                loading="lazy"
                                                className="size-3.5 flex-shrink-0 group-hover:opacity-100 opacity-60 transition-opacity"
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                            <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider truncate">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
