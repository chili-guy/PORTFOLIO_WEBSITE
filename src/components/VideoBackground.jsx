import React, { useState, useRef, useEffect } from 'react';

export default function VideoBackground() {
    const [activeVideo, setActiveVideo] = useState(1);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleTimeUpdate = () => {
            const video = activeVideo === 1 ? videoRef1.current : videoRef2.current;
            const nextVideo = activeVideo === 1 ? videoRef2.current : videoRef1.current;

            if (video && nextVideo && video.duration > 0) {
                const timeLeft = video.duration - video.currentTime;
                
                // Inicia o crossfade 1.5 segundos antes de acabar para ser bem suave
                if (timeLeft < 1.5 && !isTransitioning) {
                    setIsTransitioning(true);
                    nextVideo.currentTime = 0;
                    nextVideo.play().catch(e => console.log("Video play interrupted", e));
                    
                    setTimeout(() => {
                        setActiveVideo(activeVideo === 1 ? 2 : 1);
                        setIsTransitioning(false);
                    }, 1200); 
                }
            }
        };

        const interval = setInterval(handleTimeUpdate, 100);
        return () => clearInterval(interval);
    }, [activeVideo, isTransitioning]);

    // Garante que o primeiro vídeo comece
    useEffect(() => {
        if (videoRef1.current) {
            videoRef1.current.play().catch(e => console.log("Initial play failed", e));
        }
    }, []);

    const videoStyle = "absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out";

    return (
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black">
            <div className="absolute inset-0 bg-black" />
            
            <video
                ref={videoRef1}
                muted
                playsInline
                preload="auto"
                className={`${videoStyle} ${activeVideo === 1 ? 'opacity-60 md:opacity-80' : 'opacity-0'}`}
                src="/hero-bg.mp4"
            />
            
            <video
                ref={videoRef2}
                muted
                playsInline
                preload="auto"
                className={`${videoStyle} ${activeVideo === 2 ? 'opacity-60 md:opacity-80' : 'opacity-0'}`}
                src="/hero-bg.mp4"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
        </div>
    );
}
