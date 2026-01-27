
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "공항",
    desc: "전국 주요 공항 ↔ 도심/호텔 연결",
    icon: "✈️",
    tags: ["셔틀", "프라이빗", "24시간 운영"],
    href: "/airport"
  },
  {
    title: "레저",
    desc: "스키장, 골프장 등 레저시설 이동",
    icon: "⛷️",
    tags: ["시즌 운영", "장비 적재", "합리적 가격"],
    href: "/leisure"
  },
  {
    title: "쇼핑",
    desc: "아울렛 및 쇼핑몰 이동 서비스",
    icon: "🛍️",
    tags: ["프라이빗", "짐 보관", "전국 가능"],
    href: "/shopping"
  },
  {
    title: "테마파크",
    desc: "가족/연인 단위 맞춤형 픽업 서비스",
    icon: "🎢",
    tags: ["가족 여행", "도어 투 도어", "주말 운영"],
    href: "/theme-park"
  },
  {
    title: "공연/이벤트",
    desc: "콘서트, 페스티벌 특화 이동 서비스",
    icon: "🎤",
    tags: ["이벤트 셔틀", "단체 가능", "심야 운행"],
    href: "/event"
  },
  {
    title: "근교·여행",
    desc: "주요 관광지 및 명소 연결",
    icon: "🏨",
    tags: ["관광 셔틀", "다국어 지원", "일일 투어"],
    href: "/local-trip"
  },
];

const Categories: React.FC = () => {
  return (
    <section id="inventory" className="py-16 md:py-24 bg-white px-5 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 md:mb-12">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-slate-900 mb-2">어디로 가시나요?</h2>
          <p className="text-slate-500 text-sm md:text-base">
            T-ride가 연결하는 대표적인 목적지 카테고리입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat, i) => {
            const isInternal = cat.href.startsWith('/');
            const Wrapper = isInternal ? Link : 'a';
            const wrapperProps = isInternal ? { to: cat.href } : { href: cat.href };

            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer group block"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-500 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-200 text-center">
                  서비스 보기
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;
