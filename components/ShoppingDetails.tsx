import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection, { HeroSlide } from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shopping_yeoju 1.webp';
import outletImg from '../assets/shopping_siheung 1.webp';
import dutyfreeImg from '../assets/shopping_yeoju 1.webp'; // Reusing Yeoju for now

// Placeholder for Department Store
const mallImg = 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2070';

const heroSlides: HeroSlide[] = [
    {
        id: 0,
        image: heroImg,
        title: <>쇼핑을 위한<br />완벽한 여정</>,
        desc: <>여주, 시흥 프리미엄 아울렛부터 면세점까지.<br />쇼핑의 즐거움을 더해주는 편안한 이동 서비스.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: outletImg,
        title: <>편리한 셔틀버스</>,
        desc: <>주요 쇼핑몰을 연결하는 직행 셔틀. 무거운 짐 걱정 없이 쇼핑에만 집중하세요.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: dutyfreeImg,
        title: <>프라이빗 쇼핑 투어</>,
        desc: <>나만을 위한 전용 차량으로 여유롭게. 호텔 픽업부터 공항 샌딩까지.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    }
];

const destinations: CollectionItem[] = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Shinsegae',
        title: '여주 프리미엄 아울렛',
        description: '국내 최초, 최대 규모의 명품 브랜드 라인업',
        features: ['셔틀버스 운행', 'VIP 쿠폰북 증정'],
        image: heroImg
    },
    {
        id: 2,
        type: 'shuttle',
        partner: 'Shinsegae',
        title: '시흥 프리미엄 아울렛',
        description: '이국적인 경관과 함께 즐기는 여유로운 쇼핑',
        features: ['셔틀버스 운행', '지역 연계 투어'],
        image: outletImg
    },
    {
        id: 3,
        type: 'private',
        partner: 'Lotte',
        title: '롯데면세점 명동본점',
        description: '도심 속 면세 쇼핑의 중심',
        features: ['공항 샌딩', '쇼핑 바우처'],
        image: dutyfreeImg
    },
    {
        id: 5,
        type: 'outlet',
        partner: 'Lotte',
        title: '롯데 프리미엄 아울렛 타임빌라스',
        description: '바라산의 자연과 함께하는 글라스빌',
        features: ['자연 친화적', '키즈존'],
        image: mallImg
    },
];

const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
    { value: 'private', label: 'PRIVATE' },
    { value: 'outlet', label: 'OUTLET' },
];

const ShoppingDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS SHOPPING" />

                <CollectionSection
                    title={{ KR: '쇼핑 컬렉션', EN: 'Shopping Collection' }}
                    items={destinations}
                    filters={filters}
                    highlightType="outlet"
                    breadcrumb={{ KR: '쇼핑', EN: 'Shopping' }}
                />
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingDetails;
