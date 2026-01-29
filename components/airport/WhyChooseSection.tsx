import React from 'react';
import { whyChooseItems } from '../../data/airportData';

const WhyChooseSection: React.FC = () => {
    return (
        <section className="relative z-30 bg-white py-16 md:py-24">
            <div className="max-w-[1216px] mx-auto px-5 md:px-8">
                <div className="text-center mb-12">
                    {/* L2: Section Title */}
                    <h2 className="text-section-title text-[#1e293b] mb-4">
                        T-Ride 공항 셔틀을 선택해야 하는 이유
                    </h2>
                    {/* L4-B: Body Regular */}
                    <p className="text-body text-slate-500">
                        이제 공항 이동은 더 이상 스트레스가 아닙니다
                    </p>
                </div>

                <div className="space-y-6">
                    {whyChooseItems.map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                ✓
                            </div>
                            <div>
                                {/* L3-C: Card Title Medium */}
                                <h3 className="text-card-title text-[#1e293b] mb-1">{item.title}</h3>
                                {/* L4-B: Body Regular */}
                                <p className="text-body text-slate-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* REMOVED: T-Ride가 여행의 시작과 끝을 완벽하게 책임집니다 text */}
            </div>
        </section>
    );
};

export default WhyChooseSection;
