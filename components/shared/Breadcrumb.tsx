import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface BreadcrumbProps {
    current: { KR: string; EN: string };
    parent?: { label: { KR: string; EN: string }; url: string };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ current, parent }) => {
    const { lang } = useLanguage();

    return (
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 tracking-wide uppercase mb-4">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">
                {lang === 'KR' ? '홈' : 'Home'}
            </Link>
            <span className="text-slate-300">/</span>
            {parent && (
                <div className="flex items-center gap-2">
                    <Link to={parent.url} className="hover:text-[var(--color-accent)] transition-colors">
                        {lang === 'KR' ? parent.label.KR : parent.label.EN}
                    </Link>
                    <span className="text-slate-300">/</span>
                </div>
            )}
            <span className="text-slate-600">
                {lang === 'KR' ? current.KR : current.EN}
            </span>
        </nav>
    );
};

export default Breadcrumb;
