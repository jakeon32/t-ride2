import React from 'react';
import { uspItems } from '../../data/airportData';

const USPSection: React.FC = () => {
    return (
        <section className="relative z-30 bg-slate-50 py-16 md:py-20">
            <div className="max-w-[1216px] mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {uspItems.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-5">
                                {item.icon}
                            </div>
                            {/* L3-B: Card Title Large */}
                            <h3 className="text-card-title-lg text-[#1e293b] mb-4">{item.title}</h3>
                            {/* L4-B: Body Regular */}
                            <div className="text-body text-slate-600 space-y-1">
                                <p>{item.line1}</p>
                                <p>{item.line2}</p>
                                {/* L6-B: Caption */}
                                <p className="text-caption text-slate-400">{item.line3}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USPSection;
