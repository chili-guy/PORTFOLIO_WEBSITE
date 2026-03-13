import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Bolt, ShieldCheck, Code2, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const principles = [
    {
        icon: <Layers className="size-5" />,
        title: 'Frontend & UI/UX',
        label: '01',
        shortDesc: 'Interfaces modernas e responsivas',
        desc: 'Criação de interfaces modernas, responsivas e intuitivas focadas na melhor experiência do usuário — do wireframe ao deploy.',
        color: 'from-primary/20 to-transparent',
        accentColor: 'text-primary',
        borderColor: 'border-primary/30',
        glowColor: 'bg-primary/10',
        glowBg: 'bg-primary',
        skills: [
            'React & Next.js com TypeScript',
            'Design Systems & Componentes reutilizáveis',
            'Animações com Framer Motion',
            'Responsivo & Mobile-First',
            'Performance e Core Web Vitals',
            'Tailwind CSS & Styled Components',
        ]
    },
    {
        icon: <Bolt className="size-5" />,
        title: 'Backend & APIs',
        label: '02',
        shortDesc: 'Regras de negócio e integração',
        desc: 'Desenvolvimento de regras de negócio robustas, bancos de dados e integração completa entre sistemas — escalável e seguro.',
        color: 'from-orange-500/20 to-transparent',
        accentColor: 'text-orange-500',
        borderColor: 'border-orange-500/30',
        glowColor: 'bg-orange-500/10',
        glowBg: 'bg-orange-500',
        skills: [
            'Node.js, FastAPI & REST APIs',
            'PostgreSQL, MySQL & MongoDB',
            'Autenticação JWT & OAuth2',
            'WebSocket & Comunicação em tempo real',
            'Arquitetura de microsserviços',
            'Prisma ORM & Supabase',
        ]
    },
    {
        icon: <ShieldCheck className="size-5" />,
        title: 'Integrações & APIs',
        label: '03',
        shortDesc: 'Conexão entre sistemas e pagamentos',
        desc: 'Conexão entre sistemas, meios de pagamento e APIs externas para automatizar fluxos de dados sem fricção.',
        color: 'from-red-500/20 to-transparent',
        accentColor: 'text-red-400',
        borderColor: 'border-red-500/30',
        glowColor: 'bg-red-500/10',
        glowBg: 'bg-red-400',
        skills: [
            'Stripe, Mercado Pago & Pagar.me',
            'Webhooks & Event-driven',
            'APIs REST & GraphQL',
            'Zapier & automações no-code',
            'Integrações com CRMs e ERPs',
            'PIX, Boleto & Checkout personalizado',
        ]
    },
    {
        icon: <Code2 className="size-5" />,
        title: 'Automações & Dashboards',
        label: '04',
        shortDesc: 'BI, dashboards e processos automáticos',
        desc: 'Criação de dashboards interativos e automações de processos — de planilhas Excel a Power BI e scripts Python.',
        color: 'from-stone-400/20 to-transparent',
        accentColor: 'text-stone-300',
        borderColor: 'border-stone-400/30',
        glowColor: 'bg-stone-400/10',
        glowBg: 'bg-stone-300',
        skills: [
            'Power BI & dashboards interativos',
            'VBA & Macros avançadas no Excel',
            'Python para automação de dados',
            'Google Sheets + Apps Script',
            'ETL e pipelines de dados',
            'Relatórios automáticos e agendados',
        ]
    }
];


