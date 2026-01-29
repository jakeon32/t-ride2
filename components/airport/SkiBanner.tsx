import React from 'react';
import skiBg from '../../assets/ski_banner_img.jpg';

const SkiBanner: React.FC = () => {
    return (
        <section className="relative z-30 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer">
                    {/* Background Image */}
                    <img
                        src={skiBg}
                        alt="Ski Resort"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay: 0% (Blue 90%) -> 75% (Transparent) -> 100% (Transparent) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/100 via-transparent via-80% to-transparent"></div>

                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <span className="text-3xl">⛷️</span>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    스키 리조트 이동 서비스
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl font-medium text-blue-100 mb-2">
                                공항에서 바로 설원으로, 장비 걱정 없는 직행 이동
                            </p>

                            <p className="text-sm md:text-base text-white mb-6 max-w-2xl font-normal">
                                용평, 알펜시아, 비발디파크, 하이원 등 국내 주요 스키 리조트 전 노선 운행 중!<br className="hidden md:block" />
                                무거운 스키/보드 장비도 안전하게 운송하는 전용 차량으로 편안하게 이동하세요.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 text-sm font-medium text-blue-50/90">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <span>🚌</span>
                                    <span>스키 셔틀 - 정기 노선 운행</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <span>🚐</span>
                                    <span>프라이빗 - Door-to-Door 맞춤 이동</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://k-ski.rideus.net/k-ski/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                        >
                            스키장 이동 예약하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkiBanner;
