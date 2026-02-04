import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from './shared/Breadcrumb';
import { useScrollOptimized } from '../hooks';
import { useLanguage } from '../contexts/LanguageContext';

// Hero image for support page
import heroBg from '../assets/support_hero_img.webp';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: '목록에 없는 노선도 문의할 수 있나요?',
        answer: "네, 가능합니다. 아래 '문의하기' 버튼을 눌러 '원하는 상품이 목록에 없어요'를 선택한 후 출발지·도착지 등 정보를 남겨주시면, 이용 가능 여부와 견적을 검토해 안내드립니다."
    },
    {
        question: '특정 셔틀/프라이빗 상품 문의는 어디서 하나요?',
        answer: "이미 목록에 있는 상품이라면, 해당 상품 상세 페이지에서 '문의하기' 버튼을 이용해 주세요. 상품에 맞는 정보가 자동으로 입력되어 더 빠르게 안내받으실 수 있습니다."
    },
    {
        question: '단체/기업용 셔틀도 상담 가능한가요?',
        answer: '네, 단체(10인 이상) 또는 기업 전용 셔틀 문의도 가능합니다. 문의하기에서 인원과 요청사항을 함께 남겨주시면 맞춤 견적을 안내드립니다.'
    },
    {
        question: '답변까지 얼마나 걸리나요?',
        answer: '문의 접수 후 영업일 기준 1~2일 내에 담당자가 이메일 또는 연락처로 회신드립니다.'
    }
];

const Support: React.FC = () => {
    const scrollY = useScrollOptimized();
    const { lang } = useLanguage();
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    // Parallax calculations - consistent with other pages
    const bgParallax = -scrollY * 0.3;
    const textParallax = -scrollY;
    const overlayOpacity = Math.min(scrollY / 600, 0.8);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const handleInquiryClick = () => {
        // TODO: Implement inquiry modal in the future
        console.log('Inquiry button clicked - modal to be implemented');
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            {/* Hero Section - Reduced height with parallax */}
            <section className="fixed top-0 left-0 w-full h-[40vh] overflow-hidden z-0">
                {/* Background Layer with Parallax */}
                <div
                    className="absolute inset-0 w-full h-full will-change-transform scale-105"
                    style={{ transform: `translateY(${bgParallax}px)` }}
                >
                    <img
                        src={heroBg}
                        alt="Customer Support"
                        className="w-full h-full object-cover grayscale-[30%]"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
                    <div
                        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                        style={{ opacity: overlayOpacity }}
                    />
                </div>

                {/* Content Container with Slower Parallax */}
                <div
                    className="relative z-10 w-full h-full pointer-events-none will-change-transform"
                    style={{ transform: `translateY(${textParallax}px)` }}
                >
                    <div className="max-w-[1216px] mx-auto h-full px-6 md:px-12 relative">
                        <div className="absolute inset-0 flex items-center">
                        <div className="max-w-4xl text-white pt-32 md:pt-20 px-4 md:px-0 md:pl-12 pointer-events-auto">
                            {/* Badge */}
                            <span className="block text-[var(--color-accent)] font-bold tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 uppercase animate-slide-in-right">
                                RIDEUS SUPPORT
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl leading-[1.3] md:text-[3.5rem]/[1.2] font-display font-bold mb-4 md:mb-6 md:leading-[1.2] tracking-tighter animate-slide-in-right">
                                {lang === 'KR' ? '고객센터' : 'Customer Support'}
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 leading-relaxed font-light animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                                {lang === 'KR'
                                    ? "자주 묻는 질문을 먼저 확인해 보시고, 필요한 경우 아래 '문의하기' 버튼을 통해 문의를 보내주세요."
                                    : "Check our FAQ first, and if you need further assistance, please use the 'Contact Us' button below."}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer for fixed hero */}
            <div className="h-[40vh]" />

            {/* Main Content */}
            <main className="flex-grow relative z-10 bg-slate-50">
                <div className="max-w-[1216px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
                    <Breadcrumb current={{ KR: '고객센터', EN: 'Support' }} />

                    {/* FAQ Section */}
                    <section className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            {lang === 'KR' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
                        </h2>

                        {/* Info Text */}
                        <div className="flex items-start gap-2 mb-8 md:mb-10 text-slate-500">
                            <svg className="w-5 h-5 flex-shrink-0 fill-slate-800" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            <p className="text-sm">
                                {lang === 'KR'
                                    ? "이미 목록에 있는 특정 노선이나 상품에 대한 문의는 해당 상품 상세 페이지의 '문의하기'를 이용하시면 더 빠르게 도와드릴 수 있습니다."
                                    : "For inquiries about specific routes or products already listed, using the 'Contact' button on the product detail page will help us assist you faster."}
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${openFAQ === index
                                        ? 'bg-[#EFF4FB] border-slate-200'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                                    >
                                        <span className="flex items-center gap-3 md:gap-4">
                                            <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                Q
                                            </span>
                                            <span className={`font-bold text-sm md:text-base ${openFAQ === index ? 'text-slate-800' : 'text-slate-600'}`}>
                                                {faq.question}
                                            </span>
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 ml-[3.25rem] md:ml-[3.5rem]">
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-[#EFF4FB] rounded-2xl p-8 md:p-12 text-center">
                        {/* Chat Icon */}
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#0055A5] rounded-full flex items-center justify-center text-white">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>

                        <p className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                            {lang === 'KR' ? '원하는 답변을 찾지 못하셨나요?' : "Couldn't find the answer you were looking for?"}
                        </p>
                        <p className="text-sm md:text-base text-slate-500 font-medium mb-8">
                            {lang === 'KR'
                                ? 'FAQ로 해결되지 않은 문의는 Rideus 팀이 직접 확인해 드립니다.'
                                : 'For questions not covered in the FAQ, our Rideus team will personally assist you.'}
                        </p>

                        <button
                            onClick={handleInquiryClick}
                            className="inline-flex items-center justify-center px-8 py-3 bg-[#333333] text-white font-bold rounded-full hover:bg-black transition-all duration-300"
                        >
                            {lang === 'KR' ? '문의하기' : 'Contact Us'}
                        </button>

                        <p className="hidden text-xs text-slate-500 mt-6">
                            {/* Hidden as per design clean up, or keep if needed but design shows clean container */}
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Support;
