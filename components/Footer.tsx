
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-12 md:pt-16 pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Left Side: Brand & Links */}
          <div className="space-y-6 md:space-y-8 flex-grow">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold tracking-tighter text-xl md:text-2xl text-[#0f172a]"><span className="text-blue-600">T</span>-Ride<span className="text-blue-600">.</span></span>
              </div>
              <p className="text-[#64748b] text-sm md:text-base max-w-md leading-relaxed">
                목적지 기반 이동 통합 서비스. 셔틀과 프라이빗 이동을 비교하고 빠르게 문의하세요.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3 text-[#64748b] text-sm md:text-base font-medium">
              <a href="#" className="hover:text-black transition-colors">회사소개</a>
              <a href="#" className="hover:text-black transition-colors">이용약관</a>
              <a href="#" className="hover:text-black transition-colors">개인정보처리방침</a>
              <a href="#contact" className="hover:text-black transition-colors">고객센터</a>
            </div>
          </div>

          {/* Right Side: Partner Registration Box */}
          <div className="w-full md:w-[380px]">
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-bold text-[#1e293b]">파트너 등록</h3>
                <p className="text-[#64748b] text-xs md:text-sm leading-relaxed">
                  T-RiseUp 이용 고객사는 상품을 등록할 수 있어요.
                </p>
              </div>
              <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#0f172a] text-white rounded-xl text-sm md:text-base font-bold hover:bg-slate-800 transition-colors">
                파트너 등록하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94a3b8] text-xs md:text-sm font-medium">
            &copy; 2026 T-Ride. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
