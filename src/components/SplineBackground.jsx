import React, { useRef, Suspense, useState, useEffect, lazy } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Lazy load Spline to keep initial bundle small
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // CRITICAL: once: false allows the component to unmount when the user scrolls away,
    // freeing up GPU/CPU for other sections like FAQ and CTA.
    const isInView = useInView(containerRef, { once: false, margin: "-10%" });

    const handleLoad = (splineApp) => {
        // Force lower pixel ratio on mobile to drastically reduce GPU load (retina devices are heavy)
        if (splineApp) {
            const isMobile = window.innerWidth < 1024;
            // Limit pixel ratio to 1 on mobile, 1.5 on desktop if needed
            const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);
            
            try {
                // Not all spline versions expose this directly on the app, but common in their API
                if (splineApp.setPixelRatio) splineApp.setPixelRatio(dpr);
                // Reduce shadow quality or other features if accessible via API
            } catch (e) {
                console.log('Spline optimization skip');
            }
        }
        setTimeout(() => setIsLoaded(true), 100);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >
            {/* Base Background - Visual continuity */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Dark gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1] pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden transform-gpu">
                <AnimatePresence mode="wait">
                    {isInView && (
                        <Suspense fallback={null}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLoaded ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <Spline
                                    scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                                    className="w-full h-full transform-gpu"
                                    onLoad={handleLoad}
                                    renderMode="performance"
                                    style={{ 
                                        pointerEvents: 'none', 
                                        WebkitTransform: 'translateZ(0)',
                                        opacity: isLoaded ? 1 : 0,
                                        transition: 'opacity 0.5s ease'
                                    }}
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
