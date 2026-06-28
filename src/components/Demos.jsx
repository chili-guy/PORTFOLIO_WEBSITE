import React from 'react';
import { motion } from 'framer-motion';
import { Lock, MonitorPlay } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' }
    })
};

const DemoCard = ({ item, index, t }) => {
    const isComingSoon = item.status === 'coming_soon';

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="border border-white/5 bg-black/60 group/card relative z-0 flex flex-col"
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
            <div className="relative overflow-hidden aspect-video flex-shrink-0 bg-black">
                {isComingSoon ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-3">
                                <Lock className="size-5 text-slate-500" />
                            </div>
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                {t.demos.comingSoon}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </>
                ) : (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        loading="lazy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </div>
            <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                        {item.category}
                    </span>
                    {isComingSoon ? (
                        <div className="flex items-center gap-1.5">
                            <div className="size-1.5 rounded-full bg-slate-500" />
                            <span className="text-[9px] font-bold text-slate-500/80 uppercase tracking-widest">
                                {t.demos.soon}
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5">
                            <div className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-red-500/80 uppercase tracking-widest">
                                {t.demos.live}
                            </span>
                        </div>
                    )}
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                <div className="flex gap-2 flex-wrap pt-5 mt-5 border-t border-white/5">
                    {item.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider border border-white/[0.03]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Demos = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const items = [
        {
            title: t.demos.cards[0].title,
            category: t.demos.cards[0].category,
            desc: t.demos.cards[0].desc,
            tags: ['Web', 'Sistema', 'Checker'],
            // TODO: depois de subir no YouTube, cole o ID do vídeo aqui
            // (ex: youtu.be/ABCdef12345 -> videoId: 'ABCdef12345')
            // e troque o status abaixo para 'live'.
            videoId: '',
            status: 'coming_soon',
        },
    ];

    return (
        <section className="py-12 lg:py-20 relative" id="demos">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-start text-left gap-4 mb-10 lg:mb-14">
                    <div className="flex items-center gap-4">
                        <MonitorPlay className="size-4 text-primary" />
                        <h2 className="text-sm font-bold text-primary">{t.demos.badge}</h2>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                        {t.demos.title} <br />
                        <span className="gradient-text">{t.demos.titleAccent}</span>
                    </h3>
                    <p className="text-slate-400 text-base lg:text-lg max-w-2xl">
                        {t.demos.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {items.map((item, index) => (
                        <DemoCard key={index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Demos);
