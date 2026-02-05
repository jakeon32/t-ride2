import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection from './shared/CollectionSection';
import type { CollectionItem, FilterOption } from './shared/CollectionSection';
import { useLanguage } from '../contexts/LanguageContext';

// Local Asset Images
import heroImg from '../assets/tour_jeju 1.webp';
import gyeongjuImg from '../assets/tour_gyeongju 1.webp';
import cityNightImg from '../assets/hero_img02.webp';
import bangkokImg from '../assets/tour_bangkok 1.webp';
import airportImg from '../assets/shuttle_airport.webp'; // For Airport Pickup
import golfImg from '../assets/private_leisure.webp'; // For Golf Tour (alternative)

// Map specific images
const namiImg = heroImg;
const folkImg = gyeongjuImg;
const suwonImg = cityNightImg;

const tourImg = gyeongjuImg;
const traditionalImg = folkImg;

const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
    { value: 'private', label: 'PRIVATE' },
];

const LocalTripDetails: React.FC = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const heroSlides = [
        {
            id: 0,
            image: heroImg,
            title: <>서울을 벗어나 만나는<br />특별한 하루</>,
            desc: <>남이섬, DMZ, 한국민속촌까지.<br />복잡한 교통편 걱정 없이 편안하게 떠나는 근교 여행.</>,
            buttonText: "목적지 찾아보기",
            buttonLink: "#domestic-section"
        },
        {
            id: 1,
            image: tourImg,
            title: <>외국인 관광객 전용 투어</>,
            desc: <>언어 장벽 없는 전문 가이드와 함께하는 알찬 투어 패키지입니다.</>,
            buttonText: "목적지 찾아보기",
            buttonLink: "#domestic-section"
        },
        {
            id: 2,
            image: traditionalImg,
            title: <>한국 전통 문화 체험</>,
            desc: <>가장 한국적인 아름다움을 찾아 떠나는 프라이빗 문화 탐방 코스.</>,
            buttonText: "목적지 찾아보기",
            buttonLink: "#domestic-section"
        }
    ];

    const domesticItems: CollectionItem[] = [
        {
            id: 1,
            type: 'private',
            partner: 'Rideus Domestic',
            title: lang === 'KR' ? '전국 관광택시 투어' : 'National Taxi Tour',
            description: lang === 'KR' ? '현지 기사님과 함께하는 숨은 명소 여행' : 'Hidden gems tour with local drivers',
            features: [lang === 'KR' ? '3시간~종일' : '3H~Full Day', lang === 'KR' ? '자유 일정' : 'Flexible'],
            image: gyeongjuImg
        },
        {
            id: 2,
            type: 'private',
            partner: 'Rideus Gangwon',
            title: lang === 'KR' ? '강원권 프라이빗 투어' : 'Gangwon Private Tour',
            description: lang === 'KR' ? '대관령 양떼목장부터 영월 별마로 천문대까지' : 'From Daegwallyeong to Yeongwol Observatory',
            features: [lang === 'KR' ? '프라이빗' : 'Private', lang === 'KR' ? '우리만의 여행' : 'Exclusive'],
            image: heroImg
        },
    ];

    const overseasItems: CollectionItem[] = [
        {
            id: 3,
            type: 'private',
            partner: 'RoundT Airport',
            title: lang === 'KR' ? '공항 픽업 (수완나품/돈므앙)' : 'Airport Pickup (BKK/DMK)',
            description: lang === 'KR' ? '복잡한 공항에서 호텔까지 가장 편안하게' : 'Comfortable transfer from airport to hotel',
            features: [lang === 'KR' ? '24시간 픽업' : '24/7 Pickup', 'BKK/DMK'],
            image: airportImg
        },
        {
            id: 4,
            type: 'private',
            partner: 'RoundT Golf',
            title: lang === 'KR' ? '태국 명문 골프 투어' : 'Thailand Golf Tour',
            description: lang === 'KR' ? '시암, 알파인 등 명문 골프장 투어' : 'Premium golf tour including Siam, Alpine',
            features: [lang === 'KR' ? '대형 밴' : 'Large Van', lang === 'KR' ? '골프백 4개' : '4 Golf Bags'],
            image: golfImg
        },
        {
            id: 5,
            type: 'private',
            partner: 'RoundT Rent',
            title: lang === 'KR' ? '방콕/파타야 자유 일정 렌트' : 'Bangkok/Pattaya Car Rental',
            description: lang === 'KR' ? '원하는 일정대로 자유롭게 이동하세요' : 'Travel freely with your own schedule',
            features: [lang === 'KR' ? '안전한 여행' : 'Safe Trip', lang === 'KR' ? '친절한 기사' : 'Friendly Driver'],
            image: bangkokImg
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Slider Section */}
                <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS LOCAL TRIP" />

                {/* 2. Domestic Product Section */}
                <div id="domestic-section">
                    <CollectionSection
                        title={{ KR: '국내 여행 컬렉션', EN: 'Domestic Travel Collection' }}
                        items={domesticItems}
                        filters={filters}
                        highlightType="shuttle"
                        compactBottom
                        breadcrumb={{ KR: '근교·여행', EN: 'Local Trip' }}
                    />
                </div>

                {/* 3. Overseas Product Section */}
                <CollectionSection
                    title={{ KR: '해외 여행 컬렉션', EN: 'Overseas Travel Collection' }}
                    items={overseasItems}
                    filters={filters}
                    highlightType="shuttle"
                    firstSection={false}
                    bgColor="bg-[#f8f9fa]"
                />
            </main>

            <Footer />
        </div>
    );
};

export default LocalTripDetails;
