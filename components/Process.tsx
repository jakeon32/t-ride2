import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Container from './shared/Container';

const getDestinations = (lang: 'KR' | 'EN') => [
  {
    title: lang === 'KR' ? "인천국제공항" : "INCHEON INT'L AIRPORT",
    desc: lang === 'KR' ? "글로벌 여정의 시작점." : "The starting point of your global journey.",
    category: lang === 'KR' ? "공항" : "AIRPORT",
    tags: lang === 'KR' ? ["셔틀", "프라이빗"] : ["Shuttle", "Private"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: lang === 'KR' ? "럭셔리 리조트 & 골프" : "LUXURY RESORT & GOLF",
    desc: lang === 'KR' ? "프리미엄 힐링을 위한 주말 레저." : "Weekend leisure with premium comfort.",
    category: lang === 'KR' ? "레저" : "LEISURE",
    tags: lang === 'KR' ? ["프라이빗"] : ["Private"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: lang === 'KR' ? "프리미엄 아울렛" : "PREMIUM OUTLETS",
    desc: lang === 'KR' ? "여유로운 공간으로 즐기는 쇼핑 투어." : "Exclusive shopping trips with ample cargo.",
    category: lang === 'KR' ? "쇼핑" : "SHOPPING",
    tags: lang === 'KR' ? ["셔틀", "프라이빗"] : ["Shuttle", "Private"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: lang === 'KR' ? "테마파크" : "THEME PARKS",
    desc: lang === 'KR' ? "가족과 함께하는 마법 같은 순간." : "Magical moments for families and groups.",
    category: lang === 'KR' ? "테마파크" : "THEME PARK",
    tags: lang === 'KR' ? ["셔틀"] : ["Shuttle"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: lang === 'KR' ? "공연 & 이벤트" : "CONCERT & EVENT",
    desc: lang === 'KR' ? "공연장, 페스티벌 현장으로 직행." : "Direct transport to the heart of the action.",
    category: lang === 'KR' ? "이벤트" : "EVENT",
    tags: lang === 'KR' ? ["셔틀"] : ["Shuttle"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: lang === 'KR' ? "도심 투어 & 랜드마크" : "CITY & LANDMARKS",
    desc: lang === 'KR' ? "엄선된 명소로 떠나는 일일 투어." : "Curated day trips to iconic spots.",
    category: lang === 'KR' ? "로컬투어" : "LOCAL TRIP",
    tags: lang === 'KR' ? ["프라이빗"] : ["Private"],
    link: lang === 'KR' ? "서비스 보기" : "View Service",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
  }
];

const Process: React.FC = () => {
  const { lang } = useLanguage();
  const destinations = getDestinations(lang);

  return (
    <section id="process" className="relative z-20 py-24 md:py-32 bg-[#F8F9FA] border-t border-transparent">
      <Container>

        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-xs mb-4 uppercase">
            {lang === 'KR' ? '엄선된 여행지' : 'Curated Destinations'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-[1.1]">
            {lang === 'KR' ? '인기 목적지' : <>POPULAR<br />DESTINATIONS</>}
          </h2>
          <p className="text-slate-600 text-lg font-light">
            {lang === 'KR' ? '자주 이용되는 목적지를 확인해보세요' : 'Check out our frequently used destinations'}
          </p>
        </div>

        {/* Destination Grid - Cinematic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group relative h-[200px] md:h-[400px] overflow-hidden bg-[#111] border border-slate-200 hover:border-[#32a0f7] transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start top-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
                  <span className="bg-[var(--color-accent)] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    {dest.category}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                  {dest.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {dest.desc}
                </p>

                <div className="w-full border-t border-white/20 pt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {dest.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-white/60 uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
