import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Bolt, ShieldCheck, Code2, Brain, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const getPrinciples = (t) => [
    {
        icon: <Layers className="size-5" />,
        title: t.expertise.areas['01'].title,
        label: '01',
        shortDesc: t.expertise.areas['01'].shortDesc,
        desc: t.expertise.areas['01'].desc,
        color: 'from-primary/20 to-transparent',
        accentColor: 'text-primary',
        borderColor: 'border-primary/30',
        glowColor: 'bg-primary/10',
        glowBg: 'bg-primary',
        techIcons: [
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextdotjs' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Tailwind', icon: 'tailwindcss' },
            { name: 'Framer', icon: 'framer' },
            { name: 'Vite', icon: 'vite' },
        ],
        skills: t.expertise.areas['01'].skills
    },
    {
        icon: <Bolt className="size-5" />,
        title: t.expertise.areas['02'].title,
        label: '02',
        shortDesc: t.expertise.areas['02'].shortDesc,
        desc: t.expertise.areas['02'].desc,
        color: 'from-orange-500/20 to-transparent',
        accentColor: 'text-orange-500',
        borderColor: 'border-orange-500/30',
        glowColor: 'bg-orange-500/10',
        glowBg: 'bg-orange-500',
        techIcons: [
            { name: 'Node.js', icon: 'nodedotjs' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'PostgreSQL', icon: 'postgresql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'Prisma', icon: 'prisma' },
        ],
        skills: t.expertise.areas['02'].skills
    },
    {
        icon: <ShieldCheck className="size-5" />,
        title: t.expertise.areas['03'].title,
        label: '03',
        shortDesc: t.expertise.areas['03'].shortDesc,
        desc: t.expertise.areas['03'].desc,
        color: 'from-red-500/20 to-transparent',
        accentColor: 'text-red-400',
        borderColor: 'border-red-500/30',
        glowColor: 'bg-red-500/10',
        glowBg: 'bg-red-400',
        techIcons: [
            { name: 'Stripe', icon: 'stripe' },
            { name: 'Mercado Pago', icon: 'mercadopago' },
            { name: 'GraphQL', icon: 'graphql' },
            { name: 'Zapier', icon: 'zapier' },
            { name: 'HubSpot', icon: 'hubspot' },
            { name: 'Twilio', icon: 'twilio' },
        ],
        skills: t.expertise.areas['03'].skills
    },
    {
        icon: <Code2 className="size-5" />,
        title: t.expertise.areas['04'].title,
        label: '04',
        shortDesc: t.expertise.areas['04'].shortDesc,
        desc: t.expertise.areas['04'].desc,
        color: 'from-stone-400/20 to-transparent',
        accentColor: 'text-stone-300',
        borderColor: 'border-stone-400/30',
        glowColor: 'bg-stone-400/10',
        glowBg: 'bg-stone-300',
        techIcons: [
            { name: 'Excel', icon: 'microsoftexcel' },
            { name: 'Python', icon: 'python' },
            { name: 'Google Sheets', icon: 'googlesheets' },
            { name: 'Pandas', icon: 'pandas' },
            { name: 'Power BI', icon: 'powerbi' },
            { name: 'PostgreSQL', icon: 'postgresql' },
        ],
        skills: t.expertise.areas['04'].skills
    },
    {
        icon: <Brain className="size-5" />,
        title: t.expertise.areas['05'].title,
        label: '05',
        shortDesc: t.expertise.areas['05'].shortDesc,
        desc: t.expertise.areas['05'].desc,
        color: 'from-rose-500/20 to-transparent',
        accentColor: 'text-rose-400',
        borderColor: 'border-rose-500/30',
        glowColor: 'bg-rose-500/10',
        glowBg: 'bg-rose-400',
        techIcons: [
            { name: 'n8n', icon: 'n8n' },
            { name: 'OpenAI', icon: 'openai' },
            { name: 'WhatsApp', icon: 'whatsapp' },
            { name: 'LangChain', icon: 'langchain' },
            { name: 'Anthropic', icon: 'anthropic' },
            { name: 'Groq', icon: 'groq' },
        ],
        skills: t.expertise.areas['05'].skills
    }
];

