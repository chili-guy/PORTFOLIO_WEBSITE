import React, { useRef, Suspense, useState, useEffect, lazy } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Lazy load Spline component to reduce initial bundle size
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Performance: Only load when nearly in view
    const isInView = useInView(containerRef, { once: true, margin: "400px" });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleLoad = () => {
        // Delay slightly for smoother transition
        setTimeout(() => setIsLoaded(true), 100);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1] pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden">
                {isInView && (
                    <Suspense fallback={
                        <div className="absolute inset-0 bg-black animate-pulse flex items-center justify-center">
                            <div className="w-16 h-1 w-16 bg-primary/20 rounded-full" />
                        </div>
                    }>
                        <Spline
                            scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                            className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={handleLoad}
                        />
                    </Suspense>
                )}
                
                {/* Anti-watermark mask - optimized for modern Spline versions */}
                <div className="absolute bottom-0 right-0 w-[180px] h-[45px] bg-black z-10 pointer-events-none" />
            </div>
        </motion.div>
    );
}

