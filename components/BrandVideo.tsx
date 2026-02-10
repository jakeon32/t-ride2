import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Container from './shared/Container';

const YOUTUBE_VIDEO_ID = 'nnXqPZdG7kg';

const BrandVideo: React.FC = () => {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const [isInView, setIsInView] = useState(false);
    const [apiReady, setApiReady] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Load YouTube IFrame API
    useEffect(() => {
        if ((window as any).YT && (window as any).YT.Player) {
            setApiReady(true);
            return;
        }

        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);

        (window as any).onYouTubeIframeAPIReady = () => {
            setApiReady(true);
        };

        return () => {
            (window as any).onYouTubeIframeAPIReady = undefined;
        };
    }, []);

    // Initialize player when API is ready
    useEffect(() => {
        if (!apiReady) return;

        playerRef.current = new (window as any).YT.Player('brand-video-player', {
            videoId: YOUTUBE_VIDEO_ID,
            playerVars: {
                autoplay: 0,
                mute: 1,
                controls: 1,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                loop: 1,
                playlist: YOUTUBE_VIDEO_ID,
            },
            events: {
                onReady: () => {},
            },
        });

        return () => {
            if (playerRef.current?.destroy) {
                playerRef.current.destroy();
            }
        };
    }, [apiReady]);

    // Intersection Observer for scroll-triggered play/pause
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    // Play/pause based on visibility
    useEffect(() => {
        const player = playerRef.current;
        if (!player?.playVideo || !player?.pauseVideo) return;

        try {
            if (isInView) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        } catch {
            // Player not ready yet
        }
    }, [isInView]);

    const toggleMute = useCallback(() => {
        const player = playerRef.current;
        if (!player) return;

        try {
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
        } catch {
            // Player not ready
        }
    }, [isMuted]);

    return (
        <section ref={sectionRef} className="relative bg-[#0F1115] py-20 md:py-28 border-t border-slate-800 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2E5CFF]/5 via-transparent to-transparent pointer-events-none" />

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="inline-block border border-[#2E5CFF] text-[#2E5CFF] px-3 py-1 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                        Brand Film
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                        {lang === 'KR'
                            ? <>라이더스가 꿈꾸는<br className="md:hidden" /> 스마트한 이동</>
                            : <>Smart Mobility<br className="md:hidden" /> by Rideus</>}
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed break-keep">
                        {lang === 'KR'
                            ? '공항, 콘서트, 테마파크까지. 예약부터 탑승까지 1분이면 충분합니다.'
                            : 'From airports to concerts and theme parks. Book and board in just one minute.'}
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative aspect-video bg-black/50 border border-slate-700/50 overflow-hidden">
                        <div id="brand-video-player" className="absolute inset-0 w-full h-full" />
                    </div>

                    {/* Mute Toggle */}
                    <button
                        onClick={toggleMute}
                        className="absolute bottom-4 right-4 z-20 p-2.5 bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-black/80 transition-colors rounded-full"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                        {isMuted ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.15a.75.75 0 011.28.53v13.74a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.15a.75.75 0 011.28.53v12.74a.75.75 0 01-1.28.53l-4.72-3.15H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default BrandVideo;
