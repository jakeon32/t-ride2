import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';
import yongpyongImg from '../assets/yongpyung.webp';
import high1Img from '../assets/high1.webp';
import phoenixImg from '../assets/phoenixpark.webp';
import wellihilliImg from '../assets/wellihillipark.webp';
import skiBannerImg from '../assets/ski_banner_img.webp';
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
        partner: 'Yongpyong',
        title: '모나 용평 스키장',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: yongpyongImg,
        url: 'https://yongpyong.rideus.net/en/yongpyong'
    },
    {
        id: 2,
        type: 'private',
        partner: 'Yongpyong',
        title: '모나 용평 스키장',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: yongpyongImg,
        url: 'https://booking.triseup.com/k-ski?resort=yongpyong'
    },
    {
        id: 3,
        type: 'shuttle',
        partner: 'High1',
        title: '하이원 스키장',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.12.08 ~ 2026.02.28',
        features: ['정선'],
        image: high1Img,
        url: 'https://high1.rideus.net/en/high1/'
    },
    {
        id: 4,
        type: 'private',
        partner: 'High1',
        title: '하이원 스키장',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.12.08 ~ 2026.02.28',
        features: ['정선'],
        image: high1Img,
        url: 'https://booking.triseup.com/k-ski?resort=high1'
    },
    {
        id: 5,
        type: 'shuttle',
        partner: 'Alpensia',
        title: '평창 알펜시아',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: skiBannerImg,
        url: 'https://alpensia.rideus.net/en/alpensia'
    },
    {
        id: 6,
        type: 'private',
        partner: 'Alpensia',
        title: '평창 알펜시아',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: skiBannerImg,
        url: 'https://booking.triseup.com/k-ski?resort=alpensia'
    },
    {
        id: 7,
        type: 'shuttle',
        partner: 'Phoenix',
        title: '휘닉스 스노우 파크',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: phoenixImg,
        url: 'https://phoenix.rideus.net/en/phoenix'
    },
    {
        id: 8,
        type: 'private',
        partner: 'Phoenix',
        title: '휘닉스 스노우 파크',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.11.22 ~ 2026.02.28',
        features: ['평창'],
        image: phoenixImg,
        url: 'https://booking.triseup.com/k-ski?resort=phoenix'
    },
    {
        id: 9,
        type: 'shuttle',
        partner: 'Welli Hilli',
        title: '웰리힐리파크',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.12.08 ~ 2026.02.28',
        features: ['횡성'],
        image: wellihilliImg,
        url: 'https://wellihilli.rideus.net/en/wellihilli'
    },
    {
        id: 10,
        type: 'private',
        partner: 'Welli Hilli',
        title: '웰리힐리파크',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.12.08 ~ 2026.02.28',
        features: ['횡성'],
        image: wellihilliImg,
        url: 'https://booking.triseup.com/k-ski?resort=welli'
    },
    {
        id: 11,
        type: 'shuttle',
        partner: 'Vivaldi',
        title: '비발디파크',
        description: '노선·정류장 기반 · 시간표 운행',
        period: '2025.12.05 ~ 2026.03.02',
        features: ['홍천'],
        image: leisureHeroImg,
        url: 'https://vivabus.rideus.net/en/vivabus/'
    },
    {
        id: 12,
        type: 'private',
        partner: 'Vivaldi',
        title: '비발디파크',
        description: '원하는 시간·동선 · 단독 이동',
        period: '2025.12.05 ~ 2026.03.02',
        features: ['홍천'],
        image: leisureHeroImg,
        url: 'https://booking.triseup.com/k-ski?resort=vivaldi'
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
            <DetailHeroSection slides={heroSlides} badgePrefix="RIDEUS LEISURE" />
            <main className="flex-grow">
                <CollectionSection
                    title={{ KR: '인기 여행지 컬렉션', EN: 'Popular Collection' }}
                    items={destinations}
                    filters={defaultFilters}
                    highlightType="shuttle"
                    breadcrumb={{ KR: '레저', EN: 'Leisure' }}
                />
            </main>
            <Footer />
        </div>
    );
};

export default LeisureDetails;
