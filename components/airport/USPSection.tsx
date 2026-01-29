import React from 'react';
import { getUspItems } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const USPSection: React.FC = () => {
    const { lang } = useLanguage();
    const uspItems = getUspItems(lang);

    return (
        <section className="relative z-30 bg-transparent py-20 md:py-32 border-t border-white/5">
            <div className="max-w-[1216px] mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {uspItems.map((item, idx) => (
                        <div key={idx} className="group bg-[#111] p-10 border border-white/5 hover:border-[var(--color-accent)] transition-all duration-300">
                            <div className="mb-8 text-white/20 group-hover:text-[var(--color-accent)] transition-all transform group-hover:scale-110 duration-500 ease-out">
                                {/* Ensure icon is visible by cloning or wrapping if it's an element, but here assumed to be SVG element or similar. 
                                    Since we can't easily cloneElement without React check, we apply styles to wrapper div. */}
                                <div className="w-12 h-12 [&>svg]:w-full [&>svg]:h-full">
                                    {item.icon}
                                </div>
                            </div>

                            {/* L3-B: Card Title Large */}
                            <h3 className="text-xl font-display font-bold text-white mb-6 tracking-wide uppercase">
                                {item.title}
                            </h3>

                            {/* L4-B: Body Regular */}
                            <div className="text-slate-500 space-y-1 font-light leading-relaxed group-hover:text-slate-400 transition-colors">
                                <p>{item.line1}</p>
                                <p>{item.line2}</p>
                                {/* L6-B: Caption */}
                                <p className="text-xs text-[var(--color-accent)] font-bold pt-4 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.line3}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USPSection;
