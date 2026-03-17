import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, MessageSquareCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const FAQItem = React.memo(({ question, answer, index, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
            className={`border-b border-white/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-primary/5' : ''}`}
            style={{ willChange: 'opacity, transform' }}
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start py-5 px-4 lg:px-6 text-left group gap-4 select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <div className="flex items-start gap-4 lg:gap-6">
                    <span className={`font-mono text-xs mt-1 lg:mt-2 flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-primary/40'}`}>
                        0{index + 1}/
                    </span>
                    <span className={`font-bold text-sm sm:text-base lg:text-lg leading-tight lg:leading-normal transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {question}
                    </span>
                </div>
                <div className={`size-8 rounded-none border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-black' : 'bg-white/5 border-transparent text-primary group-hover:bg-white/10'}`}
                     style={{ transform: 'translateZ(0)' }}>
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: 'flex' }}
                    >
                        <ChevronDown className="size-4" />
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
                        transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="pb-6 px-4 lg:px-6 pl-12 lg:pl-16 text-slate-400 text-sm leading-relaxed max-w-2xl relative">
                            {/* Visual link to the "AI" */}
                            <div className="absolute left-6 lg:left-8 top-0 bottom-6 w-px bg-gradient-to-b from-primary/30 to-transparent" />
                            <div className="absolute left-[22px] lg:left-[30px] top-2 size-1.5 rounded-none bg-primary animate-pulse" />
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
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
        <section className="py-12 lg:py-24 relative" id="faq">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    
                    {/* Left Column: AI Interface */}
                    <div className="col-span-1 lg:col-span-5">
                        <div className="sticky top-24 lg:top-32 flex flex-col gap-6">
                            
                            {/* Title & Badge */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/20 bg-primary/10">
                                    <MessageSquareCode className="size-4 text-primary" />
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t.faq.badge || "FAQ"}</span>
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                                    {t.faq.title} <br />
                                    <span className="gradient-text">{t.faq.titleAccent}</span>
                                </h2>
                                <p className="text-slate-400 text-sm">{t.faq.subtitle}</p>
                            </div>

                            {/* Spline AI Orb Container */}
                            <div 
                                ref={containerRef}
                                className="relative aspect-square w-full max-w-sm mx-auto lg:mx-0 border border-white/10 bg-black/50 overflow-hidden group"
                            >
                                {/* Futuristic overlay frames */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 pointer-events-none z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 pointer-events-none z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 pointer-events-none z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 pointer-events-none z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                                
                                {/* Status Indicator */}
                                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2 py-1 bg-black/60 border border-white/5 backdrop-blur-sm">
                                    <span className="relative flex h-1.5 w-1.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                    </span>
                                    <span className="text-[8px] font-mono text-slate-300 uppercase tracking-widest">Sys.Core_Online</span>
                                </div>

                                {/* Spline Viewer */}
                                <div className={`absolute inset-0 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                                    {isInView && (
                                        <spline-viewer 
                                            loading-anim-type="spinner-small-dark" 
                                            url="https://prod.spline.design/bOpmz3UtuUOIXWvI/scene.splinecode"
                                            style={{ width: '100%', height: '100%', outline: 'none' }}
                                        ></spline-viewer>
                                    )}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
                                
                                {/* Bottom AI Processing Text */}
                                <div className="absolute bottom-4 left-0 w-full text-center z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.p 
                                            key={openIndex}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-[10px] font-mono text-primary/70 uppercase tracking-widest"
                                        >
                                            {openIndex !== null ? "Processing Query..." : "Awaiting Input..."}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Questions */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                        <div className="bg-black/40 border border-white/5 p-2 sm:p-4">
                            <div className="bg-black/40 p-2 sm:p-4 lg:p-6">
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
            </div>
        </section>
    );
};

export default React.memo(FAQ);
