import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;
        
        // Mobile-first optimization: Reduce count and simplify
        const isMobile = window.innerWidth < 768;
        const PARTICLE_COUNT = isMobile ? 20 : 60;
        const CONNECTION_DISTANCE = isMobile ? 80 : 140;
        const PARTICLE_COLOR = '#0066FF'; // Match the theme blue

        let mouse = { x: null, y: null };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const onMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
        const onMouseOut = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener('resize', resize, { passive: true });
        if (!isMobile) {
            window.addEventListener('mousemove', onMouseMove, { passive: true });
            window.addEventListener('mouseout', onMouseOut, { passive: true });
        }
        resize();

        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const w = canvas.width;
            const h = canvas.height;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const p = particles[i];
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x > w) p.x = 0; else if (p.x < 0) p.x = w;
                if (p.y > h) p.y = 0; else if (p.y < 0) p.y = h;

                // Mouse interaction only on desktop
                if (!isMobile && mouse.x !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < 150*150) {
                        const dist = Math.sqrt(distSq);
                        const force = (150 - dist) / 150;
                        p.x -= (dx / dist) * force * 1.5;
                        p.y -= (dy / dist) * force * 1.5;
                    }
                }

                ctx.globalAlpha = 0.4;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw connections
            const connDistSq = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
            ctx.strokeStyle = PARTICLE_COLOR;
            ctx.lineWidth = 0.5;

            for (let a = 0; a < PARTICLE_COUNT; a++) {
                for (let b = a + 1; b < PARTICLE_COUNT; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connDistSq) {
                        const opacity = (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE) * 0.2;
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 pointer-events-none opacity-50"
            style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)' // Force GPU acceleration
            }}
        />
    );
};

export default ParticlesBackground;