/* ─── MOBILE: Accordion ─────────────────────────────────── */
const AccordionItem = ({ item, index, isOpen, onToggle }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className={`rounded-xl border overflow-hidden transition-colors duration-300 ${isOpen ? item.borderColor : 'border-white/5'
            }`}
    >
        {/* Header — always visible */}
        <button
            onClick={onToggle}
            className="w-full flex items-center gap-4 px-5 py-4 text-left"
        >
            <div className={`size-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? `${item.glowColor} ${item.accentColor}` : 'bg-white/5 text-slate-500'
                }`}>
                {item.icon}
            </div>
            <div className="flex-1 min-w-0">
                <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${isOpen ? item.accentColor : 'text-slate-600'
                    }`}>{item.label}</span>
                <p className={`text-sm font-bold leading-tight transition-colors ${isOpen ? 'text-white' : 'text-slate-400'
                    }`}>{item.title}</p>
            </div>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={`flex-shrink-0 transition-colors ${isOpen ? item.accentColor : 'text-slate-600'}`}
            >
                <ChevronDown className="size-4" />
            </motion.div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="px-5 pb-5 flex flex-col gap-4 border-t border-white/5">
                        {/* Glow strip */}
                        <div className={`h-px w-full bg-gradient-to-r ${item.color} mt-0`} />

                        <p className="text-slate-400 text-sm leading-relaxed font-medium">
                            {item.desc}
                        </p>

                        <div className="grid grid-cols-1 gap-2">
                            {item.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-2.5"
                                >
                                    <CheckCircle2 className={`size-3.5 flex-shrink-0 ${item.accentColor}`} />
                                    <span className="text-slate-300 text-xs font-medium">{skill}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href={`https://wa.me/5591991266136?text=Olá Ramon, tenho interesse em ${item.title}!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${item.accentColor} hover:opacity-70 transition-opacity group mt-1`}
                        >
                            Solicitar este serviço
                            <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

/* ─── DESKTOP: Tabs + Detail Panel ──────────────────────── */
const DesktopPanel = ({ active, setActive }) => {
    const current = principles[active];
    return (
        <div className="grid grid-cols-5 gap-6">
            {/* Tabs */}
            <div className="col-span-2 flex flex-col gap-2">
                {principles.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`group relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 text-left w-full ${active === index
                            ? `${item.borderColor} bg-surface-dark`
                            : 'border-white/5 bg-surface-dark/30 hover:bg-surface-dark/60 hover:border-white/10'
                            }`}
                    >
                        {active === index && (
                            <motion.div
                                layoutId="activeTabDesktop"
                                className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${item.glowBg}`}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                        )}
                        <div className={`size-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${active === index ? `${item.glowColor} ${item.accentColor}` : 'bg-white/5 text-slate-500'
                            }`}>
                            {item.icon}
                        </div>
                        <div className="min-w-0">
                            <span className={`text-[9px] font-black tracking-[0.2em] ${active === index ? item.accentColor : 'text-slate-600'}`}>
                                {item.label}
                            </span>
                            <p className={`text-sm font-bold leading-tight transition-colors ${active === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                                }`}>{item.title}</p>
                            <p className="text-[10px] text-slate-600 mt-0.5">{item.shortDesc}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Detail panel */}
            <div className="col-span-3 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="h-full"
                    >
                        <div className={`relative h-full rounded-2xl border ${current.borderColor} bg-surface-dark overflow-hidden`}>
                            <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl ${current.color} opacity-60 blur-3xl pointer-events-none`} />
                            <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-6 h-full">
                                <div className="flex items-start gap-4">
                                    <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${current.glowColor} ${current.accentColor}`}>
                                        {React.cloneElement(current.icon, { className: 'size-6' })}
                                    </div>
                                    <div>
                                        <span className={`text-[10px] font-black tracking-[0.25em] uppercase ${current.accentColor}`}>
                                            Área {current.label}
                                        </span>
                                        <h4 className="text-xl lg:text-2xl font-bold text-white mt-0.5">{current.title}</h4>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-medium">{current.desc}</p>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {current.skills.map((skill, i) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                            className="flex items-center gap-2.5"
                                        >
                                            <CheckCircle2 className={`size-4 flex-shrink-0 ${current.accentColor}`} />
                                            <span className="text-slate-300 text-xs font-medium">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-2">
                                    <a
                                        href={`https://wa.me/5591991266136?text=Olá Ramon, tenho interesse em ${current.title}!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${current.accentColor} hover:opacity-80 transition-opacity group`}
                                    >
                                        Solicitar este serviço
                                        <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
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

/* ─── Main Component ─────────────────────────────────────── */
const Expertise = () => {
    const [activeDesktop, setActiveDesktop] = useState(0);
    const [openMobile, setOpenMobile] = useState(0); // first open by default

    return (
        <section className="py-8 lg:py-16 relative" id="expertise">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-8 lg:mb-12 space-y-3">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-primary">Controle Total do Projeto</h2>
                        <div className="h-px flex-1 bg-border-dark"></div>
                    </div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Soluções de Engenharia <br />
                        <span className="gradient-text">Sem Compromissos</span>
                    </h3>
                </div>

                {/* Mobile: Accordion */}
                <div className="flex flex-col gap-2 lg:hidden">
                    {principles.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openMobile === index}
                            onToggle={() => setOpenMobile(openMobile === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Desktop: Tabs + Panel */}
                <div className="hidden lg:block">
                    <DesktopPanel active={activeDesktop} setActive={setActiveDesktop} />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
