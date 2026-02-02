import shuttleImg from '../assets/shuttle_airport.jpg';
import chauffeurImg from '../assets/chauffeur_airport.jpg';
import icnImg from '../assets/ICN_airport.jpg';
import kimpoImg from '../assets/kimpo_airport.jpg';
import heroImg from '../assets/airport_hero.jpg';
import React from 'react';

export type Language = 'KR' | 'EN';

export interface Destination {
    id: number;
    type: 'shuttle' | 'private';
    airport: 'ICN' | 'GMP';
    title: string;
    description: string;
    route: string;
    interval: string;
    duration: string;
    schedule: string;
    price: string;
    capacity?: string;
    image: string;
}

export const getHeroSlides = (lang: Language) => [
    {
        id: 0,
        image: heroImg,
        title: lang === 'KR'
            ? <>내 위치에서 공항까지<br />가장 편안한 방법</>
            : <>Most Comfortable Way<br />From Your Door to Airport</>,
        desc: lang === 'KR'
            ? <>인천공항·김포공항 24시간 운행<br />100개 이상의 노선으로 주요 거점 연결<br />터미널 바로 앞까지 편안하게 모셔다 드립니다</>
            : <>24/7 Service to Incheon & Gimpo Airports<br />Connecting major hubs with over 100 routes<br />We take you comfortably right to the terminal door</>,
        buttonText: lang === 'KR' ? "지금 예약하기" : "Book Now",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: shuttleImg,
        title: lang === 'KR' ? <>공항 셔틀버스</> : <>Airport Shuttle Bus</>,
        desc: lang === 'KR'
            ? <>정해진 시간표와 노선으로 운행되는 경제적인 선택<br />주요 거점 경유, 1-2인 여행객에게 최적<br />15,000원부터 시작하는 합리적인 가격</>
            : <>Economical choice with fixed schedules and routes<br />Ideal for 1-2 travelers, via major hubs<br />Reasonable prices starting from 15,000 KRW</>,
        buttonText: lang === 'KR' ? "셔틀 예약하기" : "Book Shuttle",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: chauffeurImg,
        title: lang === 'KR' ? <>프라이빗 이동 서비스</> : <>Private Transfer Service</>,
        desc: lang === 'KR'
            ? <>전용 차량과 전문 기사가 함께하는 Door-to-Door<br />공항 입국장 미팅부터 목적지 직행까지<br />단독 이동으로 짐과 유아 동반 고객도 편리하게</>
            : <>Door-to-Door service with private vehicle and chauffeur<br />From airport arrival meeting to direct destination<br />Convenient for heavy luggage and traveling with infants</>,
        buttonText: lang === 'KR' ? "프라이빗 예약하기" : "Book Private",
        buttonLink: "#collection-section"
    }
];

export const getDestinations = (lang: Language): Destination[] => [
    {
        id: 1,
        type: 'shuttle',
        airport: 'ICN',
        title: lang === 'KR' ? '인천공항 ↔ 서울 셔틀' : 'ICN Airport ↔ Seoul Shuttle',
        description: lang === 'KR' ? '노선·정류장 기반 · 시간표 운행' : 'Route/Stop based · Timetable Service',
        route: lang === 'KR' ? '강남·홍대·명동·여의도 경유' : 'Via Gangnam, Hongdae, Myeongdong, Yeouido',
        interval: lang === 'KR' ? '15분 간격' : 'Every 15 mins',
        duration: lang === 'KR' ? '약 60분 소요' : 'Approx. 60 mins',
        schedule: lang === 'KR' ? '첫차 05:00 / 막차 23:00' : 'First 05:00 / Last 23:00',
        price: lang === 'KR' ? '15,000원~' : 'From 15,000 KRW',
        image: icnImg
    },
    {
        id: 2,
        type: 'private',
        airport: 'ICN',
        title: lang === 'KR' ? '인천공항 프라이빗 밴(전용)' : 'ICN Airport Private Van',
        description: lang === 'KR' ? '원하는 시간·동선 · 단독 이동' : 'Any Time/Route · Private Transfer',
        route: lang === 'KR' ? 'Door-to-Door 맞춤형 서비스' : 'Door-to-Door Custom Service',
        interval: lang === 'KR' ? '고객 원하는 시간 출발' : 'Departure at requested time',
        duration: lang === 'KR' ? '최단 경로 이동' : 'Fastest route',
        schedule: lang === 'KR' ? '24시간 운영' : '24 Hours Operation',
        price: lang === 'KR' ? '80,000원~' : 'From 80,000 KRW',
        capacity: lang === 'KR' ? '최대 7인 탑승 가능' : 'Max 7 Passengers',
        image: icnImg
    },
    {
        id: 3,
        type: 'shuttle',
        airport: 'GMP',
        title: lang === 'KR' ? '김포공항 ↔ 서울 셔틀' : 'Gimpo Airport ↔ Seoul Shuttle',
        description: lang === 'KR' ? '노선·정류장 기반 · 시간표 운행' : 'Route/Stop based · Timetable Service',
        route: lang === 'KR' ? '강남·여의도·신촌·홍대 경유' : 'Via Gangnam, Yeouido, Sinchon, Hongdae',
        interval: lang === 'KR' ? '20분 간격' : 'Every 20 mins',
        duration: lang === 'KR' ? '약 40분 소요' : 'Approx. 40 mins',
        schedule: lang === 'KR' ? '첫차 05:30 / 막차 22:30' : 'First 05:30 / Last 22:30',
        price: lang === 'KR' ? '12,000원~' : 'From 12,000 KRW',
        image: kimpoImg
    },
    {
        id: 4,
        type: 'private',
        airport: 'GMP',
        title: lang === 'KR' ? '김포공항 프라이빗 밴(전용)' : 'Gimpo Airport Private Van',
        description: lang === 'KR' ? '원하는 시간·동선 · 단독 이동' : 'Any Time/Route · Private Transfer',
        route: lang === 'KR' ? 'Door-to-Door 맞춤형 서비스' : 'Door-to-Door Custom Service',
        interval: lang === 'KR' ? '고객 원하는 시간 출발' : 'Departure at requested time',
        duration: lang === 'KR' ? '최단 경로 이동' : 'Fastest route',
        schedule: lang === 'KR' ? '24시간 운영' : '24 Hours Operation',
        price: lang === 'KR' ? '60,000원~' : 'From 60,000 KRW',
        capacity: lang === 'KR' ? '최대 7인 탑승 가능' : 'Max 7 Passengers',
        image: kimpoImg
    },
    {
        id: 5,
        type: 'shuttle',
        airport: 'ICN',
        title: lang === 'KR' ? '인천공항 ↔ 경기 셔틀' : 'ICN Airport ↔ Gyeonggi Shuttle',
        description: lang === 'KR' ? '주요 거점 연결 · 편안한 이동' : 'Major Hub Connections · Comfortable',
        route: lang === 'KR' ? '수원·분당·일산·판교 경유' : 'Via Suwon, Bundang, Ilsan, Pangyo',
        interval: lang === 'KR' ? '30분 간격' : 'Every 30 mins',
        duration: lang === 'KR' ? '약 80분 소요' : 'Approx. 80 mins',
        schedule: lang === 'KR' ? '첫차 06:00 / 막차 22:00' : 'First 06:00 / Last 22:00',
        price: lang === 'KR' ? '18,000원~' : 'From 18,000 KRW',
        image: icnImg
    },
];

