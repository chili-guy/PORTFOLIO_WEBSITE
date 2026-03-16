import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SplineBackground() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { 
        amount: 0.01,
        margin: "400px" // Very generous margin to prevent pop-in
    });

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black transform-gpu"
        >
            <div className={`absolute inset-0 overflow-hidden ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                {/* 
                    Spline Viewer - Managed via CSS visibility to keep context 
                    but stop rendering when far away 
                */}
                <div 
                    className="absolute inset-x-0 top-0 h-full overflow-hidden"
                    style={{ 
                        display: isInView ? 'block' : 'none',
                        transform: 'translate3d(0,0,0)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-[calc(100%+60px)] origin-center transform-gpu"
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
                
                {/* Visual continuity background */}
                <div className="absolute inset-0 bg-black/20 md:bg-black/0" />
                
                {/* Main Content Fade Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2] pointer-events-none" />
            </div>
        </div>
    );
}
