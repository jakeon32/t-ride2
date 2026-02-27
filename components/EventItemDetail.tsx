import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './shared/Container';
import Breadcrumb from './shared/Breadcrumb';
import { eventsData } from '../data/eventsData';

// Placeholder or reused images for the detail page
import event01 from '../assets/event_01.webp';
import event02 from '../assets/event_02.webp';
import event03 from '../assets/event_03.webp';

const EventItemDetail: React.FC = () => {
    const { lang } = useLanguage();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const event = eventsData.find(e => e.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-h2 text-slate-800 mb-4">{lang === 'KR' ? '공연을 찾을 수 없습니다.' : 'Event not found.'}</h2>
                        <button
                            onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/event')}
                            className="text-[#2E5CFF] hover:underline bg-transparent outline-none"
                        >
                            {lang === 'KR' ? '목록으로 돌아가기' : 'Back to list'}
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Determine the poster image based on event ID
    let displayImage = event.image;
    if (!displayImage) {
        const images = [event01, event02, event03];
        displayImage = images[event.id % 3];
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar theme="light" />

            <main className="flex-grow pt-[80px]"> {/* Account for fixed navbar */}
                <Container className="py-12 md:py-20">
                    <Breadcrumb current={{ KR: event.name.KR, EN: event.name.EN }} parent={{ label: { KR: '공연/이벤트', EN: 'Events' }, url: '/event' }} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                        {/* Left: Event Poster Image */}
                        <div className="relative w-full aspect-[3/4] bg-slate-200 shadow-md">
                            <img
                                src={displayImage}
                                alt={lang === 'KR' ? event.name.KR : event.name.EN}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-4 left-4">
                                <span className={`inline-block px-3 py-1 bg-white shadow-sm text-xs font-bold uppercase tracking-wider ${event.type === 'festival' ? 'text-amber-600' : 'text-[#2E5CFF]'}`}>
                                    {event.type}
                                </span>
                            </div>
                        </div>

                        {/* Right: Event Info */}
                        <div className="flex flex-col">
                            <h1 className="text-h2 text-[#0F1115] mb-6 tracking-tight">
                                {lang === 'KR' ? event.name.KR : event.name.EN}
                            </h1>

                            <div className="space-y-6 flex-grow">
                                <div className="pb-6 border-b border-[#E5E5E5]">
                                    <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2">{lang === 'KR' ? '일시' : 'Date'}</h3>
                                    <p className="text-lg font-medium text-slate-800">{event.date} (2026)</p>
                                </div>
                                <div className="pb-6 border-b border-[#E5E5E5]">
                                    <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2">{lang === 'KR' ? '장소' : 'Venue'}</h3>
                                    <p className="text-lg font-medium text-slate-800">{lang === 'KR' ? event.venue.KR : event.venue.EN}</p>
                                </div>
                                {event.cast && (
                                    <div className="pb-6 border-b border-[#E5E5E5] group">
                                        <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">{lang === 'KR' ? '출연진' : 'Cast'}</h3>
                                        <p className="text-lg font-medium text-slate-800 leading-snug">{event.cast}</p>
                                    </div>
                                )}
                                {event.runningTime && (
                                    <div className="pb-6 border-b border-[#E5E5E5] group">
                                        <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">{lang === 'KR' ? '관람 시간' : 'Running Time'}</h3>
                                        <p className="text-lg font-medium text-slate-800">{event.runningTime}</p>
                                    </div>
                                )}
                                {event.ageLimit && (
                                    <div className="pb-6 border-b border-[#E5E5E5] group">
                                        <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2 group-hover:text-rose-500 transition-colors">{lang === 'KR' ? '관람 연령' : 'Age Limit'}</h3>
                                        <p className="text-lg font-medium text-slate-800">{event.ageLimit}</p>
                                    </div>
                                )}
                                {event.organizer && (
                                    <div className="pb-6 border-b border-[#E5E5E5] group">
                                        <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2 group-hover:text-purple-500 transition-colors">{lang === 'KR' ? '주최/주관' : 'Organizer'}</h3>
                                        <p className="text-lg font-medium text-slate-800">{event.organizer}</p>
                                    </div>
                                )}
                                {event.price && (
                                    <div className="pb-6 border-b border-[#E5E5E5] group">
                                        <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2 group-hover:text-emerald-500 transition-colors">{lang === 'KR' ? '티켓 가격' : 'Ticket Price'}</h3>
                                        <p className="text-lg font-medium text-slate-800 break-words">{event.price}</p>
                                    </div>
                                )}
                            </div>

                            {/* Ticket Links & Notices */}
                            <div className="mt-10">
                                {event.notice ? (
                                    <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium mb-4">
                                        {event.notice}
                                    </div>
                                ) : (
                                    event.ticketLink && (
                                        <a
                                            href={event.ticketLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 py-4 bg-[#2E5CFF] text-white font-bold text-lg hover:bg-blue-700 transition-colors"
                                        >
                                            {lang === 'KR' ? '예매창 바로가기' : 'Go to Ticket Sales'}
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )
                                )}

                                <button
                                    onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/event')}
                                    className="block text-center w-full py-4 mt-4 border border-[#E5E5E5] text-slate-600 font-bold hover:bg-slate-50 transition-colors"
                                >
                                    {lang === 'KR' ? '목록으로 돌아가기' : 'Back to List'}
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
};

export default EventItemDetail;
