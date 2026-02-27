export interface EventItem {
    id: number;
    date: string;
    name: { KR: string; EN: string };
    venue: { KR: string; EN: string };
    type: 'concert' | 'festival';
    ticketLink?: string;
    cast?: string;
    price?: string;
    notice?: string;
    image?: string;
    runningTime?: string;
    ageLimit?: string;
    organizer?: string;
}

// Import custom event images
import cxmImage from '../assets/event_cxm.webp';
import bcombatImage from '../assets/event_black_combat.webp';
import hoshinoImage from '../assets/event_hoshino.webp';
import seikoImage from '../assets/event_seiko.webp';
import btsImage from '../assets/event_bts.webp';
import tukiImage from '../assets/event_tuki.webp';

export const eventsData: EventItem[] = [
    {
        id: 1,
        date: '01.23-25',
        name: { KR: 'CxM [DOUBLE UP] LIVE PARTY', EN: 'CxM [DOUBLE UP] LIVE PARTY' },
        venue: { KR: '인스파이어 아레나', EN: 'Inspire Arena' },
        type: 'concert',
        ticketLink: 'https://tickets.interpark.com/goods/25017211',
        cast: '세븐틴(SEVENTEEN) 에스쿱스(S.COUPS), 민규(MINGYU)',
        price: '전석 143,000원',
        image: cxmImage,
        runningTime: '약 120분 (예상)',
        ageLimit: '만 9세 이상 관람가',
        organizer: '플레디스 엔터테인먼트, 하이브(HYBE)'
    },
    {
        id: 2,
        date: '01.31',
        name: { KR: 'BLACK COMBAT XVI: EXODUS', EN: 'BLACK COMBAT XVI: EXODUS' },
        venue: { KR: '인스파이어 아레나', EN: 'Inspire Arena' },
        type: 'festival',
        ticketLink: 'https://tickets.interpark.com/goods/25018630',
        cast: '블랙컴뱃',
        price: '최고 500,000 / 최저 35,000',
        image: bcombatImage,
        runningTime: '해당없음',
        ageLimit: '전체관람가',
        organizer: '주식회사 이데아파라곤'
    },
    {
        id: 3,
        date: '02.06',
        name: { KR: '호시노 겐 내한공연', EN: 'Gen Hoshino Live in Korea' },
        venue: { KR: '인스파이어 아레나', EN: 'Inspire Arena' },
        type: 'concert',
        ticketLink: 'https://tickets.interpark.com/goods/25017416',
        cast: '호시노 겐',
        price: 'R 165,000 / S 143,000 / A 121,000',
        image: hoshinoImage,
        runningTime: '120분',
        ageLimit: '7세 이상 관람가능',
        organizer: '(주)프라이빗커브, 카카오엔터테인먼트'
    },
    {
        id: 4,
        date: '02.22',
        name: { KR: '마츠다 세이코 콘서트', EN: 'SEIKO MATSUDA Concert' },
        venue: { KR: '인스파이어 아레나', EN: 'Inspire Arena' },
        type: 'concert',
        ticketLink: 'https://tickets.interpark.com/contents/notice/detail/11791',
        cast: '마츠다 세이코',
        price: 'VIP 187,000 / R 154,000',
        image: seikoImage,
        runningTime: '120분 (인터미션 없음)',
        ageLimit: '만 7세 이상 관람가능',
        organizer: '인스파이어 엔터테인먼트 리조트, 후프 글로벌'
    },
    {
        id: 5,
        date: '04.04-05',
        name: { KR: '세븐틴 월드투어 앙코르', EN: 'SEVENTEEN WORLD TOUR ENCORE' },
        venue: { KR: '인천 아시아드 주경기장', EN: 'Incheon Asiad Main Stadium' },
        type: 'concert',
        cast: '세븐틴',
        price: 'VIP 198,000 / R 154,000 / S 132,000',
        notice: '01.21 일정 공개 → 판매 페이지 미오픈'
    },
    {
        id: 6,
        date: '04.09-12',
        name: { KR: '방탄소년단 월드투어 고양', EN: 'BTS WORLD TOUR GOYANG' },
        venue: { KR: '고양종합운동장', EN: 'Goyang Stadium' },
        type: 'concert',
        ticketLink: 'https://tickets.interpark.com/goods/26000547',
        cast: '방탄소년단',
        price: '사운드체크 264,000 / R 220,000 / S 298,000',
        image: btsImage,
        runningTime: '120분',
        ageLimit: '만 9세 이상 관람가',
        organizer: '빅히트뮤직·하이브, 주식회사 놀유니버스'
    },
    {
        id: 7,
        date: '04.11-12',
        name: { KR: 'tuki. 아시아 투어 서울', EN: 'tuki. 1ST ASIA TOUR SEOUL' },
        venue: { KR: '인스파이어 아레나', EN: 'Inspire Arena' },
        type: 'concert',
        ticketLink: 'https://tickets.interpark.com/goods/25016435',
        cast: 'tuki. (후쿠토미 츠키)',
        price: 'VIP 154,000 / R 143,000',
        image: tukiImage,
        runningTime: '100분',
        ageLimit: '만 8세 이상 관람가',
        organizer: '주식회사 레드슬리퍼스, iTONY ENTERTAINMENT 등'
    },
];
