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
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl max-w-4xl mx-auto">
              <h1 className="display-font text-[5rem] md:text-[9rem] font-bold text-slate-900 uppercase tracking-tighter leading-[0.85] drop-shadow-sm opacity-90 mb-4">
                T-Ride
              </h1>
              <p className="text-slate-800 text-sm md:text-lg font-bold max-w-xl mx-auto mb-8 leading-relaxed break-keep">
                공항부터 테마파크까지, 당신의 모든 목적지를 <br className="hidden md:block" /> 가장 스마트한 방식으로 연결합니다.
              </p>

              <div className="flex items-center justify-center space-x-4">
                <button className="bg-slate-900 text-white px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  여행 시작하기
                </button>
                <button className="bg-white/80 backdrop-blur-md border border-white/50 text-slate-900 px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-white transition-all">
                  목적지 둘러보기
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
