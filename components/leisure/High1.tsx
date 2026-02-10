import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StaticDetailHero from '../shared/StaticDetailHero';
import { useLanguage } from '../../contexts/LanguageContext';
import ResortCollection from './ResortCollection';
import Container from '../shared/Container';
import { popularResorts } from '../../data/leisureResorts';
import high1Img from '../../assets/high1.webp';
import { Link } from 'react-router-dom';

const High1: React.FC = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const otherResorts = popularResorts.filter(resort => !resort.name.KR.includes("하이원"));

    const heroSlides = [
        {
            id: 0,
            image: high1Img,
            title: lang === 'KR' ? "해발 1,300m의 파우더 천국" : "Powder Paradise at 1,300m",
            desc: lang === 'KR'
                ? <>3개의 정상에서 이어지는 국내 최장 롱런 코스.<br />하이원만의 깊은 설질과 압도적 스케일을 경험하세요.</>
                : <>The longest run course in Korea connecting 3 peaks.<br />Experience High1's deep snow quality and overwhelming scale.</>
        },
        {
            id: 1,
            image: high1Img,
            title: lang === 'KR' ? "상급자부터 초보까지" : "From Beginners to Experts",
            desc: lang === 'KR'
                ? <>다양한 난이도의 슬로프와 체계적인 코스 설계로<br />모든 레벨의 스키어와 보더를 만족시킵니다.</>
                : <>Satisfying skiers and boarders of all levels<br />with slopes of various difficulties and systematic course design.</>
        },
        {
            id: 2,
            image: high1Img,
            title: lang === 'KR' ? "강원권 대표 리조트" : "Representative Resort of Gangwon",
            desc: lang === 'KR'
                ? <>카지노, 골프, 콘도까지 갖춘 복합 리조트에서<br />스키 시즌의 특별한 휴식을 즐겨보세요.</>
                : <>Enjoy a special break during the ski season<br />at a complex resort equipped with casino, golf, and condos.</>
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
                        <span className="text-white">{lang === 'KR' ? '하이원' : 'High1'}</span>
                    </nav>
                </Container>
            </div>

            <StaticDetailHero
                slides={heroSlides}
                className="h-[30vh] md:h-[30vh]"
                mainTitle={lang === 'KR' ? "하이원 스키 리조트" : "High1 Ski Resort"}
                description={lang === 'KR'
                    ? <>해발 1,300m대 고도와 3개의 정상에서 내려오는 롱런 코스로,<br className="hidden md:block" /> 상급자부터 초보까지 다양한 슬로프를 갖춘 강원권 대표 스키 리조트입니다.</>
                    : <>A representative ski resort in Gangwon with long-run courses from 3 peaks at 1,300m altitude,<br className="hidden md:block" /> featuring various slopes for everyone from beginners to experts.</>}
            />

            <main className="flex-grow">
                {/* Transport Options Section */}
                <section id="transport-options" className="relative z-20 bg-white py-24 border-b border-gray-100">
                    <Container>
                        <div className="mb-20 text-center md:text-left">
                            <span className="text-overline text-blue-600 block mb-3">Transport Options</span>
                            <h2 className="text-h2 text-gray-900 mb-6 tracking-tight">
                                {lang === 'KR' ? '하이원 이동 서비스' : 'High1 Transfer Services'}
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                                {lang === 'KR'
                                    ? <>서울·인천에서 하이원까지. <br className="hidden md:block" /> 가장 쾌적하고 편안한 이동 방법을 선택하세요.</>
                                    : <>From Seoul/Incheon to High1. <br className="hidden md:block" /> Choose the most comfortable and convenient way to travel.</>}
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
                                        href="https://high1.rideus.net"
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
                                        href="https://booking.triseup.com/k-ski?resort=high1"
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
                                        ? <>강원도 정선군 고한읍 하이원길 265-1<br />하이원 리조트</>
                                        : <>265-1 High1-gil, Gohan-eup, Jeongseon-gun, Gangwon-do<br />High1 Resort</>}
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

export default High1;
