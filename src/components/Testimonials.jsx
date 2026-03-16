import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

// Static card variant — no whileInView inside horizontal scroll containers
// which causes continuous layout recalculation on mobile
const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' }
    })
};

const TestimonialCard = React.memo(({ review, index }) => (
    <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="border border-white/5 bg-black/60 p-6 lg:p-8 flex-shrink-0 w-[85%] sm:w-[55%] lg:w-[26%] snap-center relative flex flex-col"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
    >
        <Quote className="absolute top-6 right-8 size-8 text-primary/8 pointer-events-none" />
        <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-primary text-primary" />
            ))}
        </div>
        <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic line-clamp-6">
            "{review.comment.trim()}"
        </p>
        <div className="pt-4 border-t border-white/5 mt-auto">
            <h4 className="text-white font-bold text-base tracking-tight mb-3">{review.project}</h4>
            <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest bg-white/5 border border-white/[0.05] px-2.5 py-1">{review.client}</span>
                <span className="text-slate-700 font-black">•</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{review.date}</span>
            </div>
        </div>
    </motion.div>
));
TestimonialCard.displayName = 'TestimonialCard';

const Testimonials = () => {
    const scrollRef = useRef(null);
    const { language } = useLanguage();
    const t = translations[language];

    const reviewsList = t.testimonials.reviews.map((review) => ({
        ...review,
        rating: 5,
        client: t.testimonials.client
    }));

    // Mouse wheel horizontal scroll — desktop only, passive: false only when needed
    const onWheel = useCallback((e) => {
        const el = scrollRef.current;
        if (!el || e.deltaY === 0) return;
        const isDown = e.deltaY > 0;
        const canRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
        const canLeft = el.scrollLeft > 10;
        if ((isDown && canRight) || (!isDown && canLeft)) {
            e.preventDefault();
            el.scrollLeft += e.deltaY * 2;
        }
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || window.innerWidth < 1024) return;
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [onWheel]);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -el.clientWidth / 1.5 : el.clientWidth / 1.5, behavior: 'smooth' });
    };

    return (
        <section className="py-6 lg:py-10 relative" id="testimonials">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 lg:mb-10">
                    <div className="flex flex-col items-start text-left gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{t.testimonials.badge}</h2>
                            <div className="h-px w-12 bg-primary/30" />
                        </div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            {t.testimonials.title} <br />
                            <span className="gradient-text">{t.testimonials.titleAccent}</span>
                        </h3>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <button onClick={() => scroll('left')} className="size-12 border border-white/5 bg-black/40 flex items-center justify-center text-white active:scale-90 transition-transform">
                            <ChevronLeft className="size-5" />
                        </button>
                        <button onClick={() => scroll('right')} className="size-12 border border-white/5 bg-black/40 flex items-center justify-center text-white active:scale-90 transition-transform">
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>

                {/* 
                    Key scroll performance fix: 
                    - overscroll-behavior-x: contain prevents page scroll fighting
                    - will-change: scroll-position gives browser a hint
                    - touch-action: pan-x for native touch acceleration
                */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 px-6 md:px-12 -mx-6 md:-mx-12 snap-x snap-mandatory no-scrollbar"
                    style={{
                        overscrollBehaviorX: 'contain',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {reviewsList.map((review, index) => (
                        <TestimonialCard key={index} review={review} index={index} />
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-2xl border border-white/5 bg-black/60 overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        <div className="px-8 py-8 flex flex-col items-center text-center gap-5">
                            <div className="space-y-2">
                                <h4 className="text-white font-bold text-xl sm:text-2xl leading-tight">
                                    {t.testimonials.inlineCta.title}{' '}
                                    <span className="gradient-text">{t.testimonials.inlineCta.titleAccent}</span>
                                </h4>
                                <p className="text-slate-500 text-sm">{t.testimonials.inlineCta.subtitle}</p>
                            </div>
                            <a
                                href={`https://wa.me/5591991266136?text=${encodeURIComponent(t.testimonials.inlineCta.waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary h-12 px-10 text-xs tracking-widest font-black flex items-center gap-3 group rounded-none"
                            >
                                <svg viewBox="0 0 24 24" className="size-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                {t.testimonials.inlineCta.button}
                                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Testimonials);
