import React from 'react';
import { quickLinks } from '../../data/airportData';

const QuickLinksSection: React.FC = () => {
    return (
        <section className="relative z-30 bg-slate-50 py-16 md:py-20 px-5 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* L3-A: Section Subtitle */}
                <h2 className="text-section-subtitle text-[#1e293b] text-center mb-10">
                    공항 이동, 더 쉽게 준비하세요
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickLinks.map((link, idx) => (
                        <button key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
                            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                            {/* L5-D: Button Text */}
                            <span className="text-btn text-[#1e293b] mb-1">{link.title}</span>
                            {/* L6-B: Caption */}
                            <span className="text-caption text-slate-500">{link.desc}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinksSection;
