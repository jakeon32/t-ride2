import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero_img05.webp';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollOptimized } from '../hooks';

const Hero: React.FC = () => {
  const scrollY = useScrollOptimized();
  const { lang } = useLanguage();

  // Parallax calculations - negative = scrolls up with page, smaller factor = slower
  const textParallax = -scrollY * 0.15; // Text scrolls up slower than page
  const bgParallax = -scrollY * 0.05; // BG scrolls up slowest

  return (
    <section className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden bg-[var(--color-bg)]">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{ transform: `translateY(${bgParallax}px)` }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimmer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A] z-20" /> {/* Cinematic Edge */}
        <img
          src={heroBg}
          alt="AETHER Scenery"
          className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 h-full w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div
          className="max-w-[1216px] mx-auto w-full md:border-l border-white/10 pl-0 md:pl-16 pt-20 md:pt-52 lg:pt-40 pb-16 md:pb-0"
          style={{ transform: `translateY(${textParallax}px)` }}
        >
          {/* Massive Typography */}
          <h1 className="text-5xl md:text-[120px] font-extrabold tracking-normal text-white mb-2 ml-[-0.05em] animate-slide-in-right font-display leading-[0.9]">
            {lang === 'KR' ? '라이더스' : 'RIDEUS'}
          </h1>

          <h2 className="text-2xl md:text-6xl font-light text-white/90 mb-8 md:mb-12 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {lang === 'KR' ? (
              <>
                목적지에 맞게,<br />
                <span className="font-medium text-[var(--color-accent)]">이동을 선택하다.</span>
              </>
            ) : (
              <>
                SCULPTURAL<br />
                <span className="font-medium text-[var(--color-accent)]">MOBILITY.</span>
              </>
            )}
          </h2>

          <p className="max-w-xl text-base md:text-lg text-[#cbd5e1] mb-8 md:mb-16 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {lang === 'KR'
              ? "목적지를 정했다면, 나에게 딱 맞는 이동 서비스를 선택해보세요"
              : "We treat transportation as an art form. Experience the silent masterpiece of movement with our premium fleet and curated journeys."}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up mb-24 md:mb-0" style={{ animationDelay: '0.6s' }}>
            {/* White Button */}
            <a
              href="#inventory"
              className="w-full md:w-auto text-center px-8 md:px-12 py-4 md:py-5 bg-white text-black text-sm md:text-base font-bold tracking-widest uppercase hover:bg-slate-200 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#inventory');
                if (section) {
                  const offsetPosition = section.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10">{lang === 'KR' ? '카테고리 둘러보기' : 'Browse Categories'}</span>
            </a>
            {/* Outline Button */}
            <a
              href="#contact"
              className="w-full md:w-auto text-center px-8 md:px-12 py-4 md:py-5 border border-white/30 text-white text-sm md:text-base font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#contact');
                if (section) {
                  const offsetPosition = section.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10">{lang === 'KR' ? '문의하기' : 'Inquire'}</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Aligned to Content Grid */}
        <div className="absolute bottom-4 left-0 w-full pointer-events-none z-30 hidden md:block">
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
