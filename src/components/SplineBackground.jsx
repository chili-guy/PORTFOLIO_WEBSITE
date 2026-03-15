import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SplineBackground() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-10%" });

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
                {isInView && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full"
                    >
                        <spline-viewer 
                            loading-anim-type="spinner-small-dark" 
                            url="https://prod.spline.design/5f9cX97UwjHyVYF7/scene.splinecode"
                            style={{ 
                                width: '100%', 
                                height: '100%',
                                pointerEvents: 'none'
                             }}
                        ></spline-viewer>
                    </motion.div>
                )}
                
                {/* Optimized Anti-watermark mask */}
                <div className="absolute bottom-0 right-0 w-[165px] h-[40px] bg-black z-10 pointer-events-none" />
            </div>
        </motion.div>
    );
}
