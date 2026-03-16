import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const FAQItem = React.memo(({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
            className="border-b border-white/5 last:border-0"
            style={{ willChange: 'opacity, transform' }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start py-5 text-left group gap-4 select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <div className="flex items-start gap-6">
                    <span className="text-primary font-mono text-xs opacity-40 mt-2 flex-shrink-0">0{index + 1}/</span>
                    <span className="font-bold text-base lg:text-2xl text-white leading-tight lg:leading-normal">
                        {question}
                    </span>
                </div>
                <div className="size-8 rounded-none bg-white/5 flex items-center justify-center text-primary flex-shrink-0 mt-0.5 transition-colors duration-200"
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
                        <div className="pb-5 pl-12 text-slate-400 text-sm leading-relaxed max-w-2xl">
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

    return (
        <section className="py-6 lg:py-10 relative" id="faq">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
                    <div className="size-12 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                        <HelpCircle className="size-6" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        {t.faq.title} <span className="gradient-text">{t.faq.titleAccent}</span>
                    </h2>
                    <p className="text-slate-500 font-bold text-xs">{t.faq.subtitle}</p>
                </div>

                <div className="bg-black/40 p-4 border border-white/5">
                    <div className="bg-black/40 p-3 lg:p-8">
                        {t.faq.data.map((item, index) => (
                            <FAQItem key={index} index={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(FAQ);
