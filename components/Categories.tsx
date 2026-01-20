
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
    <section id="inventory" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="display-font text-3xl font-bold text-slate-900 mb-2">어디로 이동하시나요?</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm text-right hidden md:block break-keep">
            목적지에 가장 최적화된 모빌리티 인벤토리를 확인하세요.<br />
            T-Ride가 준비한 6가지 핵심 카테고리입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              <div className="absolute top-4 right-4">
                {cat.slots !== "운영 중" && (
                  <span className="bg-white/90 backdrop-blur text-[9px] font-bold px-2 py-1 rounded-full text-slate-900 uppercase tracking-wide">
                    {cat.slots}
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                <div className="flex items-center text-white/80 space-x-2 text-[10px]">
                  <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="font-semibold">4.8 (120)</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span>{cat.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
            전체 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
