import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StaticDetailHero from '../shared/StaticDetailHero';
import ResortCollection from './ResortCollection';
import { popularResorts } from '../../data/leisureResorts';
import wellihilliImg from '../../assets/wellihillipark.webp';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 0,
        image: wellihilliImg,
        title: "수도권에서 가까운 강원권 스키장",
        desc: <>서울·수도권에서 약 1시간 40분 거리.<br />당일치기부터 1박 여행까지 부담 없이 즐기세요.</>
    },
    {
        id: 1,
        image: wellihilliImg,
        title: "다양한 파크 코스",
        desc: <>보더와 프리스타일 라이더를 위한<br />다양한 파크 아이템과 점프대를 갖추고 있습니다.</>
    },
    {
        id: 2,
        image: wellihilliImg,
        title: "콘도형 숙박 시설",
        desc: <>스키장 바로 옆 콘도에서 편안한 휴식.<br />가족, 친구와 함께하는 완벽한 겨울 휴가.</>
    }
];

const WellihilliPark: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const otherResorts = popularResorts.filter(resort => !resort.name.includes("웰리힐리"));

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            {/* Breadcrumbs Overlay */}
            <div className="hidden md:block absolute top-24 left-0 w-full z-20 pointer-events-none">
                <div className="max-w-[1216px] mx-auto px-6 md:px-12">
                    <nav className="flex items-center text-sm text-white/80 font-medium pointer-events-auto drop-shadow-md">
                        <Link to="/" className="hover:text-white transition-colors">홈</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <Link to="/leisure" className="hover:text-white transition-colors">레저</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <Link to="/leisure" className="hover:text-white transition-colors">스키 리조트</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <span className="text-white">웰리힐리파크</span>
                    </nav>
                </div>
            </div>

            <StaticDetailHero
                slides={heroSlides}
                className="h-[30vh] md:h-[30vh]"
                mainTitle="웰리힐리파크 스키장"
                description={<>서울·수도권에서 비교적 가까운 강원권 스키장으로,<br className="hidden md:block" /> 다양한 파크 코스와 콘도형 숙박 시설을 갖춘 리조트입니다.</>}
            />

            <main className="flex-grow">
                {/* Transport Options Section */}
                <section id="transport-options" className="relative z-20 bg-white py-24 border-b border-gray-100">
                    <div className="max-w-[1216px] mx-auto px-6 md:px-12">
                        <div className="mb-20 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">Transport Options</span>
                            <h2 className="text-h2 text-gray-900 mb-6 tracking-tight">
                                웰리힐리파크 이동 서비스
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                                서울·인천에서 웰리힐리파크까지. <br className="hidden md:block" />
                                가장 쾌적하고 편안한 이동 방법을 선택하세요.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Shuttle Bus Card */}
                            <div className="group border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full bg-slate-50/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" /></svg>
                                </div>
                                <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide">
                                    SHUTTLE BUS
                                </span>
                                <h3 className="text-h3 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">셔틀버스</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                    정해진 시간에 출발하는 직행 전용 셔틀.<br />가장 합리적인 가격으로 이동하세요.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">서울 주요 지역 · 인천공항 직행</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">스키장 앞 하차 (장비 적재 가능)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">성수기 좌석 보장 (사전 예약 시)</span>
                                    </li>
                                </ul>
                                <div className="relative z-10">
                                    <a
                                        href="https://wellihilli.rideus.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                                    >
                                        셔틀버스 예약하기
                                    </a>
                                </div>
                            </div>

                            {/* Private Car Card */}
                            <div className="group border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-gray-900/30 hover:shadow-2xl hover:shadow-gray-900/5 transition-all duration-500 flex flex-col h-full bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                                </div>
                                <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide">
                                    PRIVATE VAN/SEDAN
                                </span>
                                <h3 className="text-h3 text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">프라이빗 전용 차량</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                    우리 일행만 탑승하는 단독 차량.<br />집 앞에서 스키장까지 Door-to-Door.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">원하는 시간·장소 픽업 & 샌딩</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">인원·짐에 맞는 차종 선택 (밴/세단)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">유연한 일정 조정 가능</span>
                                    </li>
                                </ul>
                                <div className="relative z-10">
                                    <a
                                        href="https://booking.triseup.com/k-ski?resort=wellihilli"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center border-2 border-gray-900 text-gray-900 font-bold py-4 rounded-xl hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
                                    >
                                        프라이빗 이동 예약하기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommendations Section */}
                <ResortCollection
                    title="다른 스키장 이동 서비스도 둘러보세요"
                    items={otherResorts}
                    firstSection={false}
                    mode="marquee"
                />

                {/* Footer Info Section */}
                <section className="bg-slate-50 py-16 border-t border-slate-200">
                    <div className="max-w-[1216px] mx-auto px-6 md:px-12 text-center md:text-left">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">LOCATION</h4>
                                <p className="text-slate-600 font-light">강원도 횡성군 둔내면 고원로 451<br />웰리힐리파크</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">SEASON</h4>
                                <p className="text-slate-600 font-light">11월 하순 ~ 4월 초<br />(기상 상황에 따라 변동 가능)</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">NOTICE</h4>
                                <p className="text-slate-600 font-light">예약 확정 후 발송되는 알림톡을 통해<br />탑승 장소와 시간을 정확히 확인해주세요.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WellihilliPark;
