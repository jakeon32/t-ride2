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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/0" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 z-10">
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl max-w-4xl mx-auto text-left md:text-center">
              <h1 className="display-font text-3xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 break-keep">
                목적지 기반 이동 통합 솔루션, <br className="hidden md:block" /> T-Ride
              </h1>
              <p className="text-slate-800 text-sm md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed break-keep">
                목적지와 목적에 맞게 셔틀버스와 프라이빗 이동을 선택해보세요.
              </p>

              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4">
                <button className="bg-[#151b26] text-white px-8 md:px-10 py-4 rounded-[14px] text-base font-bold tracking-tight hover:bg-slate-800 transition-all shadow-lg">
                  카테고리 둘러보기
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 md:px-10 py-4 rounded-[14px] text-base font-bold tracking-tight hover:bg-slate-50 transition-all shadow-sm">
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
