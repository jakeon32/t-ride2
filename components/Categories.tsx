
import React from 'react';

const categories = [
  { title: "공항", desc: "주요 공항 픽업·샌딩 서비스", slots: "운영 중", type: "Shuttle/Private", img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop" },
  { title: "레저", desc: "골프, 스키장 등 맞춤 차량", slots: "인기", type: "Private Only", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1000&auto=format&fit=crop" },
  { title: "쇼핑", desc: "아울렛 및 쇼핑몰 이동 서비스", slots: "운영 중", type: "Private Only", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop" },
  { title: "테마파크", desc: "에버랜드, 롯데월드 전용 노선", slots: "매진임박", type: "Shuttle Only", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop" },
  { title: "공연/이벤트", desc: "콘서트, 페스티벌 특화 모듈", slots: "New", type: "Event Shuttle", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" },
  { title: "근교·여행", desc: "주요 관광지 및 명소 연결", slots: "추천", type: "Shuttle/Private", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop" },
];

const Categories: React.FC = () => {
  return (
    <section id="inventory" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-5">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 inline-block px-3 py-1 border border-slate-200 rounded-full bg-white">Inventory Categories</span>
            <h2 className="display-font text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 break-keep">어디로 이동하시나요?</h2>
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed break-keep">
              목적지에 가장 최적화된 모빌리티 인벤토리를 확인하세요. <br className="hidden md:block" />
              T-Ride가 준비한 6가지 핵심 카테고리입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden card-shadow border border-slate-100 flex flex-col h-full cursor-pointer hover:border-blue-200 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] md:text-[10px] font-extrabold text-slate-900 shadow-sm border border-white/50 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                  {cat.slots}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight mb-1.5">{cat.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">{cat.desc}</p>
                </div>
                
                <div className="mt-auto pt-5 md:pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[9px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Available Options</span>
                  <span className="px-3 py-1 rounded-lg text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest bg-slate-50 text-slate-700 border border-slate-100">
                    {cat.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
