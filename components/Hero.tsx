import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero_img02.jpg';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity/darkness based on scroll
  // As we scroll down, opacity goes from 0 to 0.8
  const overlayOpacity = Math.min(scrollY / 800, 0.8);

  // Parallax effect:
  // Container is sticky (fixed position visual).
  // Content moves UP slowly (negative translateY) as user scrolls down.
  // Speed factor 0.3 means it moves 30% as fast as the overlaying content.
  const parallaxOffset = -scrollY * 0.3;

  return (
    <section className="sticky top-0 h-[70vh] w-full overflow-hidden z-0">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={heroBg}
          alt="Landscape"
          className="w-full h-full object-cover"
        />
        {/* Dynamic Darkening Overlay */}
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
          style={{ opacity: overlayOpacity }}
        />
        {/* Static Gradients with Blue Tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/60 via-transparent to-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
      </div>

      <div
        className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12 z-10 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div
          className="max-w-5xl mx-auto text-left md:text-center"
        >
          <h1 className="display-font text-6xl md:text-[8rem] lg:text-[10rem] font-extrabold text-white leading-[0.85] mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            T-RIDE
          </h1>
          <p className="text-xl md:text-3xl font-bold text-white/90 mb-12 tracking-wide drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            목적지에 맞게, 이동을 선택하다
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4">
            <a href="#inventory" className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95">
              카테고리 둘러보기
            </a>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95">
              고객센터
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
