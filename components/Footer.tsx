import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[var(--color-primary)] pt-16 md:pt-24 pb-12 md:pb-16 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 md:mb-20">
          {/* Left Side: Brand & Links */}
          <div className="space-y-8 flex-grow max-w-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold tracking-tighter text-2xl md:text-3xl text-white font-['Montserrat']">
                  T-Ride<span className="text-[var(--color-accent)]">.</span>
                </span>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                목적지 기반 이동 통합 서비스.<br />
                가장 편안하고 스마트한 이동의 기준을 제시합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/80 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">회사소개</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#contact" className="hover:text-white transition-colors">고객센터</a>
            </div>
          </div>

          {/* Right Side: Partner Registration Box */}
          <div className="w-full md:w-[400px]">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm space-y-6 hover:bg-white/10 transition-colors duration-300">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">파트너 등록</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  T-Ride와 함께 더 넓은 세상으로 나아가세요.<br />
                  검증된 파트너를 기다립니다.
                </p>
              </div>
              <button className="w-full px-8 py-4 bg-white text-[var(--color-primary)] rounded-xl text-sm font-bold hover:bg-[var(--color-secondary)] transition-colors shadow-lg">
                파트너 등록하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium">
            &copy; 2026 T-Ride. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer lg:block hidden"></div>
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer lg:block hidden"></div>
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer lg:block hidden"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
