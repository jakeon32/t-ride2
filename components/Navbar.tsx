
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="font-extrabold tracking-tighter text-xl md:text-2xl text-[#0f172a]"><span className="text-blue-600">T</span>-Ride<span className="text-blue-600">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12 text-[13px] font-medium text-slate-600">
          <a href="#matching" className="hover:text-black transition-colors">솔루션</a>
          <a href="#inventory" className="hover:text-black transition-colors">카테고리</a>
          <a href="#why" className="hover:text-black transition-colors">가치</a>
          <a href="#contact" className="hover:text-black transition-colors">제휴문의</a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Search Icon */}
          <button className="md:hidden p-2 text-slate-600 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Desktop Search */}
          <div className="hidden md:flex relative">
            <input type="text" placeholder="목적지 검색..." className="pl-4 pr-10 py-2.5 bg-slate-100 rounded-full text-xs font-medium w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            <svg className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Login Button */}
          <button className="hidden md:block text-[12px] font-bold text-white bg-[#0f172a] px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            로그인
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
            <a href="#matching" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>솔루션</a>
            <a href="#inventory" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>카테고리</a>
            <a href="#why" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>가치</a>
            <a href="#contact" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>제휴문의</a>
            <div className="pt-3 border-t border-slate-100 mt-3">
              <button className="w-full text-sm font-bold text-white bg-[#0f172a] px-6 py-3 rounded-xl hover:bg-slate-800 transition-all">
                로그인
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;