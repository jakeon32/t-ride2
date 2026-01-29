import shuttleImg from '../assets/shuttle_airport.jpg';
import chauffeurImg from '../assets/chauffeur_airport.jpg';
import icnImg from '../assets/ICN_airport.jpg';
import kimpoImg from '../assets/kimpo_airport.jpg';
import heroImg from '../assets/airport_hero.jpg';
import React from 'react';

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

export const heroSlides = [
    {
        id: 0,
        image: heroImg,
        title: <>내 위치에서 공항까지<br />가장 편안한 방법</>,
        desc: <>인천공항·김포공항 24시간 운행<br />100개 이상의 노선으로 주요 거점 연결<br />터미널 바로 앞까지 편안하게 모셔다 드립니다</>,
        buttonText: "지금 예약하기",
        buttonLink: "#"
    },
    {
        id: 1,
        image: shuttleImg,
        title: <>공항 셔틀버스</>,
        desc: <>정해진 시간표와 노선으로 운행되는 경제적인 선택<br />주요 거점 경유, 1-2인 여행객에게 최적<br />15,000원부터 시작하는 합리적인 가격</>,
        buttonText: "셔틀 예약하기",
        buttonLink: "#"
    },
    {
        id: 2,
        image: chauffeurImg,
        title: <>프라이빗 이동 서비스</>,
        desc: <>전용 차량과 전문 기사가 함께하는 Door-to-Door<br />공항 입국장 미팅부터 목적지 직행까지<br />단독 이동으로 짐과 유아 동반 고객도 편리하게</>,
        buttonText: "프라이빗 예약하기",
        buttonLink: "#"
    }
];

export const destinations: Destination[] = [
    {
        id: 1,
        type: 'shuttle',
        airport: 'ICN',
        title: '인천공항 ↔ 서울 셔틀',
        description: '노선·정류장 기반 · 시간표 운행',
        route: '강남·홍대·명동·여의도 경유',
        interval: '15분 간격',
        duration: '약 60분 소요',
        schedule: '첫차 05:00 / 막차 23:00',
        price: '15,000원~',
        image: icnImg
    },
    {
        id: 2,
        type: 'private',
        airport: 'ICN',
        title: '인천공항 프라이빗 밴(전용)',
        description: '원하는 시간·동선 · 단독 이동',
        route: 'Door-to-Door 맞춤형 서비스',
        interval: '고객 원하는 시간 출발',
        duration: '최단 경로 이동',
        schedule: '24시간 운영',
        price: '80,000원~',
        capacity: '최대 7인 탑승 가능',
        image: icnImg
    },
    {
        id: 3,
        type: 'shuttle',
        airport: 'GMP',
        title: '김포공항 ↔ 서울 셔틀',
        description: '노선·정류장 기반 · 시간표 운행',
        route: '강남·여의도·신촌·홍대 경유',
        interval: '20분 간격',
        duration: '약 40분 소요',
        schedule: '첫차 05:30 / 막차 22:30',
        price: '12,000원~',
        image: kimpoImg
    },
    {
        id: 4,
        type: 'private',
        airport: 'GMP',
        title: '김포공항 프라이빗 밴(전용)',
        description: '원하는 시간·동선 · 단독 이동',
        route: 'Door-to-Door 맞춤형 서비스',
        interval: '고객 원하는 시간 출발',
        duration: '최단 경로 이동',
        schedule: '24시간 운영',
        price: '60,000원~',
        capacity: '최대 7인 탑승 가능',
        image: kimpoImg
    },
    {
        id: 5,
        type: 'shuttle',
        airport: 'ICN',
        title: '인천공항 ↔ 경기 셔틀',
        description: '주요 거점 연결 · 편안한 이동',
        route: '수원·분당·일산·판교 경유',
        interval: '30분 간격',
        duration: '약 80분 소요',
        schedule: '첫차 06:00 / 막차 22:00',
        price: '18,000원~',
        image: icnImg
    },
];

export const uspItems = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: '24시간 운행',
        line1: '인천/김포공항',
        line2: '주요 거점 연결',
        line3: '15분 간격 출발'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: '합리적인 가격',
        line1: '셔틀버스',
        line2: '15,000원~',
        line3: '프라이빗 밴 80,000원~'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: '넉넉한 공간',
        line1: '대형 캐리어',
        line2: '+ 기내 수하물',
        line3: '유아동반 편의 시설'
    }
];

export const whyChooseItems = [
    {
        title: '주차비 부담 없이',
        desc: '비싼 공항 주차료 걱정은 이제 그만. 터미널 바로 앞까지 편안하게 모셔다 드립니다.'
    },
    {
        title: '환승 스트레스 없이',
        desc: '복잡한 대중교통 갈아타기 없이 직행. 짐 들고 계단 오르내릴 필요 없습니다.'
    },
    {
        title: '넉넉한 수하물 공간',
        desc: '대형 캐리어와 여행 짐 걱정 없이. 추가 요금 부담 없는 수하물 허용.'
    },
    {
        title: '유연한 예약 변경',
        desc: '항공 스케줄 변경에도 유연하게 대응. Standard 티켓은 무료 변경 가능.'
    },
    {
        title: '실시간 차량 추적',
        desc: 'T-Ride 앱으로 차량 위치 실시간 확인. 도착 알림으로 안심하고 준비하세요.'
    }
];

export const quickLinks = [
    { icon: '📍', title: '정류장 찾기', desc: '가까운 탑승 위치 확인' },
    { icon: '📅', title: '시간표 보기', desc: '노선별 출발 시간 확인' },
    { icon: '📋', title: '예약 관리', desc: '예약 확인 및 변경' },
    { icon: '❓', title: 'FAQ', desc: '자주 묻는 질문' }
];
