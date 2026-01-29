import React from 'react';
import skiBg from '../../assets/ski_banner_img.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

const SkiBanner: React.FC = () => {
    const { lang } = useLanguage();

    return (
        <section className="relative z-30 py-0 bg-transparent overflow-hidden">
            <div className="relative w-full h-[600px] overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                    src={skiBg}
                    alt="Ski Resort"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                />

                {/* Cinematic Overlay - Darker Right-to-Left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/75 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

                {/* Ambient Light Glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                {/* Grid Overlay Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                {/* Content Container - Constrained Width */}
                <div className="relative z-10 max-w-[1216px] mx-auto h-full px-6 md:px-8">
                    <div className="w-full h-full flex flex-col justify-center items-end text-right">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-4 text-[var(--color-accent)] font-bold tracking-widest text-xs uppercase mb-6 md:justify-end">
                                <span>{lang === 'KR' ? '시즌 스페셜' : 'Seasonal Special'}</span>
                                <div className="w-12 h-[1px] bg-[var(--color-accent)]"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                {lang === 'KR' ? <>눈부신<br />설원으로</> : <>SNOW<br />ESCAPADE</>}
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
                                {lang === 'KR'
                                    ? "용평, 알펜시아, 하이원 리조트 직행 셔틀 서비스."
                                    : "Direct connection to Yongpyong, Alpensia, and High1 Resorts."}
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 md:justify-end">
                                <a
                                    href="https://k-ski.rideus.net/k-ski/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-[var(--color-accent)] text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                                >
                                    {lang === 'KR' ? '스키 셔틀 예약하기' : 'Book Ski Shuttle'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkiBanner;
