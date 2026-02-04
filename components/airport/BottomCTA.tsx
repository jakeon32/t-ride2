import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const BottomCTA: React.FC = () => {
    const { lang } = useLanguage();

    return (
        <section className="relative z-10 bg-transparent py-24 px-6 md:px-8 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                {/* L6-A: Micro Text */}
                <p className="text-[var(--color-accent)] font-bold tracking-widest text-xs uppercase mb-4">
                    {lang === 'KR' ? '교통 X 여행 No.1 플랫폼' : 'Mobility X Travel Platform'}
                </p>
                {/* L1: Hero Heading (Display) */}
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                    RIDEUS
                </h2>
                {/* L4-A: Body Large */}
                <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    {lang === 'KR'
                        ? "공항 이동의 새로운 기준, 라이더스와 함께 여행을 시작하세요."
                        : "Start your journey with Rideus, the new standard in airport mobility."}
                </p>
                {/* L5-D: Button Text */}
                <button className="px-10 py-5 bg-white text-black font-bold tracking-widest uppercase hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300">
                    {lang === 'KR' ? '지금 바로 예약하기' : 'Book Now'}
                </button>
            </div>
        </section>
    );
};

export default BottomCTA;