const TechMarquee = ({ icons }) => {
    const duplicatedIcons = [...icons, ...icons, ...icons];
    return (
        <div className="relative w-full overflow-hidden py-1">
            <motion.div
                className="flex gap-2 w-max"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } }}
            >
                {duplicatedIcons.map((tech, i) => (
                    <div key={`${tech.icon}-${i}`} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] flex-shrink-0">
                        <img src={`https://cdn.simpleicons.org/${tech.icon}`} alt={tech.name} loading="lazy" className="size-3.5 flex-shrink-0" onError={(e) => { e.target.style.display = 'none'; }} />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const AccordionItem = ({ item, index, isOpen, onToggle, t }) => (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`rounded-xl border overflow-hidden transition-colors duration-300 ${isOpen ? item.borderColor : 'border-white/5'}`}>
        <button onClick={onToggle} className="w-full flex items-center gap-4 px-5 py-4 text-left">
            <div className={`size-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? `${item.glowColor} ${item.accentColor}` : 'bg-white/5 text-slate-500'}`}>
                {item.icon}
            </div>
            <div className="flex-1 min-w-0">
                <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${isOpen ? item.accentColor : 'text-slate-600'}`}>{item.label}</span>
                <p className={`text-sm font-bold leading-tight transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}>{item.title}</p>
            </div>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={`flex-shrink-0 transition-colors ${isOpen ? item.accentColor : 'text-slate-600'}`}>
                <ChevronDown className="size-4" />
            </motion.div>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div key="content" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 flex flex-col gap-4 border-t border-white/5">
                        <div className={`h-px w-full bg-gradient-to-r ${item.color} mt-0`} />
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                        <TechMarquee icons={item.techIcons} />
                        <div className="grid grid-cols-1 gap-2">
                            {item.skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <CheckCircle2 className={`size-3.5 flex-shrink-0 ${item.accentColor}`} />
                                    <span className="text-slate-300 text-xs font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                        <a href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.expertise.waMsg + item.title + '!')}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${item.accentColor} hover:opacity-70 transition-opacity mt-1`}>
                            {t.expertise.requestService} <ArrowRight className="size-3" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const DesktopPanel = ({ active, setActive, principles, t }) => {
    const current = principles[active];
    return (
        <div className="grid grid-cols-5 gap-6">
            <div className="col-span-2 flex flex-col gap-2">
                {principles.map((item, index) => (
                    <button key={index} onClick={() => setActive(index)} className={`group relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 text-left w-full ${active === index ? `${item.borderColor} bg-surface-dark` : 'border-white/5 bg-surface-dark/30 hover:bg-surface-dark/60 hover:border-white/10'}`}>
                        {active === index && <motion.div layoutId="activeTabDesktop" className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${item.glowBg}`} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                        <div className={`size-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${active === index ? `${item.glowColor} ${item.accentColor}` : 'bg-white/5 text-slate-500'}`}>
                            {item.icon}
                        </div>
                        <div className="min-w-0">
                            <span className={`text-[9px] font-black tracking-[0.2em] ${active === index ? item.accentColor : 'text-slate-600'}`}>{item.label}</span>
                            <p className={`text-sm font-bold leading-tight ${active === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{item.title}</p>
                            <p className="text-[10px] text-slate-600 mt-0.5">{item.shortDesc}</p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="col-span-3 relative">
                <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="h-full">
                        <div className={`relative h-full rounded-2xl border ${current.borderColor} bg-surface-dark overflow-hidden p-8 lg:p-10 flex flex-col gap-6`}>
                            <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl ${current.color} opacity-60 blur-3xl pointer-events-none`} />
                            <div className="relative z-10 flex flex-col gap-6 h-full">
                                <div className="flex items-start gap-4">
                                    <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${current.glowColor} ${current.accentColor}`}>
                                        {current.icon}
                                    </div>
                                    <div>
                                        <span className={`text-[10px] font-black tracking-[0.25em] uppercase ${current.accentColor}`}>Área {current.label}</span>
                                        <h4 className="text-xl lg:text-2xl font-bold text-white mt-0.5">{current.title}</h4>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-medium">{current.desc}</p>
                                <TechMarquee icons={current.techIcons} />
                                <div className="grid grid-cols-2 gap-2.5">
                                    {current.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <CheckCircle2 className={`size-4 flex-shrink-0 ${current.accentColor}`} />
                                            <span className="text-slate-300 text-xs font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-2">
                                    <a href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.expertise.waMsg + current.title + '!')}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${current.accentColor} hover:opacity-80 transition-opacity group`}>
                                        {t.expertise.requestService} <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const Expertise = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const principles = getPrinciples(t);
    const [activeDesktop, setActiveDesktop] = useState(0);
    const [openMobile, setOpenMobile] = useState(0);

    return (
        <section className="py-8 lg:py-16 relative" id="expertise">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-8 lg:mb-12 space-y-3">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-primary">{t.expertise.badge}</h2>
                        <div className="h-px flex-1 bg-border-dark"></div>
                    </div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {t.expertise.title} <br />
                        <span className="gradient-text">{t.expertise.titleAccent}</span>
                    </h3>
                </div>
                <div className="flex flex-col gap-2 lg:hidden">
                    {principles.map((item, index) => (
                        <AccordionItem key={index} item={item} index={index} isOpen={openMobile === index} onToggle={() => setOpenMobile(openMobile === index ? null : index)} t={t} />
                    ))}
                </div>
                <div className="hidden lg:block">
                    <DesktopPanel active={activeDesktop} setActive={setActiveDesktop} principles={principles} t={t} />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
