import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shuttle_concert 1.webp';
import concertImg from '../assets/shuttle_concert 1.webp';
import festivalImg from '../assets/shuttle_concert 1.webp'; // Reusing for consistency

const heroSlides = [
    {
        id: 0,
        image: heroImg,
        title: <>감동의 순간으로 향하는<br />쾌적한 이동</>,
        desc: <>콘서트, 페스티벌, 전시회까지.<br />주차 전쟁 없이 공연의 여운만 가득한 귀갓길.</>,
        buttonText: "이동편 예약",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: concertImg,
        title: <>공연장 직행 셔틀</>,
        desc: <>인스파이어 아레나, 고척돔 등 주요 공연장으로 향하는 팬 맞춤형 셔틀.</>,
        buttonText: "셔틀 예약하기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: heroImg,
        title: <>VVIP 의전 서비스</>,
        desc: <>중요한 행사나 VIP 초대에는 품격 있는 의전 차량 서비스를 이용하세요.</>,
        buttonText: "의전 예약하기",
        buttonLink: "#collection-section"
    }
];

const destinations = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Inspire Arena',
        title: '인스파이어 아레나 셔틀/픽업',
        description: '영종도의 핫플레이스, 편안한 관람을 위한 이동',
        period: '2025.03.01 ~ 상시운행',
        features: ['영종도'],
        image: concertImg
    },
    {
        id: 2,
        type: 'private',
        partner: 'Gocheok Dome',
        title: '고척 스카이돔 프라이빗 밴',
        description: '야구 경기부터 콘서트까지, 복잡한 주차 걱정 해결',
        period: '2025.03.01 ~ 상시운행',
        features: ['구로'],
        image: concertImg
    },
    {
        id: 3,
        type: 'shuttle',
        partner: 'KSPO Dome',
        title: 'KSPO DOME (체조경기장)',
        description: '올림픽공원의 열기를 그대로, 편안한 귀가',
        period: '2025.03.01 ~ 상시운행',
        features: ['송파'],
        image: concertImg
    },
    {
        id: 4,
        type: 'shuttle',
        partner: 'Waterbomb',
        title: '워터밤 페스티벌 셔틀',
        description: '흠뻑 젖어도 괜찮아요, 쾌적한 셔틀 이동',
        period: '2026.06.01 ~ 2026.08.31',
        features: ['서울'],
        image: festivalImg
    },
    {
        id: 5,
        type: 'private',
        partner: 'Seoul Arts Center',
        title: '예술의전당 픽업 서비스',
        description: '고품격 공연에 어울리는 프리미엄 의전',
        period: '2025.03.01 ~ 상시운행',
        features: ['서초'],
        image: heroImg
    },
];

const filters: FilterOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'shuttle', label: 'SHUTTLE' },
    { value: 'private', label: 'PRIVATE' },
];

const EventDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                <DetailHeroSection
                    slides={heroSlides}
                    badgePrefix="RIDEUS EVENT"
                />

                <CollectionSection
                    title={{ KR: '공연/이벤트 컬렉션', EN: 'Event Collection' }}
                    items={destinations}
                    filters={filters}
                    highlightType="shuttle"
                    breadcrumb={{ KR: '공연/이벤트', EN: 'Events' }}
                />
            </main>

            <Footer />
        </div>
    );
};

export default EventDetails;
