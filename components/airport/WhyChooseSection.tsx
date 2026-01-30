import React from 'react';
import { getWhyChooseItems } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const WhyChooseSection: React.FC = () => {
    const { lang } = useLanguage();
    const whyChooseItems = getWhyChooseItems(lang);

    return (
        <section className="relative z-30 bg-transparent py-20 md:py-24 border-t border-white/5">
            <div className="max-w-[1216px] mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: Heading */}
                    <div className="relative md:sticky top-0 md:top-24">
                        <span className="text-white/40 font-bold tracking-widest text-xs mb-6 uppercase block">
                            {lang === 'KR' ? '서비스 기준' : 'Service Standards'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                            {lang === 'KR' ? 'WHY CHOOSE' : <>WHY<br />CHOOSE</>}
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 border-l border-[var(--color-accent)] pl-6">
                            {lang === 'KR'
                                ? "우리는 공항 이동의 불편함을 없앱니다. 정확성, 편안함, 신뢰는 T-RIDE 서비스의 기본입니다."
                                : "We redefine airport mobility by removing the friction. Precision, comfort, and reliability are not just features, they are our baseline."}
                        </p>

                        <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
                    </div>

                    {/* Right: List */}
                    <div className="space-y-4">
                        {whyChooseItems.map((item, idx) => (
                            <div key={idx} className="group flex items-start p-6 md:p-8 bg-[#111] border border-white/5 hover:border-[var(--color-accent)] hover:bg-[#161616] transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 rounded-none border border-white/10 text-[var(--color-accent)] flex items-center justify-center font-mono font-bold text-xl mr-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
