import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/rideusLogo.webp';
import Container from './shared/Container';

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer id="contact" className="bg-[#050505] pt-12 md:pt-24 pb-8 md:pb-12 border-t border-white/10 text-white relative z-0">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-6 md:mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <img
              src={logo}
              alt="Rideus"
              className="h-10 md:h-12 w-auto object-contain mb-6 brightness-0 invert opacity-80"
              loading="eager"
              decoding="sync"
            />
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
              {lang === 'KR'
                ? "프리미엄 모빌리티의 기준을 정의합니다. 공항 의전부터 프라이빗 투어까지, 완벽한 여정을 설계합니다."
                : <>Defining the standard of premium mobility.<br />From airport transfers to private tours, we engineer the perfect journey.</>}
            </p>
            <div className="hidden md:flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 border border-white/10 hover:bg-white hover:border-white transition-all cursor-pointer" />
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                {lang === 'KR' ? '회사소개' : 'Company'}
              </h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '브랜드 스토리' : 'About'}</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '채용' : 'Careers'}</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '보도자료' : 'Press'}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                {lang === 'KR' ? '고객지원' : 'Support'}
              </h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link to="/support" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '고객센터' : 'Help Center'}</Link></li>
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '이용약관' : 'Terms'}</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '개인정보처리방침' : 'Privacy'}</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                {lang === 'KR' ? '제휴 문의' : 'Partners'}
              </h4>
              <div className="p-6 border border-white/10 hover:border-[var(--color-accent)] transition-colors group cursor-pointer">
                <span className="block text-sm font-bold text-white mb-2">{lang === 'KR' ? '파트너 등록' : 'Become a Partner'}</span>
                <span className="text-xs text-slate-500 group-hover:text-[var(--color-accent)]">{lang === 'KR' ? '신청하기' : 'Apply Now'} &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Partner Section - Full Width */}
        <div className="md:hidden pt-8 border-t border-white/5">
          <div className="w-full px-8 py-6 border border-white/10 hover:border-[var(--color-accent)] transition-colors group cursor-pointer flex justify-between items-center">
            <span className="text-sm font-bold text-white">{lang === 'KR' ? '파트너 등록' : 'Become a Partner'}</span>
            <span className="text-xs text-slate-500 group-hover:text-[var(--color-accent)]">{lang === 'KR' ? '신청하기' : 'Apply Now'} &rarr;</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-slate-600 text-xs font-mono uppercase tracking-wider">
            &copy; 2026 Rideus Mobility. {lang === 'KR' ? 'All rights reserved.' : 'All rights reserved.'}
          </p>
          <p className="text-slate-700 text-xs font-mono uppercase tracking-wider">
            Seoul, Republic of Korea
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
