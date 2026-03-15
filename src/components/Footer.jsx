import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import Logo from './Logo';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-background-dark pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="size-12 flex items-center justify-center">
                                <Logo className="size-full" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Ramon Sousa</h2>
                                <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Dev Fullstack</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t.footer.navTitle}</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#expertise" className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 hover:text-white transition-colors">{t.nav.expertise}</a>
                            <a href="#projects" className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 hover:text-white transition-colors">{t.nav.projects}</a>
                            <a href="#testimonials" className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 hover:text-white transition-colors">{t.nav.testimonials}</a>
                            <a href="#faq" className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 hover:text-white transition-colors">{t.nav.faq}</a>
                        </nav>
                    </div>

                    <div className="flex items-end justify-end relative h-full">
                        <button
                            onClick={scrollToTop}
                            className="size-14 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-primary/10 transition-all group"
                        >
                            <ArrowUp className="size-6 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                    <p>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
