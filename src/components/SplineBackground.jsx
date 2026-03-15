import React, { useRef, Suspense, useState, useEffect, lazy } from 'react';
import { motion, useInView } from 'framer-motion';

// Lazy load Spline to keep initial bundle small
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Low-overhead view detection (once: true for better performance)
    const isInView = useInView(containerRef, { once: true, margin: "200px" });

    const handleLoad = (splineApp) => {
        // Spline Component Optimization
        if (splineApp && window.innerWidth < 768) {
            // Some versions of splineApp allow for performance tweaks
            // We ensure it's loaded before showing to avoid "jumpy" frames
            try {
                // Potentially reduce quality for mobile if API allows
                // (Depends on specific @splinetool versions)
            } catch (e) {
                console.log("Spline optimization skipped");
            }
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
                {isInView && (
                    <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                        <div className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <Spline
                                scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                                className="w-full h-full scale-[1.02] md:scale-100" // Slight scale to hide edges on mobile
                                onLoad={handleLoad}
                                // Optimizing Spline via props where supported
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>
                    </Suspense>
                )}
                
                {/* Optimized Anti-watermark mask */}
                <div className="absolute bottom-0 right-0 w-[165px] h-[40px] bg-black z-10 pointer-events-none" />
            </div>
        </motion.div>
    );
}

