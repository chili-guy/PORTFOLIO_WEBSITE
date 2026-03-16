import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SplineBackground() {
    const containerRef = useRef(null);

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
                
                {/* Fallback Static/Animated Gradient for Mobile Performance */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black opacity-80" />
                <div className="md:hidden absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_50%)] animate-[pulse_8s_ease-in-out_infinite]" />
                
                {/* Main Content Fade Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2] pointer-events-none" />

                {/* Spline Viewer - Hidden on Mobile for Performance */}
                <div className="hidden md:block absolute inset-x-0 top-0 h-full overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-[calc(100%+60px)] origin-center"
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
