import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'KR' | 'EN'>('KR');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const menuItems = [
    { label: '공항', href: '/airport' },
    { label: '레저', href: '/leisure' },
    { label: '쇼핑', href: '/shopping' },
    { label: '테마파크', href: '/theme-park' },
    { label: '공연/이벤트', href: '/event' },
    { label: '근교·여행', href: '/local-trip' },
  ];

  const languages = [
    { code: 'KR', label: '한국어' },
    { code: 'EN', label: 'English' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-[1216px] mx-auto glass-panel rounded-2xl flex items-center justify-between px-6 py-4 shadow-sm transition-all duration-300">
        {/* Logo */}
        <Link to="/" state={{ from: 'detail' }} className="flex items-center space-x-2 cursor-pointer group">
          <span className="font-extrabold tracking-tighter text-xl md:text-2xl text-[var(--color-primary)] font-['Montserrat']">
            T-Ride<span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isRoute = !item.href.includes('#');
            const Element = isRoute ? Link : 'a';
            const props = isRoute ? { to: item.href } : { href: item.href };

            return (
              <Element
                key={item.href}
                {...props}
                className="text-[14px] font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Element>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Customer Service */}
          <a href="#contact" className="hidden md:block text-[13px] font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
            고객센터
          </a>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[13px] font-bold text-slate-500 hover:text-[var(--color-primary)] px-2 py-1.5 rounded transition-colors"
            >
              {lang}
              <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl py-2 min-w-[120px] z-50 overflow-hidden">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLang(language.code as 'KR' | 'EN');
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-slate-50 transition-colors ${lang === language.code ? 'font-bold text-[var(--color-primary)]' : 'text-slate-600'}`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button */}
          <button className="hidden md:block text-[13px] font-bold text-white bg-[var(--color-primary)] px-6 py-2.5 rounded-full hover:bg-[#081d50] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            로그인
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-[var(--color-primary)] transition-colors"
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
      <div className={`lg:hidden fixed inset-x-4 top-[84px] bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'opacity-100 scale-y-100 max-h-[500px]' : 'opacity-0 scale-y-0 max-h-0'}`}>
        <div className="px-5 py-4 space-y-1">
          {menuItems.map((item) => {
            const isRoute = !item.href.includes('#');
            const Element = isRoute ? Link : 'a';
            const props = isRoute ? { to: item.href } : { href: item.href };

            return (
              <Element
                key={item.href}
                {...props}
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--color-primary)] rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Element>
            );
          })}
          <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
            <a href="#contact" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--color-primary)] rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              고객센터
            </a>
            <button className="w-full text-sm font-bold text-white bg-[var(--color-primary)] px-6 py-3 rounded-xl hover:bg-[#081d50] transition-all">
              로그인
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
