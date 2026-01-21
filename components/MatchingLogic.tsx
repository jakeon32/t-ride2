
import React from 'react';

const MatchingLogic: React.FC = () => {
  const pastelColors = [
    'text-slate-300',
    'text-rose-200',
    'text-sky-200',
    'text-amber-200',
    'text-emerald-200',
    'text-violet-200',
  ];

  const [colorIndex, setColorIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % pastelColors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const comparisonData = [
    {
      type: "셔틀 (버스)",
      description: "노선·정류장 기반, 시간표에 따라 운행",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Bus Icon - Lucide */}
          <path d="M8 6v6" />
          <path d="M15 6v6" />
          <path d="M2 12h19.6" />
          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
          <circle cx="7" cy="18" r="2" />
          <path d="M9 18h5" />
          <circle cx="16" cy="18" r="2" />
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
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Car Icon - Lucide */}
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
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
    <section id="matching" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="flex items-center justify-center mb-2">
            <span className="bg-[#f1f5f9] text-[#475569] text-[11px] md:text-[12px] font-bold px-3 py-1 rounded">
              서비스 타입
            </span>
          </div>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e293b] leading-tight">
            셔틀 <span className={`inline-block translate-y-[-0.1em] transition-colors duration-700 ${pastelColors[colorIndex]}`}>vs</span> 프라이빗
          </h2>
          <p className="text-[#64748b] text-base md:text-lg font-medium px-4">목적에 따라 최적의 이동 방식을 선택하세요</p>
          <div className="w-12 md:w-16 h-1 bg-blue-600 mx-auto mt-4 md:mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {comparisonData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-slate-100 card-shadow hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 md:gap-5 mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mb-1">{item.type}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                      <svg className="w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-slate-600">{feature}</span>
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
