
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-7 h-7 bg-[#0f172a] rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">T</span>
          </div>
          <span className="font-bold tracking-tight text-xl text-[#0f172a]">T-Ride</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
          <a href="#matching" className="hover:text-black transition-colors">솔루션</a>
          <a href="#inventory" className="hover:text-black transition-colors">카테고리</a>
          <a href="#why" className="hover:text-black transition-colors">가치</a>
          <a href="#process" className="hover:text-black transition-colors">이용방법</a>
          <a href="#contact" className="hover:text-black transition-colors">제휴문의</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-[11px] font-bold uppercase tracking-widest text-[#0f172a] bg-slate-100 px-6 py-2.5 rounded-full hover:bg-slate-200 transition-all">
            로그인
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;