import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const NodeItem = React.memo(({ question, answer, index, isOpen, onToggle, side }) => {
    // Creating the orbital curve effect
    const isMiddle = index === 1; // Assuming 3 items per side
    
    // Left items: curve to the right for top/bot (translate-x pos), push left for middle (translate-x neg)
    // Right items: curve to the left for top/bot (translate-x neg), push right for middle (translate-x pos)
    let orbitOffset = '';
    if (side === 'left') {
        orbitOffset = isMiddle ? 'lg:-translate-x-10' : 'lg:translate-x-12';
    } else {
        orbitOffset = isMiddle ? 'lg:translate-x-10' : 'lg:-translate-x-12';
    }

    return (
        <div className={`relative flex flex-col w-full sm:max-w-sm mx-auto lg:mx-0 pointer-events-auto transition-transform duration-700 ease-out ${orbitOffset} ${side === 'left' ? 'lg:items-end' : 'lg:items-start'}`}>
            
            {/* Connection Line (Visual Only) - Hidden on mobile, points towards center on desktop */}
            <div className={`hidden lg:block absolute top-[28px] ${side === 'left' ? '-right-12 w-12 bg-gradient-to-r' : '-left-12 w-12 bg-gradient-to-l'} from-primary/50 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <button
                onClick={onToggle}
                className={`group flex flex-col gap-3 p-5 w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] hover:bg-black/60 hover:border-primary/40 transition-all duration-300 text-left ${side === 'left' ? 'lg:text-right' : 'lg:text-left'} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <div className={`flex w-full items-start gap-4 ${side === 'left' ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                    {/* Floating Icon Orb */}
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] relative">
                        {/* Core glow */}
                        <div className={`absolute inset-0 rounded-full bg-primary/20 blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                        <motion.div
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                        </motion.div>
                    </div>
                    {/* Question Text */}
                    <span className="font-bold text-white text-sm sm:text-base leading-snug pt-2">
                        {question}
                    </span>
                </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0, scale: 0.95 }}
                        animate={{ height: 'auto', opacity: 1, scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                        className="w-full relative z-20"
                    >
                        <div className="mt-3 p-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                            <p className="text-slate-300 text-sm leading-relaxed text-left">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

NodeItem.displayName = 'NodeItem';

const FAQ = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [openIndex, setOpenIndex] = useState(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "400px" });

    const totalItems = t.faq.data.length;
    const half = Math.ceil(totalItems / 2);
    const leftItems = t.faq.data.slice(0, half);
    const rightItems = t.faq.data.slice(half);

    return (
        <section className="relative min-h-[900px] lg:min-h-[1100px] py-20 flex flex-col justify-center overflow-hidden bg-black" id="faq">
            
            {/* Title - Positioned floating at the top z-20 */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 w-full text-center mb-10 lg:mb-0 lg:absolute lg:top-24 lg:left-1/2 lg:-translate-x-1/2 pointer-events-auto">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Neural FAQ.Core</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
                    {t.faq.title} <br className="hidden sm:block" />
                    <span className="gradient-text">{t.faq.titleAccent}</span>
                </h2>
            </div>
            
            {/* Central Spline Orb - The "Core" */}
            {/* On mobile it acts as the background, on desktop it sits perfectly inside the hollow grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-0 overflow-hidden mix-blend-screen">
                <div ref={containerRef} className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] opacity-80 sm:opacity-100 flex items-center justify-center">
                    <div className={`w-full h-full transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                        {isInView && (
                            <spline-viewer 
                                loading-anim-type="spinner-small-dark" 
                                url="https://prod.spline.design/bOpmz3UtuUOIXWvI/scene.splinecode"
                                style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent' }}
                            ></spline-viewer>
                        )}
                    </div>
                </div>
                {/* Overlay to dim center slightly to ensure text legibility on some screens */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,black_80%)] pointer-events-none" />
            </div>

            {/* Orbital Grid Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:mt-32 pointer-events-none flex-1 flex items-center">
                
                {/* 
                    Mobile: Simple vertical stack of glass cards.
                    Desktop: 3 columns. Left items align right, Center is empty for the Orb, Right items align left.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full items-center">
                    
                    {/* Left Orbit */}
                    <div className="flex flex-col gap-4 lg:gap-14 w-full">
                        {leftItems.map((item, index) => (
                            <NodeItem 
                                key={`left-${index}`} 
                                index={index}
                                side="left"
                                question={item.question} 
                                answer={item.answer} 
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Hollow Center for the Core */}
                    <div className="hidden lg:block w-full h-full pointer-events-none" />

                    {/* Right Orbit */}
                    <div className="flex flex-col gap-4 lg:gap-14 w-full">
                        {rightItems.map((item, index) => (
                            <NodeItem 
                                key={`right-${index}`} 
                                // Adjust index for accurate absolute referencing if needed, but relative 0,1,2 is fine for the curve math
                                index={index} 
                                side="right"
                                question={item.question} 
                                answer={item.answer} 
                                isOpen={openIndex === index + half}
                                onToggle={() => setOpenIndex(openIndex === index + half ? null : index + half)}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
        </section>
    );
};

export default React.memo(FAQ);
