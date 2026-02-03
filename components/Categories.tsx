import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Import Category Images
import imgAirport from '../assets/airport_cate.jpg';
import imgLeisure from '../assets/leisure_cate.jpg';
import imgShopping from '../assets/shopping_cate.jpg';
import imgThemePark from '../assets/Theme park_cate.jpg';
import imgEvent from '../assets/concerts_cate.jpg';
import imgLocal from '../assets/Suburban trips_cate.jpg';

const getCategories = (lang: 'KR' | 'EN') => [
  {
    title: lang === 'KR' ? "공항 이동" : "AIRPORT",
    sub: lang === 'KR' ? "글로벌 커넥션" : "Global Connection",
    desc: lang === 'KR' ? "공항과 도심을 잇는 가장 편안한 연결." : "Seamless transfer between major airports and city centers.",
    tags: lang === 'KR' ? ["셔틀", "프라이빗", "24시간"] : ["Shuttle", "Private", "24/7"],
    image: imgAirport,
    href: "/airport",
  },
  {
    title: lang === 'KR' ? "레저" : "LEISURE",
    sub: lang === 'KR' ? "시즌 탈출" : "Seasonal Escape",
    desc: lang === 'KR' ? "스키장, 골프장 이동도 장비 걱정 없이." : "Ski resorts & golf courses with spacious equipment storage.",
    tags: lang === 'KR' ? ["성수기 운행", "장비 적재", "리무진"] : ["Seasonal", "Equipment", "Comfort"],
    image: imgLeisure,
    href: "/leisure",
  },
  {
    title: lang === 'KR' ? "쇼핑 투어" : "SHOPPING",
    sub: lang === 'KR' ? "도심 속 힐링" : "Retail Therapy",
    desc: lang === 'KR' ? "아울렛, 백화점 쇼핑을 위한 여유로운 공간." : "Private transport to outlets and malls with cargo space.",
    tags: lang === 'KR' ? ["프라이빗", "대량 구매", "전국 운행"] : ["Private", "Cargo", "Nationwide"],
    image: imgShopping,
    href: "/shopping",
  },
  {
    title: lang === 'KR' ? "테마파크" : "THEME PARK",
    sub: lang === 'KR' ? "환상의 여정" : "Fantasy Ride",
    desc: lang === 'KR' ? "가족, 연인과 함께하는 문 앞 픽업 서비스." : "Door-to-door pickup for families and couples.",
    tags: lang === 'KR' ? ["가족 여행", "집앞 픽업", "주말 운행"] : ["Family", "Door-to-Door", "Weekend"],
    image: imgThemePark,
    href: "/theme-park",
  },
  {
    title: lang === 'KR' ? "공연/이벤트" : "EVENT",
    sub: lang === 'KR' ? "나이트 라이브" : "Night Live",
    desc: lang === 'KR' ? "콘서트, 페스티벌 이동을 위한 심야 전용 밴." : "Specialized transport for concerts and festivals.",
    tags: lang === 'KR' ? ["심야 운행", "단체 이동", "축제"] : ["Late Night", "Group", "Festival"],
    image: imgEvent,
    href: "/event",
  },
  {
    title: lang === 'KR' ? "근교·여행" : "SUBURBAN & TRAVEL",
    sub: lang === 'KR' ? "큐레이션 투어" : "Curated Journey",
    desc: lang === 'KR' ? "숨겨진 명소로 떠나는 일일 투어." : "Daily tours to major landmarks and hidden gems.",
    tags: lang === 'KR' ? ["당일 투어", "다국어 지원", "매일 출발"] : ["Tour", "Multi-lang", "Daily"],
    image: imgLocal,
    href: "/local-trip",
  },
];

const Categories: React.FC = () => {
  const { lang } = useLanguage();
  const categories = getCategories(lang);

  return (
    <section id="inventory" className="relative z-30 bg-white w-full py-24 md:py-32 overflow-hidden">
      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-[1216px] mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header - Industrial Style (Light) */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between text-center md:text-left">
          <div>
            <span className="block text-[#32a0f7] font-bold tracking-widest text-xs mb-4 uppercase">
              {lang === 'KR' ? '맞춤형 이동 서비스' : 'Curated Mobility'}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F1115] leading-[1.1]">
              {lang === 'KR'
                ? '지금 어디로 이동하시나요?'
                : <>JOURNEY<br />COLLECTION</>}
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm md:text-base mt-6 md:mt-0 font-light leading-relaxed">
            {lang === 'KR'
              ? "목적지에 맞는 이동 방식을 선택하세요. 라이더스는 모든 여정의 목적에 최적화된 차량과 서비스를 제공합니다."
              : "Select your destination type. Riders provides specialized fleets and services for every journey purpose."}
          </p>
        </div>

        {/* Grid Layout - Masonry Feel (Light) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.href}
              className="group relative bg-white border border-slate-200 overflow-hidden hover:z-10 hover:border-[#32a0f7] transition-all duration-500 flex flex-col min-h-[400px]"
            >
              {/* Background Image with Cinematic Reveal */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient Overlay for Text Visibility on Light/Dark Images - Maximum Strength */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500" />
              </div>

              {/* Top Meta */}
              <div className="relative z-10 p-10 flex justify-end items-start mb-12">
                <span className="text-xl font-bold text-white/50 tracking-[0.2em] group-hover:text-white transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto p-10">
                <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {cat.title}
                </h3>
                <span className="block text-xs font-bold text-[#32a0f7] uppercase tracking-widest mb-4">
                  {cat.sub}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-[#32a0f7] pl-4 mb-8 group-hover:text-white transition-colors">
                  {cat.desc}
                </p>

                <div className="flex items-center gap-2 text-white/70 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                  <span>{lang === 'KR' ? '자세히 보기' : 'View Service'}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
