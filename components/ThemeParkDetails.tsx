import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shuttle_everland 1.webp';
import cityNightImg from '../assets/hero_img02.webp';
import familyVanImg from '../assets/private_van_family 1.webp';
import natureImg from '../assets/tour_jeju 1.webp';

// Map specific images
const lotteImg = cityNightImg;
const legoImg = familyVanImg;
const waterImg = natureImg;
const seoulLandImg = heroImg;

// Missing images mapping
const shuttleImg = heroImg;
const vanImg = familyVanImg;

const destinations: CollectionItem[] = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Samsung C&T',
        title: '에버랜드 리조트',
        description: '국내 최대 규모의 테마파크 & 동물원',
        features: ['강남역 직행 셔틀', '종일 픽업'],
        image: heroImg
    },
    {
        id: 2,
        type: 'shuttle',
        partner: 'Lotte',
        title: '롯데월드 어드벤처',
        description: '도심 속에서 즐기는 꿈과 희망의 나라',
        features: ['잠실역 픽업', '교복 대여 연계'],
        image: lotteImg
    },
    {
        id: 3,
        type: 'private',
        partner: 'Legoland',
        title: '레고랜드 코리아',
        description: '글로벌 테마파크, 춘천의 새로운 랜드마크',
        features: ['ITX 연계 픽업', '패밀리 패키지'],
        image: legoImg
    },
    {
        id: 4,
        type: 'shuttle',
        partner: 'Samsung C&T',
        title: '캐리비안 베이',
        description: '이국적인 정취의 워터파크',
        features: ['여름 시즌 셔틀', '물놀이 용품 보관'],
        image: waterImg
    },
    {
        id: 5,
        type: 'shuttle',
        partner: 'Seoul Land',
        title: '서울랜드',
        description: '대공원과 함께 즐기는 친환경 테마파크',
        features: ['코끼리열차 연계', '동물원 코스'],
        image: seoulLandImg
    }
];

const heroSlides = [
    {
        id: 0,
        image: heroImg,
        title: <>환상의 나라로 떠나는<br />설레는 여정</>,
        desc: <>에버랜드, 롯데월드, 레고랜드까지.<br />오픈런부터 폐장까지 체력 걱정 없이 즐기세요.</>,
        buttonText: "이동편 예약",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: shuttleImg,
        title: <>편리한 셔틀버스</>,
        desc: <>에버랜드, 롯데월드 등 주요 테마파크로 향하는 직행 셔틀. 개장 시간에 맞춰 도착하세요.</>,
        buttonText: "셔틀 예약하기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: vanImg,
        title: <>가족형 프라이빗 밴</>,
        desc: <>아이들과 함께하는 이동도 편안하게. 카시트 제공 및 유모차 적재 가능한 대형 밴.</>,
        buttonText: "프라이빗 예약하기",
        buttonLink: "#collection-section"
    }
];

const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
    { value: 'private', label: 'PRIVATE' },
];

const ThemeParkDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS THEMEPARK" />

                <CollectionSection
                    title={{ KR: '테마파크 컬렉션', EN: 'Theme Park Collection' }}
                    items={destinations}
                    filters={filters}
                    highlightType="shuttle"
                    breadcrumb={{ KR: '테마파크', EN: 'Theme Park' }}
                />
            </main>

            <Footer />
        </div>
    );
};

export default ThemeParkDetails;
