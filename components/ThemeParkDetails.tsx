import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import DetailHeroSection from './shared/DetailHeroSection';
import CollectionSection, { CollectionItem, FilterOption } from './shared/CollectionSection';

// Local Asset Images
import heroImg from '../assets/shuttle_everland 1.webp';
import familyVanImg from '../assets/private_van_family 1.webp';

const ThemeParkDetails: React.FC = () => {
    const { lang } = useLanguage();

    const filters: FilterOption[] = [
        { value: 'all', label: 'ALL' },
        { value: 'shuttle', label: 'SHUTTLE' },
        { value: 'private', label: 'PRIVATE' },
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    // Wait, I can't just define heroSlides partially. I need to replace the whole file content or blocks.
    // I'll rewrite the whole component body basically.

    const heroSlides = [
        {
            id: 0,
            title: lang === 'KR' ? <>환상의 나라로 떠나는<br />설레는 여정</> : <>Exciting Journey<br />to the Land of Fantasy</>,
            desc: lang === 'KR' ? <>에버랜드까지 편안하게.<br />오픈런부터 폐장까지 체력 걱정 없이 즐기세요.</> : <>Travel comfortably to Everland.<br />Enjoy from opening to closing without fatigue.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 1,
            image: heroImg,
            title: lang === 'KR' ? <>편리한 셔틀버스</> : <>Convenient Shuttle Bus</>,
            desc: lang === 'KR' ? <>서울 주요 역에서 에버랜드까지 직행 셔틀.<br />개장 시간에 맞춰 도착하세요.</> : <>Direct shuttle from major Seoul stations to Everland.<br />Arrive right at opening time.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        },
        {
            id: 2,
            image: familyVanImg,
            title: lang === 'KR' ? <>가족형 프라이빗 밴</> : <>Private Family Van</>,
            desc: lang === 'KR' ? <>아이들과 함께하는 이동도 편안하게.<br />카시트 제공 및 유모차 적재 가능한 대형 밴.</> : <>Comfortable travel with kids.<br />Large vans with car seats and stroller storage.</>,
            buttonText: lang === 'KR' ? "목적지 찾아보기" : "Find Destinations",
            buttonLink: "#collection-section"
        }
    ];

    const destinations: CollectionItem[] = [
        {
            id: 1,
            type: 'shuttle',
            partner: 'Rideus',
            title: { KR: '에버랜드 왕복 셔틀버스', EN: 'Everland Round-trip Shuttle' },
            description: { KR: '동대문역사문화공원역, 명동역, 서울역, 종로3가역, 합정역, 홍대입구역에서 매일 출발!', EN: 'Daily departures from DDP, Myeongdong, Seoul Stn, Jongno 3-ga, Hapjeong, Hongdae!' },
            features: [{ KR: '용인', EN: 'Yongin' }],
            image: heroImg,
            url: 'https://everland.rideus.net/en/everland/page/everland'
        },
        {
            id: 2,
            type: 'private',
            partner: 'Rideus',
            title: { KR: '에버랜드 프라이빗 이동', EN: 'Everland Private Transfer' },
            description: { KR: '우리 가족끼리만 편안하게. 집 앞에서 에버랜드 정문까지 한 번에 이동하세요. 카시트 무료 제공.', EN: 'Comfort for your family only. Door-to-door service to Everland gate. Free car seat.' },
            features: [{ KR: '용인', EN: 'Yongin' }],
            image: familyVanImg,
            url: 'https://link.triseup.com/everland?booking=new'
        }
    ];

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
