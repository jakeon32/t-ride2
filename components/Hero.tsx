import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero_img05.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const textParallax = scrollY * 0.2; // Text moves slower
  const bgParallax = scrollY * 0.5; // BG moves faster

  return (
    <section className="relative h-[75vh] w-full overflow-hidden bg-[var(--color-bg)]">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 will-change-transform scale-110"
        style={{ transform: `translateY(${bgParallax}px)` }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimmer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A] z-20" /> {/* Cinematic Edge */}
        <img
          src={heroBg}
          alt="AETHER Scenery"
          className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 h-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div
          className="max-w-[1216px] mx-auto w-full border-l border-white/10 pl-8 md:pl-16 will-change-transform"
          style={{ transform: `translateY(${textParallax}px)` }}
        >
          {/* Metadata / Decor */}
          <div className="flex items-center gap-4 mb-8 text-white/50 animate-fade-in-up">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Est. 2024</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {lang === 'KR' ? '이동의 새로운 기준' : 'Mobility Redefined'}
            </span>
          </div>

          {/* Massive Typography */}
          <h1 className="text-hero text-white mb-2 ml-[-0.05em] animate-slide-in-right font-display leading-[0.8]">
            T-RIDE
          </h1>

          <h2 className="text-4xl md:text-6xl font-light text-white/90 mb-12 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {lang === 'KR' ? (
              <>
                예술이 된<br />
                <span className="font-bold text-[var(--color-accent)]">이동의 경험.</span>
              </>
            ) : (
              <>
                SCULPTURAL<br />
                <span className="font-bold text-[var(--color-accent)]">MOBILITY.</span>
              </>
            )}
          </h2>

          <p className="max-w-xl text-lg text-slate-400 mb-16 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {lang === 'KR'
              ? "T-RIDE는 단순한 운송을 넘어 이동을 하나의 예술로 대합니다. 엄선된 밴과 전문 쇼퍼가 선사하는 가장 정적이고 편안한 여정을 경험하세요."
              : "We treat transportation as an art form. Experience the silent masterpiece of movement with our premium fleet and curated journeys."}
          </p>

          <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#inventory" className="group relative overflow-hidden flex items-center justify-center px-12 py-5 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
              <span className="relative z-10">{lang === 'KR' ? '서비스 보기' : 'Explore Fleet'}</span>
            </a>
            <button className="group flex items-center gap-4 px-8 py-5 text-white/70 hover:text-white transition-colors">
              <span className="text-sm font-bold tracking-widest uppercase">{lang === 'KR' ? '브랜드 필름' : 'Watch Film'}</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Aligned to Content Grid */}
        <div className="absolute bottom-10 left-0 w-full pointer-events-none z-30">
          <div className="max-w-[1920px] mx-auto w-full px-6 md:px-12">
            <div className="max-w-[1216px] mx-auto w-full pl-8 md:pl-16">
              <div className="flex flex-col items-center gap-4 text-white/30 w-fit">
                <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-8">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Hero;
