import React, { useRef, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useInView } from 'framer-motion';

export default function SplineBackground() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "200px" });

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black"
        >

            {/* Spline Rendering - Enabled for all devices as requested */}
            <div className="absolute inset-0 overflow-hidden">
                {isInView && (
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
