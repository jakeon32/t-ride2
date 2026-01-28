import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "공항",
    desc: "전국 주요 공항 ↔ 도심/호텔 연결",
    tags: ["셔틀", "프라이빗", "24시간 운영"],
    icon: "✈️",
    href: "/airport",
  },
  {
    title: "레저",
    desc: "스키장, 골프장 등 레저시설 이동",
    tags: ["시즌 운영", "장비 적재", "합리적 가격"],
    icon: "⛷️",
    href: "/leisure",
  },
  {
    title: "쇼핑",
    desc: "아울렛 및 쇼핑몰 이동 서비스",
    tags: ["프라이빗", "짐 보관", "전국 가능"],
    icon: "🛍️",
    href: "/shopping",
  },
  {
    title: "테마파크",
    desc: "가족/연인 단위 맞춤형 픽업 서비스",
    tags: ["가족 여행", "도어 투 도어", "주말 운영"],
    icon: "🎢",
    href: "/theme-park",
  },
  {
    title: "공연/이벤트",
    desc: "콘서트, 페스티벌 특화 이동 서비스",
    tags: ["이벤트 셔틀", "단체 가능", "심야 운행"],
    icon: "🎤",
    href: "/event",
  },
  {
    title: "근교 여행",
    desc: "주요 관광지 및 명소 연결",
    tags: ["관광 셔틀", "다국어 지원", "일일 투어"],
    icon: "🏨",
    href: "/local-trip",
  },
];

const Categories: React.FC = () => {
  return (
    <section id="inventory" className="relative z-30 bg-slate-50 w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-3 tracking-tight">
            어디로 가시나요?
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium">
            T-ride가 연결하는 대표적인 목적지 카테고리입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.href}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full"
            >
              <div className="text-4xl mb-6">{cat.icon}</div>

              <h3 className="text-2xl font-bold text-[#111] mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">{cat.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {cat.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full">
                <div className="w-full py-3 rounded-xl border border-blue-500 text-blue-500 font-bold text-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  서비스 보기
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
