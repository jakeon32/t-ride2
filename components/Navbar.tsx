import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/rideusLogo.webp';

interface NavbarProps {
  theme?: 'dark' | 'light';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: lang === 'KR' ? '공항이동' : 'AIRPORT', href: '/airport' },
    { label: lang === 'KR' ? '레저' : 'LEISURE', href: '/leisure' },
    { label: lang === 'KR' ? '쇼핑' : 'SHOPPING', href: '/shopping' },
    { label: lang === 'KR' ? '테마파크' : 'THEME PARK', href: '/theme-park' },
    { label: lang === 'KR' ? '공연/이벤트' : 'EVENT', href: '/event' },
    { label: lang === 'KR' ? '근교·여행' : 'SUBURBAN & TRAVEL', href: '/local-trip' },
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

  const navBgClass = isLight
    ? (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent')
    : (isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}>
      <div className={`relative z-[999] max-w-[1216px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 border-b transition-all duration-300 py-3 md:py-4 ${isLight ? (isScrolled ? 'border-transparent' : 'border-slate-200') : (isScrolled ? 'border-transparent' : 'border-white/20')}`}>
        {/* Logo - Image Replaced */}
        <Link
          to="/"
          state={{ from: 'detail' }}
          className="flex items-center cursor-pointer group"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src={logo}
            alt="Rideus"
            className={`h-8 md:h-10 w-auto object-contain ${isLight ? '' : 'brightness-0 invert'}`}
            loading="eager"
            decoding="sync"
          />
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
                className={`text-[18px] font-medium tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full font-display uppercase ${isLight ? 'text-slate-800 hover:text-[var(--color-accent)]' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </Element>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Customer Service */}
          {/* Customer Service */}
          <Link to="/support" className={`hidden md:block text-[12px] font-medium tracking-wide uppercase transition-colors ${isLight ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'}`}>
            {lang === 'KR' ? '고객센터' : 'Support'}
          </Link>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1 text-[12px] font-bold tracking-wide uppercase transition-colors ${isLight ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'}`}
            >
              {lang}
              <svg className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-4 w-24 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${isLangOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <button
                onClick={() => { setLang('KR'); setIsLangOpen(false); }}
                className={`nav-link w-full text-left px-4 py-3 text-xs font-bold transition-colors ${lang === 'KR' ? 'text-black bg-slate-50' : 'text-slate-400 hover:text-black hover:bg-slate-50'}`}
              >
                KR
              </button>
              <button
                onClick={() => { setLang('EN'); setIsLangOpen(false); }}
                className={`nav-link w-full text-left px-4 py-3 text-xs font-bold transition-colors ${lang === 'EN' ? 'text-black bg-slate-50' : 'text-slate-400 hover:text-black hover:bg-slate-50'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <button
            className={`lg:hidden ml-2 transition-colors ${isLight ? 'text-slate-800' : 'text-white'}`}
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
      <div className={`lg:hidden fixed inset-0 top-0 bg-black min-h-screen z-[1001] transition-all duration-300 pt-[85px] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-6 right-6 z-[1002] text-white hover:text-[var(--color-accent)] transition-colors"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 py-8 space-y-6 h-full overflow-y-auto">
          <Link
            to="/"
            className="block text-3xl font-display font-bold text-white/50 hover:text-white hover:pl-4 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === 'KR' ? '홈' : 'HOME'}
          </Link>
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
            <Link to="/support" className="block text-lg font-medium text-slate-400 uppercase" onClick={() => setIsMenuOpen(false)}>
              {lang === 'KR' ? '고객센터' : 'Support'}
            </Link>
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
