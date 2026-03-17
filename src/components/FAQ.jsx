import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const FAQItem = React.memo(({ question, answer, index, isOpen, onToggle }) => {
    return (
        <div
            className={`border-b border-white/5 last:border-0 transition-all duration-500 relative ${isOpen ? 'bg-primary/[0.03]' : ''}`}
        >
            {/* Visual connector line that activates when open */}
            <div className={`absolute -left-4 top-0 bottom-0 w-[2px] bg-primary transition-all duration-500 origin-top ${isOpen ? 'scale-y-100 opacity-100 shadow-[0_0_15px_rgba(0,102,255,0.8)]' : 'scale-y-0 opacity-0'}`} />

            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start py-6 px-4 lg:px-6 text-left group gap-4 select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <div className="flex items-start gap-4 lg:gap-6">
                    <span className={`font-mono text-xs mt-1 lg:mt-2 flex-shrink-0 transition-colors duration-500 ${isOpen ? 'text-primary' : 'text-slate-600'}`}>
                        0{index + 1}/
                    </span>
                    <span className={`font-bold text-sm sm:text-base lg:text-xl leading-snug transition-colors duration-500 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {question}
                    </span>
                </div>
                <div className="size-8 rounded-none flex items-center justify-center flex-shrink-0">
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'flex' }}
                        className={`transition-colors duration-500 ${isOpen ? 'text-primary' : 'text-slate-600 group-hover:text-slate-400'}`}
                    >
                        <ChevronDown className="size-5" />
                    </motion.span>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="pb-8 px-4 lg:px-6 pl-12 lg:pl-[4.5rem] text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

FAQItem.displayName = 'FAQItem';

const FAQ = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [openIndex, setOpenIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "200px" });

    return (
        <section className="py-16 lg:py-32 relative overflow-hidden" id="faq">
            {/* Ambient background glow to seat the AI orb seamlessly */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] opacity-30 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Left Column: Organic Floating AI */}
                    <div className="col-span-1 lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-1/4 flex flex-col items-center lg:items-start text-center lg:text-left h-auto">
                            
                            <div className="mb-8 w-full">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                                    {t.faq.title} <br />
                                    <span className="gradient-text">{t.faq.titleAccent}</span>
                                </h2>
                            </div>

                            {/* Floating Free Spline Orb */}
                            <div 
                                ref={containerRef}
                                className="relative w-full aspect-square max-w-[320px] lg:max-w-md mx-auto lg:mx-0 -translate-x-4 lg:-translate-x-12"
                            >
                                {/* Spline Viewer directly on the background without frames */}
                                <div className={`absolute inset-0 transition-opacity duration-[2s] ease-out ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                    {isInView && (
                                        <spline-viewer 
                                            loading-anim-type="spinner-small-dark" 
                                            url="https://prod.spline.design/bOpmz3UtuUOIXWvI/scene.splinecode"
                                            style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent' }}
                                        ></spline-viewer>
                                    )}
                                </div>
                                
                                {/* Overlay status text responding to user interaction */}
                                <div className="absolute -bottom-4 lg:bottom-10 left-1/2 lg:left-24 -translate-x-1/2 pointer-events-none flex flex-col items-center lg:items-start gap-1">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={openIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="relative flex h-2 w-2">
                                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${openIndex !== null ? 'bg-green-400' : 'bg-primary'}`}></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 ${openIndex !== null ? 'bg-green-500' : 'bg-primary'}`}></span>
                                            </span>
                                            <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] whitespace-nowrap">
                                                {openIndex !== null ? "AI Generating Response" : "Awaiting user input"}
                                            </span>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Floating Questions */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center relative pt-8 lg:pt-0">
                        {/* Connecting visual element - subtle bg ray from the orb */}
                        <div className="hidden lg:block absolute top-1/2 -left-16 -translate-y-1/2 w-32 h-[80%] bg-[radial-gradient(ellipse_at_left,rgba(0,102,255,0.08)_0%,transparent_100%)] pointer-events-none" />

                        <div className="flex flex-col gap-2 relative z-10 w-full">
                            {t.faq.data.map((item, index) => (
                                <FAQItem 
                                    key={index} 
                                    index={index} 
                                    question={item.question} 
                                    answer={item.answer} 
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default React.memo(FAQ);
