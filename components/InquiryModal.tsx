import React, { useState, useEffect } from 'react';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
    const [inquiryType, setInquiryType] = useState('일반 문의 (서비스 이용 전반)');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [content, setContent] = useState('');

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const inquiryTypes = [
        '원하는 상품이 목록에 없어요',
        '제휴 · 파트너 문의',
        '일반 문의 (서비스 이용 전반)',
        '서비스 오류 · 버그 신고',
        '기타'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log({ inquiryType, name, contact, content });
        alert('문의가 접수되었습니다.');
        onClose();
        // Reset form
        setInquiryType('일반 문의 (서비스 이용 전반)');
        setName('');
        setContact('');
        setContent('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm">
            {/* Modal Container */}
            <div
                className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">T-Ride 문의</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body (Scrollable) */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-6">

                        {/* Inquiry Type Radio Group */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">문의 유형</label>
                            <div className="space-y-2">
                                {inquiryTypes.map((type) => (
                                    <label
                                        key={type}
                                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${inquiryType === type
                                                ? 'border-blue-500 bg-blue-50/50'
                                                : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mr-3 ${inquiryType === type ? 'border-blue-500' : 'border-slate-300'
                                            }`}>
                                            {inquiryType === type && (
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            )}
                                        </div>
                                        <input
                                            type="radio"
                                            name="inquiryType"
                                            value={type}
                                            checked={inquiryType === type}
                                            onChange={(e) => setInquiryType(e.target.value)}
                                            className="sr-only"
                                        />
                                        <span className={`text-sm ${inquiryType === type ? 'text-blue-700 font-medium' : 'text-slate-600'}`}>
                                            {type}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">
                                이름 또는 회사명 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="이름 또는 회사명"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        {/* Contact Input */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">
                                연락처 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="이메일 또는 전화번호"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-900 placeholder:text-slate-400 mb-2"
                            />
                            <p className="text-xs text-slate-500">답변을 받으실 이메일 또는 전화번호를 입력해 주세요.</p>
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">
                                문의 내용 <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="예: T-Ride 서비스 이용 방법, 목적지 추천 등"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-900 placeholder:text-slate-400 resize-none"
                            />
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="p-6 pt-2 border-t border-slate-100 bg-white">
                    <button
                        type="submit"
                        form="inquiry-form"
                        className="w-full py-4 bg-[#1C2434] text-white rounded-lg font-bold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                        문의 보내기
                    </button>
                </div>
            </div>

            {/* Background Overlay Click Handler */}
            <div className="fixed inset-0 z-[-1]" onClick={onClose} />
        </div>
    );
};

export default InquiryModal;
