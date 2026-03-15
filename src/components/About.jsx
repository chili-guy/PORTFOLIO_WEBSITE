import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = [
        { label: t.aboutContent.stats.projects, value: '50+' },
        { label: t.aboutContent.stats.clients, value: '28+' },
        { label: t.aboutContent.stats.experience, value: '4+' },
    ];

    return (
        <section className="py-20 lg:py-32 relative overflow-hidden" id="about">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
                        <div className="absolute -top-10 -left-10 size-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface-dark shadow-2xl">
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                src="/profile.png"
                                alt="Ramon Sousa"
                                loading="lazy"
                                className="w-full h-full object-cover transition-all duration-1000"
                            />
                            {/* Glass overlay at the bottom */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute bottom-6 left-6 right-6 p-6 glass-card border-white/10 backdrop-blur-md rounded-2xl flex justify-between items-center transform group-hover:scale-[1.02] transition-transform duration-500"
                            >
                                <div>
                                    <h4 className="text-white font-bold text-lg">Ramon Sousa</h4>
                                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{t.aboutContent.photoBadge}</p>
                                </div>
                                <div className="size-11 rounded-none bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="text-black font-black text-sm">RS</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">{t.aboutContent.badge}</span>
                                <div className="h-px w-12 bg-primary/30" />
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1]">
                                {t.aboutContent.title} <br />
                                <span className="gradient-text">{t.aboutContent.titleAccent}</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                            <p>{t.aboutContent.text1}</p>
                            <p>{t.aboutContent.text2}</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 text-center lg:text-left"
                                >
                                    <h3 className="text-3xl lg:text-5xl font-black text-white leading-none tracking-tighter">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                        >
                                            {stat.value}
                                        </motion.span>
                                    </h3>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-tight">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
                            <a
                                href={`https://wa.me/5591991266136?text=${encodeURIComponent(translations[language].hero.waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary h-14 px-8 text-xs font-black tracking-widest flex items-center justify-center gap-3 rounded-none"
                            >
                                <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {t.aboutContent.cta}
                            </a>
                            <a
                                href="#projects"
                                className="button-secondary h-14 px-8 text-xs font-black tracking-widest flex items-center justify-center rounded-none border border-white/10 hover:bg-white/5 transition-all uppercase"
                            >
                                {t.aboutContent.more}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);
