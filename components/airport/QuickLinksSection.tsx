import React from 'react';
import { getQuickLinks } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const QuickLinksSection: React.FC = () => {
    const { lang } = useLanguage();
    const links = getQuickLinks(lang);

    return (
        <section className="relative z-30 bg-transparent py-16 md:py-20 border-t border-white/5">
            <div className="max-w-[1216px] mx-auto px-6 md:px-8">
                {/* Section Title */}
                <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
                    {lang === 'KR' ? '공항 이동, 더 쉽게 준비하세요' : 'Prepare Your Journey Easily'}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {links.map((link, idx) => (
                        <button key={idx} className="flex flex-col items-center p-8 bg-[#111] border border-white/10 hover:border-[var(--color-accent)] hover:bg-[#161616] transition-all duration-300 group rounded-none">
                            <span className="text-3xl mb-4 group-hover:scale-110 transition-transform group-hover:text-[var(--color-accent)]">{link.icon}</span>
                            {/* Button Text */}
                            <span className="text-sm font-bold text-white mb-2 font-display uppercase tracking-wide">{link.title}</span>
                            {/* Caption */}
                            <span className="text-xs text-slate-500 font-light text-center leading-relaxed h-8 flex items-center">{link.desc}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinksSection;
