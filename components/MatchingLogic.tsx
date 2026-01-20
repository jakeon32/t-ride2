
import React from 'react';

const MatchingLogic: React.FC = () => {
  const comparisonData = [
    {
      type: "셔틀 (버스)",
      description: "노선·정류장 기반, 시간표에 따라 운행",
      icon: (
        <svg className="w-6 h-6 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: [
        "정해진 시간표",
        "주요 정류장 경유",
        "경제적인 가격",
        "단체 이용 가능"
      ]
    },
    {
      type: "프라이빗 (전용 밴)",
      description: "원하는 시간과 동선으로 단독 이동",
      icon: (
        <svg className="w-6 h-6 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1h-1m-4-14H5a1 1 0 00-1 1v3a1 1 0 001 1h9z" />
        </svg>
      ),
      features: [
        "시간 자유 선택",
        "픽업/드랍 맞춤",
        "짐·유아 동반 편리",
        "경유지 추가 가능"
      ]
    }
  ];

  return (
    <section id="matching" className="py-20 md:pt-48 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="flex items-center justify-center mb-2">
            <span className="bg-[#f1f5f9] text-[#475569] text-[11px] md:text-[12px] font-bold px-3 py-1 rounded">
              서비스 타입
            </span>
          </div>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e293b] leading-tight">
            셔틀 <span className="text-slate-300">vs</span> 프라이빗
          </h2>
          <p className="text-[#64748b] text-base md:text-lg font-medium px-4">목적에 따라 최적의 이동 방식을 선택하세요</p>
          <div className="w-12 md:w-16 h-1 bg-blue-600 mx-auto mt-4 md:mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {comparisonData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-slate-100 card-shadow hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5 md:gap-6 mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1e293b] mb-1 md:mb-2">{item.type}</h3>
                  <p className="text-sm md:text-base text-[#64748b] font-medium leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-6">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[12px] md:text-sm font-bold text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchingLogic;
