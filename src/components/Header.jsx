import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import Logo from './Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.expertise, href: '#expertise' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.testimonials, href: '#testimonials' },
        { name: t.nav.faq, href: '#faq' },
    ];

    const Flag = ({ lang, active, emoji }) => (
        <button
            onClick={() => setLanguage(lang)}
            className={cn(
                "flex items-center justify-center size-8 rounded-none transition-all border",
                active
                    ? "border-primary bg-primary/10 grayscale-0 scale-110"
                    : "border-transparent grayscale opacity-40 hover:opacity-100 hover:grayscale-0"
            )}
            title={lang.toUpperCase()}
        >
            <span className="text-lg leading-none">{emoji}</span>
        </button>
    );

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "h-16 bg-background-dark/80 backdrop-blur-md border-b border-white/5"
                    : "h-20 bg-transparent border-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
                <div
                    className="flex items-center gap-4 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="size-11 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Logo className="size-full" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-black text-white leading-tight tracking-tighter uppercase">Ramon Sousa</h2>
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-1.5">
                            <span className="size-1 bg-primary rounded-none animate-pulse" />
                            Dev Fullstack
                        </span>
                    </div>
                </div>

                {/* Desktop Nav + Flags */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    <div className="h-4 w-px bg-white/10 mx-2" />

                    <div className="flex items-center gap-2">
                        <Flag lang="pt" active={language === 'pt'} emoji="🇧🇷" />
                        <Flag lang="en" active={language === 'en'} emoji="🇺🇸" />
                    </div>
                </div>

                {/* Mobile Menu Toggle + Flags */}
                <div className="flex items-center gap-4 md:hidden">
                    <div className="flex items-center gap-1.5 mr-2">
                        <Flag lang="pt" active={language === 'pt'} emoji="🇧🇷" />
                        <Flag lang="en" active={language === 'en'} emoji="🇺🇸" />
                    </div>
                    <button
                        className="text-slate-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "absolute top-full left-0 w-full bg-background-dark border-b border-white/5 transition-all duration-300 overflow-hidden md:hidden",
                isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[0.2em] text-slate-100 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
