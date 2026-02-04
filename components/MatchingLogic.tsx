import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MatchingLogic: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="matching" className="relative z-20 mt-screen py-12 md:py-24 lg:py-32 overflow-hidden bg-[#0F1115] md:bg-[#0F1115]/80 md:backdrop-blur-md border-t border-slate-900">
      <div className="max-w-[1216px] mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block border border-[#2E5CFF] text-[#2E5CFF] px-3 py-1 text-xs font-bold tracking-[0.2em] mb-4 md:mb-6 uppercase">
            {lang === 'KR' ? '서비스 비교' : 'Service Intelligence'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            <span className="block">SHUTTLE</span>
            <span className="text-slate-600 font-light block text-lg md:text-2xl my-1">VS</span>
            <span className="block">PRIVATE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            {lang === 'KR'
              ? <>여정의 목적과 예산에 맞는<br />최적의 이동 방식을 선택하세요.</>
              : <>Find the perfect service tier<br />for your journey needs.</>}
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 border-0 md:border md:border-slate-800 md:shadow-2xl md:rounded-lg overflow-hidden">

          {/* Shuttle Side - Blue Theme */}
          {/* Shuttle Side - Dark Theme with Blue Accents */}
          <div className="group relative p-4 md:p-12 bg-[#282c35] border border-slate-800 rounded-lg md:border-0 md:rounded-none md:border-r md:border-white/5 transition-transform duration-500 overflow-hidden">
            {/* Background Decoration - Bus Icon */}
            <div className="absolute -right-12 -bottom-12 opacity-[0.05] transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-80 h-80 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white">{lang === 'KR' ? '셔틀' : 'SHUTTLE'}</h3>
              </div>

              <span className="inline-block bg-white/5 backdrop-blur-md text-[#9abdff] text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase mb-8 border border-white/10">
                {lang === 'KR' ? '효율성 & 스탠다드' : 'Efficiency & Standard'}
              </span>

              <p className="text-slate-400 mb-6 md:mb-10 leading-relaxed min-h-[3rem] text-sm md:text-lg font-light">
                {lang === 'KR'
                  ? "정해진 노선과 시간표에 따라 운행. 예측 가능한 스케줄과 합리적인 비용의 이동 수단입니다."
                  : "Fixed schedule and route efficiency. Ideal for predictable, cost-effective group mobility."}
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                {(lang === 'KR'
                  ? ["정해진 시간 출발", "지정된 정류장", "합리적인 비용", "단체 이동 적합"]
                  : ["Scheduled Departures", "Designated Stops", "Cost Efficient", "Group Friendly"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-300 font-medium">
                    <div className="w-2 h-2 bg-[#2E5CFF] rounded-full shadow-[0_0_10px_rgba(46,92,255,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Private Side - White Theme */}
          {/* Private Side - Dark Theme */}
          <div className="group relative p-4 md:p-12 bg-[#282c35] border border-slate-800 rounded-lg md:border-0 md:rounded-none transition-colors duration-500 overflow-hidden">
            {/* Background Decoration - Sedan Icon */}
            <div className="absolute -right-12 -bottom-12 opacity-[0.05] transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-80 h-80 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white">{lang === 'KR' ? '프라이빗' : 'PRIVATE'}</h3>
              </div>

              <span className="inline-block bg-white/5 text-[#9abdff] text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase mb-8 border border-white/10">
                {lang === 'KR' ? '프리미엄 & 커스텀' : 'Premium & Custom'}
              </span>

              <p className="text-slate-400 mb-6 md:mb-10 leading-relaxed min-h-[3rem] text-sm md:text-lg font-light">
                {lang === 'KR'
                  ? "원하는 시간, 원하는 장소로. 오직 당신만을 위한 단독 차량과 Door-to-Door VIP 서비스."
                  : "Total freedom of time and route. Door-to-door VIP service for exclusive travel experiences."}
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                {(lang === 'KR'
                  ? ["자유로운 스케줄", "도어 투 도어", "VIP 의전 서비스", "최적 경로 이동"]
                  : ["Flexible Schedule", "Door-to-Door", "VIP Service", "Custom Route"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-300 font-medium">
                    <div className="w-2 h-2 bg-[#2E5CFF] rounded-full shadow-[0_0_10px_#2E5CFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MatchingLogic;
