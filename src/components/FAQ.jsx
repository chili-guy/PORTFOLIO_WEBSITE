import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

const FAQItem = React.memo(({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut" 
            }}
            className="border-b border-white/5 last:border-0 transform-gpu"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start py-5 text-left group gap-4 outline-none"
            >
                <div className="flex items-start gap-6">
                    <span className="text-primary font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity mt-2">0{index + 1}/</span>
                    <span className="font-bold text-lg lg:text-2xl text-white group-hover:text-primary transition-colors leading-tight lg:leading-normal">
                        {question}
                    </span>
                </div>
                <div className="size-8 rounded-none bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0 mt-0.5 lg:mt-1">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                    >
                        <ChevronDown className="size-4" />
                    </motion.div>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 pl-12 text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});

const FAQ = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-8 lg:py-14 relative" id="faq">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
                    <div className="size-12 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                        <HelpCircle className="size-6" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        {t.faq.title} <span className="gradient-text">{t.faq.titleAccent}</span>
                    </h2>
                    <p className="text-slate-500 font-bold text-xs">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="bg-surface-dark/20 rounded-none p-4 border border-white/5 backdrop-blur-sm">
                    <div className="bg-surface-dark/40 rounded-none p-3 lg:p-8">
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
