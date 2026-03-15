import React, { useRef, Suspense, useState, useEffect, lazy } from 'react';
import { motion, useInView } from 'framer-motion';

// Lazy load heavy components
const Spline = lazy(() => import('@splinetool/react-spline'));
const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [useMobileVersion, setUseMobileVersion] = useState(false);
    
    // Performance: Only load when nearly in view
    const isInView = useInView(containerRef, { once: true, margin: "200px" });

    useEffect(() => {
        const checkMobile = () => {
            // Detect mobile based on touch capability and width
            const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
            const isSmall = window.innerWidth < 1024;
            setUseMobileVersion(isTouch || isSmall);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleLoad = () => {
        setTimeout(() => setIsLoaded(true), 150);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >
            {/* Consistent dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1] pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden">
                {isInView && (
                    <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                        {useMobileVersion ? (
                            // High-performance Particles for Mobile
                            <ParticlesBackground />
                        ) : (
                            // Full Spline for Desktop
                            <Spline
                                scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                                className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={handleLoad}
                            />
                        )}
                    </Suspense>
                )}
                
                {!useMobileVersion && (
                    <div className="absolute bottom-0 right-0 w-[180px] h-[45px] bg-black z-10 pointer-events-none" />
                )}
            </div>
        </motion.div>
    );
}
