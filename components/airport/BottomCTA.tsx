import React from 'react';

const BottomCTA: React.FC = () => {
    return (
        <section className="relative z-30 bg-[#1e293b] py-16 md:py-20 px-5 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* L6-A: Micro Text */}
                <p className="text-micro text-slate-400 mb-2">교통 X 여행 No.1 플랫폼</p>
                {/* L1: Hero Heading (Display) */}
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    T-Ride
                </h2>
                {/* L4-A: Body Large */}
                <p className="text-body-lg text-slate-300 mb-8">
                    공항 이동의 새로운 기준, T-Ride와 함께 여행을 시작하세요
                </p>
                {/* L5-D: Button Text */}
                <button className="text-btn px-8 py-4 bg-white text-[#1e293b] rounded-full hover:bg-slate-100 transition-colors">
                    지금 바로 예약하기
                </button>
            </div>
        </section>
    );
};

export default BottomCTA;
