
import React from 'react';

const WhyUs: React.FC = () => {
  const points = [
    { title: "목적지 중심", desc: "가고 싶은 곳을 선택하면 이동 방법을 비교할 수 있어요." },
    { title: "셔틀·프라이빗 통합", desc: "버스 셔틀과 전용 밴 서비스를 한곳에서 확인하세요." },
    { title: "빠른 문의", desc: "문의 템플릿을 복사해 고객센터에 바로 전달할 수 있어요." },
    { title: "파트너 운영사", desc: "검증된 운영사 파트너들의 상품을 안심하고 이용하세요." },
  ];

  return (
    <section id="why" className="py-20 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 px-3 py-1 bg-blue-50 rounded-lg inline-block">01 Why T-Ride?</span>
              <h2 className="display-font text-4xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-tight md:leading-[1.05] break-keep">
                T-Ride를 <br className="hidden md:block" />선택해야 하는 이유
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-sm break-keep">
                가장 합리적이고 편리한 목적지 도달, <br className="hidden md:block" />
                T-Ride가 선택받는 4가지 이유입니다.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {points.map((point, i) => (
                <div key={i} className="flex items-start space-x-4 md:space-x-5 group cursor-default">
                  <div className="w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors shrink-0">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{point.title}</h4>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed break-keep">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 relative pt-8 md:pt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              <div className="pt-12 md:pt-24">
                <div className="rounded-3xl md:rounded-[3rem] overflow-hidden card-shadow border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" className="w-full object-cover h-[300px] md:h-[500px]" alt="Travel" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="rounded-3xl md:rounded-[3rem] overflow-hidden card-shadow border border-slate-100 aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2187&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office" />
                </div>
                <div className="rounded-3xl md:rounded-[3rem] overflow-hidden card-shadow border border-slate-100 aspect-square">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Leisure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
