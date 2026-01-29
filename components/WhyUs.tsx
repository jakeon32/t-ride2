import React from 'react';

const WhyUs: React.FC = () => {
  const points = [
    {
      title: "목적지 중심",
      desc: "가고 싶은 곳을 선택하면 이동 방법을 비교할 수 있어요.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "셔틀·프라이빗 통합",
      desc: "버스 셔틀과 전용 밴 서비스를 한곳에서 확인하세요.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "빠른 문의",
      desc: "문의 템플릿을 복사해 고객센터에 바로 전달할 수 있어요.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "파트너 운영사",
      desc: "검증된 운영사 파트너들의 상품을 안심하고 이용하세요.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section id="why" className="py-20 md:py-32 bg-white px-5 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1216px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div>
              <span className="inline-block bg-[var(--color-secondary)]/20 text-[var(--color-primary)] text-xs font-bold px-4 py-2 rounded-full mb-4">
                WHY T-RIDE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight tracking-tight break-keep">
                신뢰할 수 있는<br />
                이동의 기준
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed break-keep border-l-4 border-[var(--color-accent)] pl-6">
              복잡한 이동 과정을 가장 단순하고 합리적으로.<br />
              T-Ride는 이동 그 자체보다 '도착'의 설렘에 집중합니다.
            </p>

            <div className="flex space-x-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-1">12k+</span>
                <span className="text-sm text-slate-500 font-medium">누적 이용자</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-1">10yrs</span>
                <span className="text-sm text-slate-500 font-medium">운영 노하우</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-1">50+</span>
                <span className="text-sm text-slate-500 font-medium">제휴 목적지</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-5">
            {points.map((point, i) => (
              <div key={i} className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[var(--color-secondary)] hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-[var(--color-bg)] rounded-xl flex items-center justify-center shrink-0 mr-6 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{point.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
