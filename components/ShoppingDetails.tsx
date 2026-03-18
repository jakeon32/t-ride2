import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection, { HeroSlide } from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';
import { shoppingDestinations } from '../data/shoppingData';

const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'private', label: 'PRIVATE' },
];

const ShoppingDetails: React.FC = () => {
    const { lang } = useLanguage();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const heroSlides: HeroSlide[] = [
        {
            id: 0,
            image: shoppingDestinations[0].image,
            title: lang === 'KR' ? <>쇼핑을 위한<br />완벽한 여정</> : <>The Perfect<br />Shopping Journey</>,
            desc: lang === 'KR'
                ? <>여주, 시흥 프리미엄 아울렛부터 면세점까지.<br />쇼핑의 즐거움을 더해주는 편안한 이동 서비스.</>
                : <>From Yeoju/Siheung Premium Outlets to Duty Free shops.<br />Comfortable transportation service adding joy to your shopping.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 1,
            image: shoppingDestinations[2].image,
            title: lang === 'KR' ? <>편리한 셔틀버스</> : <>Convenient Shuttle Bus</>,
            desc: lang === 'KR'
                ? <>주요 쇼핑몰을 연결하는 직행 셔틀. 무거운 짐 걱정 없이 쇼핑에만 집중하세요.</>
                : <>Direct shuttle connecting major shopping malls. Focus on shopping without worrying about heavy luggage.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 2,
            image: shoppingDestinations[1].image,
            title: lang === 'KR' ? <>프라이빗 쇼핑 투어</> : <>Private Shopping Tour</>,
            desc: lang === 'KR'
                ? <>나만을 위한 전용 차량으로 여유롭게. 호텔 픽업부터 공항 샌딩까지.</>
                : <>Relax with a private vehicle just for you. From hotel pickup to airport drop-off.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        }
    ];

    const destinations: CollectionItem[] = shoppingDestinations.map(dest => ({
        id: dest.id,
        type: dest.type,
        partner: dest.partner,
        title: dest.name,
        description: {
            KR: dest.description.KR.split('\n')[0].slice(0, 50) + '...',
            EN: dest.description.EN.split('\n')[0].slice(0, 60) + '...'
        },
        features: [
            { KR: 'VIP 쿠폰북 증정', EN: 'VIP Coupon Book' }
        ],
        image: dest.image,
        url: `/shopping/${dest.slug}`
    }));

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS SHOPPING" />

                <CollectionSection
                    title={{ KR: '쇼핑 컬렉션', EN: 'Shopping Collection' }}
                    items={destinations}
                    filters={filters}
                    highlightType="private"
                    breadcrumb={{ KR: '쇼핑', EN: 'Shopping' }}
                />
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingDetails;
