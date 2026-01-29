import React from 'react';

const destinations = [
  {
    title: "인천국제공항",
    desc: "공항 이동의 시작점",
    category: "공항",
    tags: ["셔틀", "프라이빗"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "리조트·골프",
    desc: "주말 레저 이동",
    category: "레저",
    tags: ["프라이빗"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "프리미엄 아울렛",
    desc: "쇼핑 왕복 이동",
    category: "쇼핑",
    tags: ["셔틀", "프라이빗"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "테마파크",
    desc: "가족/단체 인기",
    category: "테마파크",
    tags: ["셔틀"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "공연·이벤트",
    desc: "행사 당일 이동",
    category: "공연/이벤트",
    tags: ["셔틀"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "도심·근교",
    desc: "당일치기 추천",
    category: "레저",
    tags: ["프라이빗"],
    link: "상품 보기",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block bg-[var(--color-secondary)]/30 text-[var(--color-primary)] text-xs font-bold px-4 py-2 rounded-full mb-4">
            POPULAR SPOTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-3">많이 찾는 목적지</h2>
          <p className="text-slate-500 text-base md:text-lg font-medium">T-Ride 고객들이 가장 선호하는 핫플레이스를 확인하세요.</p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer border border-slate-100 hover:border-[var(--color-secondary)]"
            >
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[var(--color-primary)] shadow-sm">
                  {dest.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 tracking-tight">{dest.title}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">{dest.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6 md:mb-auto">
                  {dest.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 text-slate-500 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Link Style */}
                <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between text-slate-600 group-hover:text-[var(--color-accent)] transition-colors">
                  <span className="text-sm font-bold">{dest.link}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
