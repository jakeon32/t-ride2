
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
    <section id="matching" className="relative z-20 -mt-10 md:-mt-20 pt-20 md:pt-24 pb-20 md:pb-24 bg-white shadow-sm border-t border-slate-200 rounded-t-[2.5rem] md:rounded-t-[4rem]">
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6">
          <div className="flex items-center justify-center mb-2">
            <span className="bg-[var(--color-secondary)]/20 text-[var(--color-primary)] text-xs font-bold px-4 py-1.5 rounded-full">
              SERVICE TYPE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight leading-tight font-['Montserrat']">
            셔틀 <span className={`inline-block translate-y-[-0.1em] transition-colors duration-700 ${pastelColors[colorIndex]}`}>vs</span> 프라이빗
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium px-4">목적에 따라 최적의 이동 방식을 선택하세요</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {comparisonData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-12 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex items-start gap-5 md:gap-6 mb-8 md:mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--color-bg)] rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[var(--color-secondary)]/20 transition-colors duration-300">
                  <div className="text-[var(--color-primary)] transform group-hover:scale-110 transition-transform duration-300">
                    {/* Re-applying color class to icon if needed, but assuming icon has currentColor */}
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10 text-[var(--color-primary)]" })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-2">{item.type}</h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-bg)] flex items-center justify-center border border-slate-200">
                      <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[var(--color-primary)] transition-colors">{feature}</span>
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
