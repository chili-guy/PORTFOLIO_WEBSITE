import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-background-dark pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-border-dark to-transparent"></div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                <Terminal className="text-background-dark size-6 stroke-[2.5px]" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Ramon Sousa</h2>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold text-primary">{t.footer.navTitle}</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#expertise" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.expertise}</a>
                            <a href="#projects" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.projects}</a>
                            <a href="#testimonials" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.testimonials}</a>
                            <a href="#faq" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.faq}</a>
                        </nav>
                    </div>

                    <div className="flex items-end justify-end relative h-full">
                        <button
                            onClick={scrollToTop}
                            className="size-12 rounded-full border border-border-dark flex items-center justify-center text-primary hover:bg-primary/10 transition-all group"
                        >
                            <ArrowUp className="size-5 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-border-dark text-[10px] font-bold text-slate-600">
                    <p>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
