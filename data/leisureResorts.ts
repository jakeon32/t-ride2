
import yongpyongImg from '../assets/yongpyung.webp';
import high1Img from '../assets/high1.webp';
import phoenixImg from '../assets/phoenixpark.webp';
import wellihilliImg from '../assets/wellihillipark.webp';
import skiBannerImg from '../assets/ski_banner_img.webp'; // Used for Alpensia in original
import leisureHeroImg from '../assets/Leisure Hero Image.webp'; // Used for Vivaldi in original
import leisurePrivateImg from '../assets/Private Service_Leisure.webp'; // Placeholder for Ramada

export interface ResortData {
    type: string;
    name: string;
    region: string;
    distanceText: string;
    tagline: string;
    tags: string[];
    detailUrl: string;
    image: string;
}

export const popularResorts: ResortData[] = [
    {
        type: "ski_resort",
        name: "모나 용평 스키 리조트",
        region: "강원도 평창",
        distanceText: "서울 기준 약 2시간 30분",
        tagline: "국내 최초이자 최대 규모의 스키 리조트로, 28개 슬로프와 호텔·콘도·골프·워터파크까지 갖춘 사계절 레저 복합 단지입니다.",
        tags: ["1박 2일 추천", "가족·상급자 모두"],
        detailUrl: "/leisure/mona-yongpyong",
        image: yongpyongImg
    },
    {
        type: "ski_resort",
        name: "하이원 스키 리조트",
        region: "강원도 정선",
        distanceText: "서울 기준 약 3시간",
        tagline: "해발 1,300m대 고도와 3개의 정상에서 내려오는 롱런 코스로, 상급자부터 초보까지 다양한 슬로프를 갖춘 강원권 대표 스키 리조트입니다.",
        tags: ["설질·뷰 강점", "1박 2일 추천"],
        detailUrl: "/leisure/high1",
        image: high1Img
    },
    {
        type: "ski_resort",
        name: "평창 알펜시아 리조트",
        region: "강원도 평창",
        distanceText: "서울 기준 약 2시간 30분",
        tagline: "2018 평창 동계올림픽 경기장을 품은 리조트로, 스키·점프 경기장과 호텔·워터파크가 모여 있는 가족 친화형 겨울 여행지입니다.",
        tags: ["가족여행", "올림픽 시설"],
        detailUrl: "/leisure/alpensia",
        image: skiBannerImg
    },
    {
        type: "ski_resort",
        name: "휘닉스 스노우 파크 (평창)",
        region: "강원도 평창",
        distanceText: "서울 기준 약 2시간 30분",
        tagline: "스노우 파크와 다양한 파크 아이템으로 보더·프리스타일 라이더에게 인기 있는 리조트형 스키장입니다.",
        tags: ["보드 친화", "파크·점프 강점"],
        detailUrl: "/leisure/phoenix-pyeongchang",
        image: phoenixImg
    },
    {
        type: "ski_resort",
        name: "웰리힐리파크 스키장",
        region: "강원도 횡성",
        distanceText: "서울 기준 약 1시간 40분",
        tagline: "서울·수도권에서 비교적 가까운 강원권 스키장으로, 다양한 파크 코스와 콘도형 숙박 시설을 갖춘 리조트입니다.",
        tags: ["근교 1박·당일", "보드·파크"],
        detailUrl: "/leisure/wellihilli-park",
        image: wellihilliImg
    },
    {
        type: "ski_resort",
        name: "비발디파크 스키월드",
        region: "강원도 홍천",
        distanceText: "서울 기준 약 1시간 20분",
        tagline: "수도권에서 가장 가까운 규모급 스키장 중 하나로, 야간 운영과 다양한 숙박·워터파크 시설로 유명한 가족·커플 인기 리조트입니다.",
        tags: ["근교 당일치기", "야간스키 인기"],
        detailUrl: "/leisure/vivaldi-park",
        image: leisureHeroImg
    },
    {
        type: "resort_ski_access",
        name: "라마다 호텔 & 스위트 평창",
        region: "강원도 평창",
        distanceText: "서울 기준 약 2시간 30분",
        tagline: "평창 주요 스키장 인근에 위치한 리조트형 호텔로, 가족·그룹 여행의 베이스캠프 역할을 하기 좋은 숙소입니다.",
        tags: ["스키 연계 숙소", "가족·그룹 추천"],
        detailUrl: "/leisure/ramada-pyeongchang",
        image: leisurePrivateImg
    }
];
