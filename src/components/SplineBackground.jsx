import React, { useRef, Suspense, useState, useEffect, lazy } from 'react';
import { motion, useInView } from 'framer-motion';

// Lazy load Spline to keep initial bundle small
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // CRITICAL: once: false allows the component to unmount when the user scrolls away,
    // freeing up GPU/CPU for other sections like FAQ and CTA.
    const isInView = useInView(containerRef, { once: false, margin: "-10%" });

    const handleLoad = (splineApp) => {
        // Spline Component Optimization
        if (splineApp && window.innerWidth < 768) {
            // Optional: lower quality for mobile if supported
        }
        setTimeout(() => setIsLoaded(true), 200);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >
            {/* Dark gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1] pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden transform-gpu">
                <AnimatePresence>
                    {isInView && (
                        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLoaded ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full"
                            >
                                <Spline
                                    scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                                    className="w-full h-full scale-[1.02] md:scale-100"
                                    onLoad={handleLoad}
                                    style={{ pointerEvents: 'none' }}
                                />
                            </motion.div>
                        </Suspense>
                    )}
                </AnimatePresence>
                
                {/* Optimized Anti-watermark mask */}
                <div className="absolute bottom-0 right-0 w-[165px] h-[40px] bg-black z-10 pointer-events-none" />
            </div>
        </motion.div>
    );
}


