
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[65vh] min-h-[500px] md:min-h-[550px] w-full overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1490131784822-b56a44862174?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Connected City" 
          className="w-full h-full object-cover object-center brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
      </div>

      {/* Powered by Badge */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 z-10 animate-fade-in">
        <div className="flex items-center space-x-2 opacity-80 group cursor-default">
          <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-sm flex items-center justify-center rotate-45">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-bold text-slate-800 uppercase tracking-widest leading-none">Powered by</span>
            <span className="text-[11px] md:text-xs font-black text-blue-900 tracking-tight">T-RiseUp</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center pt-12">
        <div className="animate-fade-in space-y-4 md:space-y-6">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 bg-blue-600/5 backdrop-blur-md border border-blue-600/10 rounded-full mb-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 animate-pulse mr-2" />
            <span className="text-blue-700 text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest">
              Integrated Mobility Hub
            </span>
          </div>
          
          <h1 className="display-font text-6xl md:text-[9rem] font-black text-slate-900 leading-[0.9] md:leading-[0.85] tracking-tighter mb-4">
            T-Ride<span className="text-blue-600">.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-700 text-base md:text-xl font-semibold tracking-tight break-keep leading-snug px-4">
              공항부터 테마파크까지, 당신의 모든 목적지를 <br className="hidden md:block" />
              <span className="text-blue-600 underline underline-offset-4 decoration-2">가장 스마트한 방식</span>으로 연결합니다.
            </p>
          </div>

          <div className="pt-6 md:pt-8 flex items-center justify-center space-x-3 md:space-x-4">
            <div className="h-[1px] w-8 md:w-12 bg-slate-300" />
            <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Direct to Destination</span>
            <div className="h-[1px] w-8 md:w-12 bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Decorative path lines */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,80 C150,120 350,20 600,80 C850,140 1050,40 1200,80" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
