import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import ResortCollection from './leisure/ResortCollection';
import { popularResorts } from '../data/leisureResorts';
import leisureHeroImg from '../assets/Leisure Hero Image.webp';
import leisureShuttleImg from '../assets/Shuttle Service_Leisure.webp';
import leisurePrivateImg from '../assets/Private Service_Leisure.webp';

const heroSlides = [
    {
        id: 0,
        image: leisureHeroImg,
        title: <>즐거움을 향한<br />가장 편안한 이동</>,
        desc: <>골프, 스키, 관광까지.<br />목적과 일정에 맞는 최적의 이동 서비스를 선택하세요.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: leisureShuttleImg,
        title: <>셔틀 서비스</>,
        desc: <>주요 골프장, 스키 리조트, 테마파크를 연결하는 정기 셔틀 서비스입니다.<br />합리적인 요금으로 편안하게 이동하세요.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: leisurePrivateImg,
        title: <>프라이빗 이동 서비스</>,
        desc: <>전용 차량과 전문 기사가 동행하는 완전 맞춤형 레저 이동 서비스입니다.<br />원하는 시간에 원하는 장소로, 자유로운 일정 구성이 가능합니다.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
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
            <DetailHeroSection
                slides={heroSlides}
                badgePrefix="RIDEUS LEISURE"
                align="left"
            />
            <main className="flex-grow">
                <ResortCollection
                    id="collection-section"
                    title={{ KR: '인기 여행지 컬렉션', EN: 'Popular Destinations Collection' }}
                    items={popularResorts}
                    breadcrumb={{ KR: '레저', EN: 'Leisure' }}
                />
            </main>
            <Footer />
        </div>
    );
};

export default LeisureDetails;
