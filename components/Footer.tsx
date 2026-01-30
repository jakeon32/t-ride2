import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/10 text-white relative z-50">
      <div className="max-w-[1216px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-display font-black tracking-tighter text-3xl block mb-6">
              T-RIDE<span className="text-[var(--color-accent)]">.</span>
            </span>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
              {lang === 'KR'
                ? "프리미엄 모빌리티의 기준을 정의합니다. 공항 의전부터 프라이빗 투어까지, 완벽한 여정을 설계합니다."
                : <>Defining the standard of premium mobility.<br />From airport transfers to private tours, we engineer the perfect journey.</>}
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 border border-white/10 hover:bg-white hover:border-white transition-all cursor-pointer" />
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
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
                <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{lang === 'KR' ? '고객센터' : 'Help Center'}</a></li>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-mono uppercase tracking-wider">
            &copy; 2026 T-RIDE Mobility. {lang === 'KR' ? 'All rights reserved.' : 'All rights reserved.'}
          </p>
          <p className="text-slate-700 text-xs font-mono uppercase tracking-wider">
            Seoul, Republic of Korea
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
