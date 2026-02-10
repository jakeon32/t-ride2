import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection, { HeroSlide } from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shopping_yeoju 1.webp';
import outletImg from '../assets/shopping_siheung 1.webp';
import dutyfreeImg from '../assets/shopping_yeoju 1.webp'; // Reusing Yeoju for now

// Placeholder for Department Store
// Placeholder for Department Store - removed unused mallImg



const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
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
            image: heroImg,
            title: lang === 'KR' ? <>쇼핑을 위한<br />완벽한 여정</> : <>The Perfect<br />Shopping Journey</>,
            desc: lang === 'KR'
                ? <>여주, 시흥 프리미엄 아울렛부터 면세점까지.<br />쇼핑의 즐거움을 더해주는 편안한 이동 서비스.</>
                : <>From Yeoju/Siheung Premium Outlets to Duty Free shops.<br />Comfortable transportation service adding joy to your shopping.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 1,
            image: outletImg,
            title: lang === 'KR' ? <>편리한 셔틀버스</> : <>Convenient Shuttle Bus</>,
            desc: lang === 'KR'
                ? <>주요 쇼핑몰을 연결하는 직행 셔틀. 무거운 짐 걱정 없이 쇼핑에만 집중하세요.</>
                : <>Direct shuttle connecting major shopping malls. Focus on shopping without worrying about heavy luggage.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 2,
            image: dutyfreeImg,
            title: lang === 'KR' ? <>프라이빗 쇼핑 투어</> : <>Private Shopping Tour</>,
            desc: lang === 'KR'
                ? <>나만을 위한 전용 차량으로 여유롭게. 호텔 픽업부터 공항 샌딩까지.</>
                : <>Relax with a private vehicle just for you. From hotel pickup to airport drop-off.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        }
    ];

    const destinations: CollectionItem[] = [
        {
            id: 1,
            type: 'shuttle',
            partner: 'Shinsegae',
            title: { KR: '여주 프리미엄 아울렛', EN: 'Yeoju Premium Outlets' },
            description: { KR: '국내 최초, 최대 규모의 명품 브랜드 라인업', EN: "Korea's first and largest luxury brand lineup" },
            features: [
                { KR: '셔틀버스 운행', EN: 'Shuttle Service' },
                { KR: 'VIP 쿠폰북 증정', EN: 'VIP Coupon Book' }
            ],
            image: heroImg,
            url: 'https://booking.triseup.com/premiumoutlets?branch=yeoju'
        },
        {
            id: 2,
            type: 'shuttle',
            partner: 'Shinsegae',
            title: { KR: '파주 프리미엄 아울렛', EN: 'Paju Premium Outlets' },
            description: { KR: '이국적인 전원 속에서 즐기는 득템의 즐거움', EN: 'Enjoy great finds in an exotic suburban setting' },
            features: [
                { KR: '셔틀버스 운행', EN: 'Shuttle Service' },
                { KR: 'VIP 쿠폰북 증정', EN: 'VIP Coupon Book' }
            ],
            image: heroImg, // Reusing heroImg as placeholder for Paju
            url: 'https://booking.triseup.com/premiumoutlets?branch=paju'
        },
        {
            id: 3,
            type: 'shuttle',
            partner: 'Shinsegae',
            title: { KR: '시흥 프리미엄 아울렛', EN: 'Siheung Premium Outlets' },
            description: { KR: '이국적인 경관과 함께 즐기는 여유로운 쇼핑', EN: 'Relaxed shopping with exotic scenery' },
            features: [
                { KR: '셔틀버스 운행', EN: 'Shuttle Service' },
                { KR: '지역 연계 투어', EN: 'Regional Tour' }
            ],
            image: outletImg,
            url: 'https://booking.triseup.com/premiumoutlets?branch=siheung'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS SHOPPING" />

                <CollectionSection
                    title={{ KR: '쇼핑 컬렉션', EN: 'Shopping Collection' }}
                    items={destinations}
                    filters={filters}
                    highlightType="shuttle"
                    breadcrumb={{ KR: '쇼핑', EN: 'Shopping' }}
                />
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingDetails;
