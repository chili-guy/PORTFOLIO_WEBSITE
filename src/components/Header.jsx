import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Terminal, Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Especialidades', href: '#expertise' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Tecnologias', href: '#stack' },
        { name: 'Avaliações', href: '#testimonials' },
        { name: 'Dúvidas', href: '#faq' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "h-16 bg-background-dark/80 backdrop-blur-md border-border-dark"
                    : "h-20 bg-transparent border-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="size-9 bg-gradient-to-br from-primary to-amber-700 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(242,185,13,0.3)]">
                        <Terminal className="text-background-dark size-5 stroke-[2.5px]" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-white">Ramon Sousa</h2>
                        <span className="text-[10px] text-primary font-bold">Full Stack Developer</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "absolute top-full left-0 w-full bg-background-dark border-b border-border-dark transition-all duration-300 overflow-hidden md:hidden",
                isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-slate-100 hover:text-primary transition-colors"
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
