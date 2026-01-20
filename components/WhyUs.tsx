
import React from 'react';

const WhyUs: React.FC = () => {
  const points = [
    { title: "목적지 중심", desc: "가고 싶은 곳을 선택하면 이동 방법을 비교할 수 있어요." },
    { title: "셔틀·프라이빗 통합", desc: "버스 셔틀과 전용 밴 서비스를 한곳에서 확인하세요." },
    { title: "빠른 문의", desc: "문의 템플릿을 복사해 고객센터에 바로 전달할 수 있어요." },
    { title: "파트너 운영사", desc: "검증된 운영사 파트너들의 상품을 안심하고 이용하세요." },
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="display-font text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight break-keep">
              T-Ride를 선택해야 하는<br className="hidden md:block" /> 4가지 이유
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
              가장 합리적이고 편리한 목적지 도달, T-Ride가 제공하는 차별화된 이동 경험을 만나보세요.
            </p>

            <div className="flex space-x-4 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-slate-900 uppercase">12k+</span>
                <span className="text-[9px] text-slate-500">누적 이용자</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-slate-900 uppercase">10yrs</span>
                <span className="text-[9px] text-slate-500">운영 노하우</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-slate-900 uppercase">50+</span>
                <span className="text-[9px] text-slate-500">제휴 목적지</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-center p-6 bg-[#93A2B7] rounded-3xl hover:bg-[#8392A7] transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm mr-6">
                  <svg className="w-8 h-8 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={i === 0 ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" : i === 1 ? "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" : "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-xs text-white/80 font-medium leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
