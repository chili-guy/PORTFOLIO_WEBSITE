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
            <div className="absolute inset-0 overflow-hidden transform-gpu">
                {/* Visual continuity background */}
                <div className="absolute inset-0 bg-black" />
                
                {/* Adjusted gradient for mobile screen - less aggressive on small screens */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1] pointer-events-none opacity-60 md:opacity-100" />

                <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-[calc(100%+60px)] origin-center" // 60px taller to hide logo
                    >
                        <spline-viewer 
                            loading-anim-type="spinner-small-dark" 
                            url="https://prod.spline.design/m65h6hm9S31ziTqn/scene.splinecode"
                            style={{ 
                                width: '100%', 
                                height: '100%',
                                pointerEvents: 'none'
                             }}
                        ></spline-viewer>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
