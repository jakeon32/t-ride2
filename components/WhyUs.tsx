import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyUs: React.FC = () => {
  const { lang } = useLanguage();

  const points = [
    {
      title: lang === 'KR' ? "목적지 중심 설계" : "DESTINATION CENTRIC",
      desc: lang === 'KR' ? "당신의 목적지에 딱 맞는 이동 옵션을 제안합니다." : "Compare mobility options based on your precise destination.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: lang === 'KR' ? "하이브리드 플릿" : "HYBRID FLEET",
      desc: lang === 'KR' ? "셔틀과 프라이빗 밴의 장점만을 결합했습니다." : "Seamless integration of shuttle buses and private vans.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: lang === 'KR' ? "실시간 지원" : "INSTANT SUPPORT",
      desc: lang === 'KR' ? "즉각적인 문제 해결을 위한 전담 채널을 운영합니다." : "Direct communication channels for immediate assistance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: lang === 'KR' ? "검증된 파트너" : "VERIFIED PARTNERS",
      desc: lang === 'KR' ? "엄격한 기준을 통과한 프리미엄 운송 파트너와 함께합니다." : "Curated network of premium transport operators.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section id="why" className="py-24 md:py-32 bg-[#0F1115] md:bg-[#0F1115]/80 md:backdrop-blur-md relative overflow-hidden">
      {/* Background Decor - Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-[1216px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Content - Typography */}
          <div className="space-y-10">
            <div>
              <span className="text-[var(--color-accent)] font-bold tracking-widest text-xs mb-4 uppercase block">
                {lang === 'KR' ? '우리의 철학' : 'The Ethos'}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1]">
                {lang === 'KR' ? <>라이더스가 선택받는 이유</> : <>TRUST IN<br />MOTION</>}
              </h2>
            </div>
            <p className="text-slate-400 text-lg font-light leading-relaxed border-l border-[var(--color-accent)] pl-6">
              {lang === 'KR'
                ? "가장 합리적이고 편리한 목적지 도달, 라이더스가 제공하는 차별화된 이동 경험을 만나보세요."
                : "We simplify complexity. Riders focuses on the anticipation of arrival, ensuring the journey itself is as flawless as the destination."}
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { val: "12k+", label: lang === 'KR' ? "이용 고객" : "Users" },
                { val: "10yrs", label: lang === 'KR' ? "운영 경력" : "Experience" },
                { val: "50+", label: lang === 'KR' ? "파트너사" : "Partners" }
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-3xl font-display font-bold text-white mb-1">{stat.val}</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards - Minimal List */}
          <div className="space-y-1">
            {points.map((point, i) => (
              <div key={i} className="group flex items-start p-8 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 mr-6 text-slate-400 group-hover:text-white group-hover:border-[var(--color-accent)] transition-all">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors uppercase tracking-wide">
                    {point.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed group-hover:text-slate-300">
                    {point.desc}
                  </p>
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
