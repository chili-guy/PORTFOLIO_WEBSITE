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

const TechMarquee = React.memo(({ icons }) => {
    const duplicatedIcons = [...icons, ...icons, ...icons];
    return (
        <div className="relative w-full overflow-hidden py-1 transform-gpu">
            <motion.div
                className="flex gap-2 w-max"
                initial={{ x: "0%" }}
                animate={{ x: "-33.33%" }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20, // Slower for less CPU stress
                        ease: "linear",
                    }
                }}
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
});

const AccordionItem = React.memo(({ item, index, isOpen, onToggle, t }) => (
    <motion.div 
        initial={window.innerWidth < 1024 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.1 }} 
        transition={{ 
            duration: 0.4, // Faster
            delay: index * 0.05,
            ease: "easeOut"
        }} 
        className={`rounded-none border overflow-hidden transition-all duration-300 transform-gpu ${isOpen ? item.borderColor + ' bg-surface-dark shadow-2xl' : 'border-white/5 bg-transparent'}`}
    >
        <button onClick={onToggle} className="w-full flex items-center gap-4 px-5 py-5 text-left group">
            <div className={`size-10 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen ? `${item.glowColor} ${item.accentColor} scale-110` : 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-slate-300'}`}>
                {item.icon}
            </div>
            <div className="flex-1 min-w-0">
                <span className={`text-[9px] font-black tracking-[0.25em] uppercase transition-colors duration-300 ${isOpen ? item.accentColor : 'text-slate-600'}`}>{item.label}</span>
                <p className={`text-sm font-bold leading-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{item.title}</p>
            </div>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={`flex-shrink-0 transition-colors ${isOpen ? item.accentColor : 'text-slate-600 group-hover:text-slate-400'}`}>
                <ChevronDown className="size-4" />
            </motion.div>
        </button>
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-6 flex flex-col gap-5 border-t border-white/5">
                        <div className={`h-[2px] w-full bg-gradient-to-r ${item.color} mt-0`} />
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                        <TechMarquee icons={item.techIcons} />
                        <div className="grid grid-cols-1 gap-2.5">
                            {item.skills.map((skill, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    key={i} 
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className={`size-4 flex-shrink-0 ${item.accentColor}`} />
                                    <span className="text-slate-300 text-xs font-medium">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                        <a href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.expertise.waMsg + item.title + '!')}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${item.accentColor} hover:translate-x-1 transition-transform mt-2`}>
                            {t.expertise.requestService} <ArrowRight className="size-3" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
));

const DesktopPanel = React.memo(({ active, setActive, principles, t }) => {
    const current = principles[active];
    return (
        <div className="grid grid-cols-5 gap-8">
            <div className="col-span-2 flex flex-col gap-3">
                {principles.map((item, index) => (
                    <motion.button 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        onClick={() => setActive(index)} 
                        className={`group relative flex items-center gap-5 px-6 py-5 rounded-none border transition-all duration-500 text-left w-full ${active === index ? `${item.borderColor} bg-surface-dark shadow-xl scale-[1.02]` : 'border-white/5 bg-surface-dark/30 hover:bg-surface-dark/60 hover:border-white/10'}`}
                    >
                        {active === index && <motion.div layoutId="activeTabDesktop" className={`absolute left-0 top-0 bottom-0 w-1 rounded-none ${item.glowBg}`} transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
                        <div className={`size-10 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-500 ${active === index ? `${item.glowColor} ${item.accentColor} scale-110` : 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-slate-300'}`}>
                            {item.icon}
                        </div>
                        <div className="min-w-0">
                            <span className={`text-[10px] font-black tracking-[0.25em] uppercase transition-colors duration-300 ${active === index ? item.accentColor : 'text-slate-600'}`}>{item.label}</span>
                            <p className={`text-base font-bold leading-tight transition-colors duration-300 ${active === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-200'}`}>{item.title}</p>
                            <p className="text-[11px] text-slate-600 mt-1 leading-snug">{item.shortDesc}</p>
                        </div>
                    </motion.button>
                ))}
            </div>
            <div className="col-span-3 relative">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={active} 
                        initial={{ opacity: 0, scale: 0.98, x: 10 }} 
                        animate={{ opacity: 1, scale: 1, x: 0 }} 
                        exit={{ opacity: 0, scale: 0.98, x: -10 }} 
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
                        className="h-full"
                    >
                        <div className={`relative h-full rounded-none border ${current.borderColor} bg-surface-dark shadow-2xl overflow-hidden p-8 lg:p-12 flex flex-col gap-8`}>
                            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${current.color} opacity-30 blur-[120px] pointer-events-none`} />
                            
                            {/* Decorative line */}
                            <div className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${current.color} w-full opacity-50`} />

                            <div className="relative z-10 flex flex-col gap-8 h-full">
                                <div className="flex items-start gap-5">
                                    <motion.div 
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className={`size-14 rounded-none flex items-center justify-center flex-shrink-0 ${current.glowColor} ${current.accentColor} border ${current.borderColor}`}
                                    >
                                        {current.icon}
                                    </motion.div>
                                    <div>
                                        <motion.span 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className={`text-[12px] font-black tracking-[0.3em] uppercase ${current.accentColor}`}
                                        >
                                            Área {current.label}
                                        </motion.span>
                                        <motion.h4 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-2xl lg:text-4xl font-bold text-white mt-1 tracking-tight"
                                        >
                                            {current.title}
                                        </motion.h4>
                                    </div>
                                </div>
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-slate-400 text-sm lg:text-lg leading-relaxed font-medium"
                                >
                                    {current.desc}
                                </motion.p>
                                
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <TechMarquee icons={current.techIcons} />
                                </motion.div>

                                <div className="grid grid-cols-2 gap-4">
                                    {current.skills.map((skill, i) => (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.05 }}
                                            className="flex items-center gap-3 bg-white/[0.02] p-3 border border-white/[0.03] hover:bg-white/[0.04] transition-colors"
                                        >
                                            <CheckCircle2 className={`size-5 flex-shrink-0 ${current.accentColor}`} />
                                            <span className="text-slate-300 text-sm font-medium">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-auto pt-6"
                                >
                                    <a href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.expertise.waMsg + current.title + '!')}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] ${current.accentColor} hover:opacity-80 transition-all group`}>
                                        {t.expertise.requestService} <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
});

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

export default React.memo(Expertise);
