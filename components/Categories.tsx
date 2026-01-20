
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
    <section id="inventory" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-10 text-left">
          <span className="bg-[#f1f5f9] text-[#475569] text-[11px] md:text-[12px] font-bold px-3 py-1 rounded inline-block mb-3">
            목적지 카테고리
          </span>
          <h2 className="display-font text-3xl font-bold text-slate-900 mb-2">어디로 이동하시나요?</h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            목적지 유형을 선택하면 관련 상품을 확인할 수 있어요
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 shadow-sm">
                  {cat.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-white/80 text-xs md:text-sm line-clamp-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section >
  );
};

export default Categories;
