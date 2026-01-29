import React from 'react';

const IntroSection: React.FC = () => {
    return (
        <section className="relative z-30 bg-white py-16 md:py-20 rounded-t-[2.5rem] -mt-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
            <div className="max-w-[1216px] mx-auto px-5 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span className="text-5xl">🚐</span>
                    </div>
                    {/* L2: Section Title */}
                    <h2 className="text-section-title text-[#1e293b] mb-6">
                        내 위치에서 공항까지, 가장 편안한 방법
                    </h2>
                    {/* L4-A: Body Large */}
                    <div className="text-body-lg text-slate-600 space-y-4">
                        <p>
                            T-Ride 공항 교통편 서비스는<br className="md:hidden" />
                            <span className="font-semibold text-[#1e293b]">100개 이상의 노선</span>으로 <span className="font-semibold text-[#1e293b]">24시간</span> 운영됩니다
                        </p>
                        <p>
                            대한민국 전역의 주요 도시 수백 개 픽업 지점에서<br className="md:hidden" />
                            탑승하여 공항 터미널로 바로 이동하세요
                        </p>
                        {/* L4-B: Body Regular */}
                        <p className="text-body text-slate-500">
                            주요 거점에서 15분 간격 출발로 대기 시간 최소화<br />
                            인천공항·김포공항에서 서울·경기까지 쾌적한 여정
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