export const getUspItems = (lang: Language) => [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: lang === 'KR' ? '24시간 운행' : '24/7 Operation',
        line1: lang === 'KR' ? '인천/김포공항' : 'Incheon/Gimpo Airport',
        line2: lang === 'KR' ? '주요 거점 연결' : 'Major Hub Connections',
        line3: lang === 'KR' ? '15분 간격 출발' : 'Every 15 mins'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: lang === 'KR' ? '합리적인 가격' : 'Reasonable Price',
        line1: lang === 'KR' ? '셔틀버스' : 'Shuttle Bus',
        line2: lang === 'KR' ? '15,000원~' : 'From 15,000 KRW',
        line3: lang === 'KR' ? '프라이빗 밴 80,000원~' : 'Private Van From 80,000 KRW'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: lang === 'KR' ? '넉넉한 공간' : 'Spacious',
        line1: lang === 'KR' ? '대형 캐리어' : 'Large Luggage',
        line2: lang === 'KR' ? '+ 기내 수하물' : '+ Carry-on Items',
        line3: lang === 'KR' ? '유아동반 편의 시설' : 'Child-friendly Facilities'
    }
];

export const getWhyChooseItems = (lang: Language) => [
    {
        title: lang === 'KR' ? '주차비 부담 없이' : 'No Parking Fees',
        desc: lang === 'KR' ? '비싼 공항 주차료 걱정은 이제 그만. 터미널 바로 앞까지 편안하게 모셔다 드립니다.' : 'Forget expensive airport parking fees. We take you comfortably right to the terminal door.'
    },
    {
        title: lang === 'KR' ? '환승 스트레스 없이' : 'No Transfer Stress',
        desc: lang === 'KR' ? '복잡한 대중교통 갈아타기 없이 직행. 짐 들고 계단 오르내릴 필요 없습니다.' : 'Direct service without complex transfers. No need to carry luggage up and down stairs.'
    },
    {
        title: lang === 'KR' ? '넉넉한 수하물 공간' : 'Ample Luggage Space',
        desc: lang === 'KR' ? '대형 캐리어와 여행 짐 걱정 없이. 추가 요금 부담 없는 수하물 허용.' : 'No worries about large luggage. Generous baggage allowance without extra fees.'
    },
    {
        title: lang === 'KR' ? '유연한 예약 변경' : 'Flexible Changes',
        desc: lang === 'KR' ? '항공 스케줄 변경에도 유연하게 대응. Standard 티켓은 무료 변경 가능.' : 'Flexible response to flight schedule changes. Free changes for Standard tickets.'
    },
    {
        title: lang === 'KR' ? '실시간 차량 추적' : 'Real-time Tracking',
        desc: lang === 'KR' ? '라이더스 앱으로 차량 위치 실시간 확인. 도착 알림으로 안심하고 준비하세요.' : 'Check vehicle location in real-time with Riders app. Prepare with peace of mind via arrival alerts.'
    }
];

export const getQuickLinks = (lang: Language) => [
    { icon: '📍', title: lang === 'KR' ? '정류장 찾기' : 'Find Stop', desc: lang === 'KR' ? '가까운 탑승 위치 확인' : 'Check nearest boarding point' },
    { icon: '📅', title: lang === 'KR' ? '시간표 보기' : 'Timetable', desc: lang === 'KR' ? '노선별 출발 시간 확인' : 'Check departure times by route' },
    { icon: '📋', title: lang === 'KR' ? '예약 관리' : 'Manage Booking', desc: lang === 'KR' ? '예약 확인 및 변경' : 'Check & change bookings' },
    { icon: '❓', title: 'FAQ', desc: lang === 'KR' ? '자주 묻는 질문' : 'Frequently Asked Questions' }
];
