import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MatchingLogic: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="matching" className="relative z-20 bg-transparent border-t border-white/10 py-24 md:py-32">
      <div className="max-w-[1216px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-1 text-xs font-bold tracking-[0.2em] mb-6 uppercase">
            {lang === 'KR' ? '서비스 비교' : 'Service Intelligence'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            SHUTTLE <span className="text-slate-600 font-light mx-2">VS</span> PRIVATE
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
            {lang === 'KR'
              ? "여정의 목적과 예산에 맞는 최적의 이동 방식을 선택하세요."
              : "Compare our service tiers to find the perfect match for your journey requirements."}
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10 bg-[#111]">

          {/* Shuttle Side */}
          <div className="group relative p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#161616] transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                <circle cx="7" cy="18" r="2" />
                <path d="M9 18h5" />
                <circle cx="16" cy="18" r="2" />
              </svg>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2">SHUTTLE</h3>
            <span className="block text-xs font-bold text-slate-500 tracking-widest uppercase mb-8">
              {lang === 'KR' ? '효율성 & 스탠다드' : 'Efficiency & Standard'}
            </span>

            <p className="text-slate-400 mb-10 leading-relaxed min-h-[3rem]">
              {lang === 'KR'
                ? "정해진 노선과 시간표에 따라 운행. 예측 가능한 스케줄과 합리적인 비용의 이동 수단입니다."
                : "Fixed schedule and route efficiency. Ideal for predictable, cost-effective group mobility."}
            </p>

            <ul className="space-y-4">
              {(lang === 'KR'
                ? ["정해진 시간 출발", "지정된 정류장", "합리적인 비용", "단체 이동 적합"]
                : ["Scheduled Departures", "Designated Stops", "Cost Efficient", "Group Friendly"]
              ).map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-slate-300 font-medium font-mono">
                  <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Private Side */}
          <div className="group relative p-12 md:p-16 hover:bg-[#161616] transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2">PRIVATE</h3>
            <span className="block text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-8">
              {lang === 'KR' ? '프리미엄 & 커스텀' : 'Premium & Custom'}
            </span>

            <p className="text-slate-400 mb-10 leading-relaxed min-h-[3rem]">
              {lang === 'KR'
                ? "원하는 시간, 원하는 장소로. 오직 당신만을 위한 단독 차량과 Door-to-Door VIP 서비스."
                : "Total freedom of time and route. Door-to-door VIP service for exclusive travel experiences."}
            </p>

            <ul className="space-y-4">
              {(lang === 'KR'
                ? ["자유로운 스케줄", "도어 투 도어", "VIP 의전 서비스", "최적 경로 이동"]
                : ["Flexible Schedule", "Door-to-Door", "VIP Service", "Custom Route"]
              ).map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-white font-medium font-mono">
                  <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MatchingLogic;
