import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-6 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative cursor-pointer group">
        <div className="absolute inset-0 rounded-[2.5rem] bg-black/5 blur-2xl transform translate-y-4 md:translate-y-8 z-0"></div>
        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden">
          <img
            src={heroBg}
            alt="Landscape"
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-black/0" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 z-10">
            <div className="max-w-4xl mx-auto text-left md:text-center">
              <h1 className="display-font text-6xl md:text-[10rem] font-extrabold text-white leading-[0.85] mb-4 md:mb-6 tracking-tighter drop-shadow-lg">
                T-RIDE
              </h1>
              <p className="text-xl md:text-3xl font-bold text-white/90 mb-10 tracking-wide drop-shadow-md">
                목적지에 맞게, 이동을 선택하다
              </p>

              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4">
                <button className="bg-black text-white px-8 md:px-10 py-4 rounded-[14px] text-base font-bold tracking-tight hover:bg-slate-900 transition-all shadow-lg border border-gray-600/50">
                  카테고리 둘러보기
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 md:px-10 py-4 rounded-[14px] text-base font-bold tracking-tight hover:bg-white/20 transition-all shadow-sm">
                  고객센터
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 hidden md:block">
            <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase origin-bottom-right -rotate-90 block">Integrated Mobility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
