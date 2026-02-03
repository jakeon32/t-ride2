import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';
// Using existing images as placeholders for now
import yongpyongImg from '../assets/yongpyung.webp';
import ramadaImg from '../assets/ramada.webp';
import high1Img from '../assets/high1.webp';
import phoenixImg from '../assets/phoenixpark.webp';
import wellihilliImg from '../assets/wellihillipark.webp';
// New Images
import leisureHeroImg from '../assets/Leisure Hero Image.webp';
import leisureShuttleImg from '../assets/Shuttle Service_Leisure.webp';
import leisurePrivateImg from '../assets/Private Service_Leisure.webp';

const defaultFilters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
    { value: 'private', label: 'PRIVATE' },
];

const heroSlides = [
    {
        id: 0,
        image: leisureHeroImg,
        title: <>즐거움을 향한<br />가장 편안한 이동</>,
        desc: <>골프, 스키, 관광까지.<br />목적과 일정에 맞는 최적의 이동 서비스를 선택하세요.</>,
        buttonText: "지금 예약하기",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: leisureShuttleImg,
        title: <>셔틀 서비스</>,
        desc: <>주요 골프장, 스키 리조트, 테마파크를 연결하는 정기 셔틀 서비스입니다.<br />합리적인 요금으로 편안하게 이동하세요.</>,
        buttonText: "셔틀 예약하기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: leisurePrivateImg,
        title: <>프라이빗 이동 서비스</>,
        desc: <>전용 차량과 전문 기사가 동행하는 완전 맞춤형 레저 이동 서비스입니다.<br />원하는 시간에 원하는 장소로, 자유로운 일정 구성이 가능합니다.</>,
        buttonText: "프라이빗 예약하기",
        buttonLink: "#collection-section"
    }
];

const destinations: CollectionItem[] = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Pyeongchang',
        title: '용평리조트',
        description: '대한민국 스키의 발상지, 사계절 종합 휴양지',
        features: ['셔틀버스 운행', '법인 멤버십'],
        image: yongpyongImg
    },
    {
        id: 2,
        type: 'private',
        partner: 'Pyeongchang',
        title: '라마다 호텔 & 스위트',
        description: '대관령의 아름다운 풍광을 품은 프리미엄 호텔',
        features: ['프라이빗 픽업', 'VIP 라운지'],
        image: ramadaImg
    },
    {
        id: 3,
        type: 'shuttle',
        partner: 'Jeongseon',
        title: '하이원 리조트',
        description: '하늘과 가장 가까운 힐링 리조트',
        features: ['카지노 셔틀', '스키열차 연계'],
        image: high1Img
    },
    {
        id: 4,
        type: 'shuttle',
        partner: 'Pyeongchang',
        title: '휘닉스 평창',
        description: '태기산의 정기를 품은 사계절 복합 리조트',
        features: ['셔틀버스 운행', '올인클루시브'],
        image: phoenixImg
    },
    {
        id: 5,
        type: 'shuttle',
        partner: 'Hoengseong',
        title: '웰리힐리파크',
        description: '청정 자연 속에서 즐기는 다이내믹 레저',
        features: ['셔틀버스 운행', '워터파크 연계'],
        image: wellihilliImg
    }
];

const LeisureDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <DetailHeroSection slides={heroSlides} badgePrefix="RIDERS LEISURE MODULE" />
            <main className="flex-grow">
                <CollectionSection
                    title={{ KR: '인기 여행지 컬렉션', EN: 'Popular Collection' }}
                    items={destinations}
                    filters={defaultFilters}
                    highlightType="shuttle"
                />
            </main>
            <Footer />
        </div>
    );
};

export default LeisureDetails;
