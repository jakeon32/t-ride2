import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shuttle_everland 1.webp';
import familyVanImg from '../assets/private_van_family 1.webp';

const destinations: CollectionItem[] = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Rideus',
        title: '에버랜드 왕복 셔틀버스',
        description: '동대문역사문화공원역, 명동역, 서울역, 종로3가역, 합정역, 홍대입구역에서 매일 출발!',
        features: ['용인'],
        image: heroImg,
        url: 'https://everland.rideus.net/en/everland/page/everland'
    },
    {
        id: 2,
        type: 'private',
        partner: 'Rideus',
        title: '에버랜드 프라이빗 이동',
        description: '우리 가족끼리만 편안하게. 집 앞에서 에버랜드 정문까지 한 번에 이동하세요. 카시트 무료 제공.',
        features: ['용인'],
        image: familyVanImg,
        url: 'https://link.triseup.com/everland?booking=new'
    }
];

const heroSlides = [
    {
        id: 0,
        image: heroImg,
        title: <>환상의 나라로 떠나는<br />설레는 여정</>,
        desc: <>에버랜드까지 편안하게.<br />오픈런부터 폐장까지 체력 걱정 없이 즐기세요.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: heroImg,
        title: <>편리한 셔틀버스</>,
        desc: <>서울 주요 역에서 에버랜드까지 직행 셔틀.<br />개장 시간에 맞춰 도착하세요.</>,
        buttonText: "목적지 찾아보기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: familyVanImg,
        title: <>가족형 프라이빗 밴</>,
        desc: <>아이들과 함께하는 이동도 편안하게.<br />카시트 제공 및 유모차 적재 가능한 대형 밴.</>,
        buttonText: "목적지 찾아보기",
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
