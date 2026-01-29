import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: lang === 'KR' ? '공항이동' : 'AIRPORT', href: '/airport' },
    { label: lang === 'KR' ? '골프/레저' : 'LEISURE', href: '/leisure' },
    { label: lang === 'KR' ? '쇼핑' : 'SHOPPING', href: '/shopping' },
    { label: lang === 'KR' ? '테마파크' : 'THEME PARK', href: '/theme-park' },
    { label: lang === 'KR' ? '투어/이벤트' : 'EVENT', href: '/event' },
    { label: lang === 'KR' ? '로컬트립' : 'LOCAL TRIP', href: '/local-trip' },
  ];

  const languages = [
    { code: 'KR', label: 'KR' },
    { code: 'EN', label: 'EN' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-6 pb-0 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className={`max-w-[1216px] mx-auto flex items-center justify-between px-6 md:px-8 border-b transition-all duration-300 pb-6 ${isScrolled ? 'border-transparent' : 'border-white/20'}`}>
        {/* Logo - Industrial Typography */}
        <Link to="/" state={{ from: 'detail' }} className="flex items-center space-x-2 cursor-pointer group">
          <span className="font-display font-black tracking-tighter text-2xl md:text-3xl text-white">
            T-RIDE<span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation - Minimalist Line Based */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => {
            const isRoute = !item.href.includes('#');
            const Element = isRoute ? Link : 'a';
            const props = isRoute ? { to: item.href } : { href: item.href };

            return (
              <Element
                key={item.href}
                {...props}
                className="text-[13px] font-bold tracking-widest text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full font-display uppercase"
              >
                {item.label}
              </Element>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Customer Service */}
          <a href="#contact" className="hidden md:block text-[12px] font-medium tracking-wide text-white/70 hover:text-white transition-colors uppercase">
            {lang === 'KR' ? '고객지원' : 'Support'}
          </a>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[12px] font-bold tracking-wide text-white/70 hover:text-white transition-colors uppercase"
            >
              {lang}
              <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-4 bg-[#0A0A0A] border border-white/10 rounded-none shadow-2xl py-2 min-w-[100px] z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLang(language.code as 'KR' | 'EN');
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[12px] hover:bg-white/5 transition-colors ${lang === language.code ? 'font-bold text-[var(--color-accent)]' : 'text-slate-400'}`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button - Ghost Style */}
          <button className="hidden md:block text-[12px] font-bold tracking-wider text-white border border-white/30 px-6 py-2.5 hover:bg-white hover:text-black transition-all uppercase">
            {lang === 'KR' ? '로그인' : 'Login'}
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-white hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed inset-0 top-[85px] bg-[#0A0A0A] z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="px-6 py-8 space-y-6">
          {menuItems.map((item) => {
            const isRoute = !item.href.includes('#');
            const Element = isRoute ? Link : 'a';
            const props = isRoute ? { to: item.href } : { href: item.href };

            return (
              <Element
                key={item.href}
                {...props}
                className="block text-3xl font-display font-bold text-white/50 hover:text-white hover:pl-4 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Element>
            );
          })}
          <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
            <a href="#contact" className="block text-lg font-medium text-slate-400 uppercase" onClick={() => setIsMenuOpen(false)}>
              {lang === 'KR' ? '고객지원' : 'Support'}
            </a>
            <button className="w-full text-sm font-bold tracking-widest text-black bg-white px-6 py-4 uppercase hover:bg-[var(--color-accent)] hover:text-white transition-all">
              {lang === 'KR' ? '로그인' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
