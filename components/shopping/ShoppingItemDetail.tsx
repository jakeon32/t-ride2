import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StaticDetailHero from '../shared/StaticDetailHero';
import Container from '../shared/Container';
import NaverMap from '../shared/NaverMap';
import { useLanguage } from '../../contexts/LanguageContext';
import { shoppingDestinations } from '../../data/shoppingData';

const ShoppingItemDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const destination = shoppingDestinations.find(d => d.slug === slug);

    if (!destination) {
        return <Navigate to="/shopping" replace />;
    }

    const t = (obj: { KR: string; EN: string }) => lang === 'KR' ? obj.KR : obj.EN;

    const otherDestinations = shoppingDestinations.filter(d => d.slug !== slug);

    const heroSlides = [
        {
            id: 0,
            image: destination.image,
            title: t(destination.name),
            desc: t(destination.address)
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            {/* Breadcrumbs Overlay */}
            <div className="hidden md:block absolute top-24 left-0 w-full z-20 pointer-events-none">
                <Container>
                    <nav className="flex items-center text-sm text-white/80 font-medium pointer-events-auto drop-shadow-md">
                        <Link to="/" className="hover:text-white transition-colors">{lang === 'KR' ? '홈' : 'Home'}</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <Link to="/shopping" className="hover:text-white transition-colors">{lang === 'KR' ? '쇼핑' : 'Shopping'}</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <span className="text-white">{t(destination.name)}</span>
                    </nav>
                </Container>
            </div>

            <StaticDetailHero
                slides={heroSlides}
                className="h-[30vh] md:h-[30vh]"
                mainTitle={t(destination.name)}
                description={t(destination.description).split('\n')[0]}
            />

            <main className="flex-grow">
                {/* Destination Info Section */}
                <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                    <Container>
                        <div className="mb-12 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">
                                {lang === 'KR' ? '목적지 안내' : 'About the Destination'}
                            </span>
                            <h2 className="text-h2 text-gray-900 mb-6 tracking-tight">
                                {t(destination.name)}
                            </h2>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                                    {lang === 'KR' ? '주소' : 'Address'}
                                </h4>
                                <p className="text-slate-600 font-light leading-relaxed text-sm">{t(destination.address)}</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                                    {lang === 'KR' ? '문의' : 'Contact'}
                                </h4>
                                <p className="text-slate-600 font-light text-sm">{destination.contact}</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                                    {lang === 'KR' ? '홈페이지' : 'Website'}
                                </h4>
                                <a
                                    href={t(destination.websiteUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-light transition-colors underline underline-offset-4 text-sm"
                                >
                                    {lang === 'KR' ? '공식 홈페이지 바로가기' : 'Visit Official Website'}
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-3xl mb-12">
                            {t(destination.description).split('\n').map((paragraph, i) => (
                                <p key={i} className="text-slate-600 leading-relaxed text-lg mb-4 last:mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Features */}
                        <ul className="space-y-4">
                            {destination.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 text-blue-600 shrink-0">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed">{t(feature)}</span>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>

                {/* Location Section - Placeholder */}
                <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-100">
                    <Container>
                        <div className="mb-8 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">Location</span>
                            <h2 className="text-h2 text-gray-900 tracking-tight">
                                {lang === 'KR' ? '위치' : 'Location'}
                            </h2>
                        </div>
                        <NaverMap
                            lat={destination.coordinates.lat}
                            lng={destination.coordinates.lng}
                            label={t(destination.name)}
                            className="w-full h-[300px] md:h-[400px]"
                        />
                    </Container>
                </section>

                {/* Mobility Service Guide Section */}
                <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                    <Container>
                        <div className="mb-12 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">Mobility Service</span>
                            <h2 className="text-h2 text-gray-900 mb-6 tracking-tight">
                                {lang === 'KR' ? '이동 서비스 안내' : 'Mobility Service Guide'}
                            </h2>
                        </div>

                        {/* Booking Info & Cancellation - Unified card style */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                            {/* Booking Info Card */}
                            <div>
                                <h3 className="text-h3 text-gray-900 mb-4">
                                    {lang === 'KR' ? '이용안내' : 'Booking Information'}
                                </h3>
                                <ul className="space-y-3">
                                    {destination.bookingInfo.map((info, i) => (
                                        <li key={i} className="flex items-start text-slate-600 text-sm">
                                            <span className="text-slate-400 mr-2 mt-0.5 shrink-0">-</span>
                                            <span className="leading-relaxed">{t(info)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cancellation Policy Card */}
                            <div>
                                <h3 className="text-h3 text-gray-900 mb-4">
                                    {lang === 'KR' ? '취소규정' : 'Cancellation Policy'}
                                </h3>
                                <div className="space-y-5">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                            {t(destination.cancellationPolicy.tier1.label)}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {destination.cancellationPolicy.tier1.rules.map((rule, i) => (
                                                <li key={i} className="flex items-start text-slate-600 text-sm">
                                                    <span className="text-slate-400 mr-2 shrink-0">-</span>
                                                    <span className="leading-relaxed">{t(rule)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                            {t(destination.cancellationPolicy.tier2.label)}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {destination.cancellationPolicy.tier2.rules.map((rule, i) => (
                                                <li key={i} className="flex items-start text-slate-600 text-sm">
                                                    <span className="text-slate-400 mr-2 shrink-0">-</span>
                                                    <span className="leading-relaxed">{t(rule)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 mt-4">
                                    {lang === 'KR'
                                        ? '※ 보다 자세한 내용은 각 예약 페이지에서 확인하시기 바랍니다.'
                                        : '※ Please refer to the specific reservation page for more details.'}
                                </p>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions - Color cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl p-6 border border-slate-200">
                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                                    {lang === 'KR' ? '포함사항' : 'Inclusions'}
                                </h4>
                                <ul className="space-y-2.5">
                                    {destination.inclusions.map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-600 text-sm">
                                            <div className="bg-emerald-100 p-0.5 rounded-full mr-2.5 text-emerald-600">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {t(item)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-xl p-6 border border-slate-200">
                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                                    {lang === 'KR' ? '불포함사항' : 'Exclusions'}
                                </h4>
                                <ul className="space-y-2.5">
                                    {destination.exclusions.map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-600 text-sm">
                                            <div className="bg-red-100 p-0.5 rounded-full mr-2.5 text-red-500">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                                            </div>
                                            {t(item)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Booking CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href={destination.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#2E5CFF] text-white font-bold py-4 px-12 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 text-lg"
                            >
                                {lang === 'KR' ? '예약하기' : 'Book Now'}
                            </a>
                        </div>
                    </Container>
                </section>

                {/* Other Destinations */}
                {otherDestinations.length > 0 && (
                    <section className="bg-slate-50 py-16 md:py-24">
                        <Container>
                            <div className="mb-10 text-center md:text-left">
                                <h2 className="text-h2 text-gray-900 tracking-tight">
                                    {lang === 'KR' ? '다른 쇼핑 목적지' : 'Other Shopping Destinations'}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {otherDestinations.map(dest => (
                                    <Link
                                        key={dest.id}
                                        to={`/shopping/${dest.slug}`}
                                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="aspect-[16/9] overflow-hidden">
                                            <img
                                                src={dest.image}
                                                alt={t(dest.name)}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="inline-block px-3 py-1 bg-[#0F1115] text-white rounded text-xs font-bold uppercase tracking-wider mb-3">
                                                {dest.partner}
                                            </span>
                                            <h3 className="text-h3 text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {t(dest.name)}
                                            </h3>
                                            <p className="text-slate-500 text-sm line-clamp-2">
                                                {t(dest.description).split('\n')[0]}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Container>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingItemDetail;
