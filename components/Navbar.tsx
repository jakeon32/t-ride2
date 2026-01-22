
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'KR' | 'EN'>('KR');

  const menuItems = [
    { label: '공항', href: '#airport' },
    { label: '레저', href: '#leisure' },
    { label: '쇼핑', href: '#shopping' },
    { label: '테마파크', href: '#themepark' },
    { label: '공연/이벤트', href: '#event' },
    { label: '근교·여행', href: '#travel' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="font-extrabold tracking-tighter text-xl md:text-2xl text-[#0f172a]"><span className="text-blue-600">T</span>-Ride<span className="text-blue-600">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-[13px] font-medium text-slate-600">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-black transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Customer Service */}
          <a href="#contact" className="hidden md:block text-[12px] font-medium text-slate-600 hover:text-black transition-colors">
            고객센터
          </a>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'KR' ? 'EN' : 'KR')}
            className="text-[12px] font-bold text-slate-500 hover:text-black px-2 py-1.5 rounded transition-colors"
          >
            {lang === 'KR' ? 'EN' : 'KR'}
          </button>

          {/* Login Button */}
          <button className="hidden md:block text-[12px] font-bold text-white bg-[#0f172a] px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
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
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
              <a href="#contact" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-black rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                고객센터
              </a>
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
