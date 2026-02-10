import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StaticDetailHero from '../shared/StaticDetailHero';
import { useLanguage } from '../../contexts/LanguageContext';
import ResortCollection from './ResortCollection';
import Container from '../shared/Container';
import { popularResorts } from '../../data/leisureResorts';
import phoenixImg from '../../assets/phoenixpark.webp';
import { Link } from 'react-router-dom';

const PhoenixPyeongchang: React.FC = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const otherResorts = popularResorts.filter(resort => !resort.name.KR.includes("휘닉스"));

    const heroSlides = [
        {
            id: 0,
            image: phoenixImg,
            title: lang === 'KR' ? "프리스타일 라이더의 성지" : "Sanctuary for Freestyle Riders",
            desc: lang === 'KR'
                ? <>총 18면의 슬로프 중 6면이 프리스타일 스키 & 스노보드 공식 경기장.<br />보더와 프리스타일 라이더에게 최적화된 환경.</>
                : <>6 out of 18 slopes are official freestyle ski & snowboard competition venues.<br />Optimized environment for boarders and freestyle riders.</>
        },
        {
            id: 1,
            image: phoenixImg,
            title: lang === 'KR' ? "다양한 파크 아이템" : "Various Park Items",
            desc: lang === 'KR'
                ? <>하프파이프, 빅에어, 다양한 레일과 박스까지.<br />실력을 키우고 도전할 수 있는 최고의 환경.</>
                : <>Halfpipe, Big Air, various rails and boxes.<br />The best environment to improve your skills and challenge yourself.</>
        },
        {
            id: 2,
            image: phoenixImg,
            title: lang === 'KR' ? "리조트형 복합 시설" : "Resort Complex Facilities",
            desc: lang === 'KR'
                ? <>콘도, 호텔, 다이닝 시설까지 완비.<br />스키 후에도 이어지는 편안한 휴식.</>
                : <>Complete with condos, hotels, and dining facilities.<br />Comfortable relaxation continues after skiing.</>
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            {/* Breadcrumbs Overlay */}
            <div className="hidden md:block absolute top-24 left-0 w-full z-20 pointer-events-none">
                <Container>
                    <nav className="flex items-center text-sm text-white/80 font-medium pointer-events-auto drop-shadow-md">
                        <Link to="/" className="hover:text-white transition-colors">{lang === 'KR' ? '홈' : 'Home'}</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <Link to="/leisure" className="hover:text-white transition-colors">{lang === 'KR' ? '레저' : 'Leisure'}</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <Link to="/leisure" className="hover:text-white transition-colors">{lang === 'KR' ? '스키 리조트' : 'Ski Resort'}</Link>
                        <span className="mx-2 opacity-60">&gt;</span>
                        <span className="text-white">{lang === 'KR' ? '휘닉스 평창' : 'Phoenix Pyeongchang'}</span>
                    </nav>
                </Container>
            </div>

            <StaticDetailHero
                slides={heroSlides}
                className="h-[30vh] md:h-[30vh]"
                mainTitle={lang === 'KR' ? "휘닉스 스노우 파크 (평창)" : "Phoenix Snow Park (Pyeongchang)"}
                description={lang === 'KR'
                    ? <>총 18면의 슬로프 중 6면이 프리스타일 스키 & 스노보드 공식 경기장으로,<br className="hidden md:block" /> 보더·프리스타일 라이더에게 인기 있는 리조트형 스키장입니다.</>
                    : <>With 6 out of 18 slopes being official freestyle ski & snowboard competition venues,<br className="hidden md:block" /> it is a resort-type ski resort popular among boarders and freestyle riders.</>}
            />

            <main className="flex-grow">
                {/* Transport Options Section */}
                <section id="transport-options" className="relative z-20 bg-white py-24 border-b border-gray-100">
                    <Container>
                        <div className="mb-20 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">Transport Options</span>
                            <h2 className="text-h2 text-gray-900 mb-6 tracking-tight">
                                {lang === 'KR' ? '휘닉스 평창 이동 서비스' : 'Phoenix Pyeongchang Transfer Services'}
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                                {lang === 'KR'
                                    ? <>서울·인천에서 휘닉스 평창까지. <br className="hidden md:block" /> 가장 쾌적하고 편안한 이동 방법을 선택하세요.</>
                                    : <>From Seoul/Incheon to Phoenix Pyeongchang. <br className="hidden md:block" /> Choose the most comfortable and convenient way to travel.</>}
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
                                <h3 className="text-h3 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{lang === 'KR' ? '셔틀버스' : 'Shuttle Bus'}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                    {lang === 'KR'
                                        ? <>정해진 시간에 출발하는 직행 전용 셔틀.<br />가장 합리적인 가격으로 이동하세요.</>
                                        : <>Direct shuttle departing at scheduled times.<br />Travel at the most reasonable price.</>}
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '서울 주요 지역 · 인천공항 직행' : 'Direct from Major Seoul Areas & Incheon Airport'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '스키장 앞 하차 (장비 적재 가능)' : 'Drop-off at Ski Resort (Equipment Loading Available)'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 text-blue-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '성수기 좌석 보장 (사전 예약 시)' : 'Guaranteed Seats in Peak Season (with Reservation)'}</span>
                                    </li>
                                </ul>
                                <div className="relative z-10">
                                    <a
                                        href="https://phoenix.rideus.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                                    >
                                        {lang === 'KR' ? '셔틀버스 예약하기' : 'Book Shuttle Bus'}
                                    </a>
                                </div>
                            </div>

                            {/* Private Car Card */}
                            <div className="group border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-gray-900/30 hover:shadow-2xl hover:shadow-gray-900/5 transition-all duration-500 flex flex-col h-full bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                                </div>
                                <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide">
                                    PRIVATE VAN/SEDAN
                                </span>
                                <h3 className="text-h3 text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{lang === 'KR' ? '프라이빗 전용 차량' : 'Private Transfer'}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                    {lang === 'KR'
                                        ? <>우리 일행만 탑승하는 단독 차량.<br />집 앞에서 스키장까지 Door-to-Door.</>
                                        : <>Exclusive vehicle for your group only.<br />Door-to-Door from your home to the ski resort.</>}
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '원하는 시간·장소 픽업 & 샌딩' : 'Pickup & Drop-off at Desired Time & Place'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '인원·짐에 맞는 차종 선택 (밴/세단)' : 'Vehicle Selection based on Passengers & Luggage (Van/Sedan)'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-100 p-1 rounded-full mr-3 mt-0.5 text-gray-800">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{lang === 'KR' ? '유연한 일정 조정 가능' : 'Flexible Schedule Adjustment'}</span>
                                    </li>
                                </ul>
                                <div className="relative z-10">
                                    <a
                                        href="https://booking.triseup.com/k-ski?resort=phoenix"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center border-2 border-gray-900 text-gray-900 font-bold py-4 rounded-xl hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
                                    >
                                        {lang === 'KR' ? '프라이빗 이동 예약하기' : 'Book Private Transfer'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Recommendations Section */}
                <ResortCollection
                    title={{ KR: "다른 스키장 이동 서비스도 둘러보세요", EN: "Explore Other Ski Resort Transfers" }}
                    items={otherResorts}
                    firstSection={false}
                    mode="marquee"
                />

                {/* Footer Info Section */}
                <section className="bg-slate-50 py-16 border-t border-slate-200">
                    <Container className="text-center md:text-left">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">LOCATION</h4>
                                <p className="text-slate-600 font-light">
                                    {lang === 'KR'
                                        ? <>강원도 평창군 봉평면 태기로 174<br />휘닉스 평창</>
                                        : <>174 Taegi-ro, Bongpyeong-myeon, Pyeongchang-gun, Gangwon-do<br />Phoenix Pyeongchang</>}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">SEASON</h4>
                                <p className="text-slate-600 font-light">
                                    {lang === 'KR'
                                        ? <>11월 하순 ~ 4월 초<br />(기상 상황에 따라 변동 가능)</>
                                        : <>Late November ~ Early April<br />(Subject to weather conditions)</>}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">NOTICE</h4>
                                <p className="text-slate-600 font-light">
                                    {lang === 'KR'
                                        ? <>예약 확정 후 발송되는 알림톡을 통해<br />탑승 장소와 시간을 정확히 확인해주세요.</>
                                        : <>Please check the exact pickup location and time<br />via the notification sent after booking confirmation.</>}
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PhoenixPyeongchang;
