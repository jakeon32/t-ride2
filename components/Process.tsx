
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
    <section id="process" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <span className="inline-block bg-[#f1f5f9] text-[#475569] text-[11px] md:text-[12px] font-bold px-3 py-1 rounded mb-3 md:mb-4">
            인기 목적지
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] mb-2">많이 찾는 목적지</h2>
          <p className="text-[#64748b] text-sm md:text-base font-medium">자주 이용되는 목적지를 확인해보세요</p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-[#f8fafc] border-b border-[#f1f5f9]">
                <img 
                  src={dest.img} 
                  alt={dest.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-[#1e293b] tracking-tight">{dest.title}</h3>
                  <span className="bg-[#f8fafc] border border-[#e2e8f0] text-[#64748b] text-[10px] font-bold px-2 py-0.5 rounded">
                    {dest.category}
                  </span>
                </div>
                
                <p className="text-[#64748b] text-xs md:text-sm mb-5 md:mb-6 font-medium leading-relaxed">{dest.desc}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-6 md:mb-8">
                  {dest.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-[#f1f5f9] text-[#64748b] text-[10px] font-bold px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Link Style */}
                <div className="mt-auto pt-4 md:pt-5 border-t border-[#f1f5f9] flex items-center text-[#64748b] text-xs md:text-sm font-semibold group-hover:text-[#1e293b] transition-colors">
                  <span className="mr-1">→</span>
                  <span>{dest.link}</span>
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
