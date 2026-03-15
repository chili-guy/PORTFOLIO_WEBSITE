import React, { useRef, Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useInView } from 'framer-motion';

export default function SplineBackground() {
    const containerRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(true);
    const isInView = useInView(containerRef, { once: false, margin: "200px" });

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >
            {/* Mobile/Tablet Fallback - Lighter but beautiful */}
            {!isDesktop && (
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-float" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '3s' }} />
                </div>
            )}

            {/* Desktop Spline Rendering */}
            <div className="absolute inset-0 overflow-hidden">
                {isDesktop && isInView && (
                    <Suspense fallback={<div className="w-full h-full bg-black" />}>
                        <Spline
                            scene="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                            className="w-full h-full"
                        />
                    </Suspense>
                )}
                {/* Anti-watermark mask */}
                <div className="absolute bottom-0 right-0 w-[250px] h-[100px] bg-black z-10" />
            </div>
        </motion.div>
    );
}
