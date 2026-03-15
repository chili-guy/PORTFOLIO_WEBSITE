import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;
        let lastTime = 0;
        const FPS_CAP = 30; // Limit to 30fps — smooth but light
        const FRAME_INTERVAL = 1000 / FPS_CAP;

        // Increased density and visibility
        const PARTICLE_COUNT = 60;
        const CONNECTION_DISTANCE = 140;
        const MOUSE_RADIUS = 150;

        let mouse = { x: null, y: null };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const onMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
        const onMouseOut = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener('resize', resize, { passive: true });
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseout', onMouseOut, { passive: true });
        resize();

        // Pre-compute color string once
        const PARTICLE_COLOR = '#f2b90d';

        // Slightly larger and more diverse speeds
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.6,
            speedY: (Math.random() - 0.5) * 0.6,
        }));

        const animate = (timestamp) => {
            animationFrameId = requestAnimationFrame(animate);

            const elapsed = timestamp - lastTime;
            if (elapsed < FRAME_INTERVAL) return; // skip frames to cap FPS
            lastTime = timestamp - (elapsed % FRAME_INTERVAL);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = canvas.width;
            const h = canvas.height;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const p = particles[i];

                // Move
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap
                if (p.x > w) p.x = 0;
                else if (p.x < 0) p.x = w;
                if (p.y > h) p.y = 0;
                else if (p.y < 0) p.y = h;

                // Mouse repulsion
                if (mouse.x !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;
                    if (distSq < radiusSq && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                        p.x -= (dx / dist) * force * 2;
                        p.y -= (dy / dist) * force * 2;
                    }
                }

                // Draw dot - increased opacity
                ctx.globalAlpha = 0.6;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw connections - increased opacity and distance
            const connDistSq = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
            ctx.strokeStyle = PARTICLE_COLOR;
            ctx.lineWidth = 0.8;

            for (let a = 0; a < PARTICLE_COUNT; a++) {
                for (let b = a + 1; b < PARTICLE_COUNT; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connDistSq) {
                        const opacity = (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE) * 0.35;
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        animationFrameId = requestAnimationFrame(animate);

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
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ willChange: 'transform' }}
        />
    );
};

export default ParticlesBackground;
