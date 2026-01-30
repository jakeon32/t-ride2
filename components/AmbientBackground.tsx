import React, { useEffect, useState } from 'react';

const AmbientBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Orb 1: Top Left - Blueish */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[180px] mix-blend-screen animate-pulse-slow"></div>

            {/* Orb 2: Bottom Right - Purpleish */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-900/40 rounded-full blur-[180px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            {/* Orb 3: Center Right - Cyanish (Balanced) */}
            <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/30 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

            {/* Orb 4: Bottom Left - Indigo (Extra Balance) */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            {/* Orb 5: Dynamic Mouse Follower */}
            <div
                className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] transition-transform duration-1000 ease-out will-change-transform"
                style={{
                    transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
                }}
            ></div>

            {/* Global Grain/Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default AmbientBackground;
