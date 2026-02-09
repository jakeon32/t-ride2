import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Container from '../shared/Container';

const IntroSection: React.FC = () => {
    const { lang } = useLanguage();

    return (
        <section className="relative z-10 bg-[var(--color-bg)] py-20 border-t border-white/10">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-accent)] bg-white/5">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                    </div>
                    {/* L2: Section Title */}
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                        {lang === 'KR'
                            ? <>공항으로 가는<br /><span className="text-slate-500 text-2xl md:text-4xl">가장 매끄러운 연결</span></>
                            : <>SEAMLESS CONNECTION<br /><span className="text-slate-500 text-2xl md:text-4xl">TO YOUR FLIGHT</span></>}
                    </h2>

                    {/* L4-A: Body Large */}
                    <div className="text-slate-400 space-y-6 leading-relaxed font-light text-lg">
                        <p>
                            {lang === 'KR'
                                ? <>라이더스 공항 서비스는 <span className="text-white font-medium">100개 이상의 노선</span>으로 <span className="text-white font-medium">24시간</span> 운영됩니다.<br className="hidden md:block" />어디서든 공항 터미널 바로 앞까지 편안하게 연결합니다.</>
                                : <>Rideus Airport Service operates <span className="text-white font-medium">24/7</span> with over <span className="text-white font-medium">100+ routes</span>.<br className="hidden md:block" />Connect from hundreds of pickup points nationwide directly to your terminal.</>}
                        </p>
                        <div className="w-20 h-[1px] bg-white/10 mx-auto"></div>
                        <p className="text-sm md:text-base">
                            {lang === 'KR'
                                ? <>주요 거점에서 15분 간격 운행으로 대기 시간을 최소화합니다.<br />인천/김포공항으로 가는 가장 빠른 길을 경험하세요.</>
                                : <>Minimizing wait times with 15-minute intervals at major hubs.<br />Experience the most comfortable journey from Incheon/Gimpo to the city.</>}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default IntroSection;
