import React, { useEffect, useRef, useState } from 'react';

interface NaverMapProps {
    lat: number;
    lng: number;
    label?: string;
    className?: string;
}

declare global {
    interface Window {
        naver: any;
    }
}

const NAVER_MAP_CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
const SCRIPT_ID = 'naver-map-sdk';

function loadNaverMapScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (window.naver?.maps) {
            resolve();
            return;
        }

        const existing = document.getElementById(SCRIPT_ID);
        if (existing) {
            existing.addEventListener('load', () => resolve());
            return;
        }

        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Naver Maps SDK'));
        document.head.appendChild(script);
    });
}

const NaverMap: React.FC<NaverMapProps> = ({ lat, lng, label, className }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!NAVER_MAP_CLIENT_ID) {
            setError(true);
            return;
        }

        let cancelled = false;

        loadNaverMapScript()
            .then(() => {
                if (cancelled || !mapRef.current) return;

                const position = new window.naver.maps.LatLng(lat, lng);

                const map = new window.naver.maps.Map(mapRef.current, {
                    center: position,
                    zoom: 15,
                    zoomControl: true,
                    zoomControlOptions: {
                        position: window.naver.maps.Position.TOP_RIGHT,
                    },
                });

                new window.naver.maps.Marker({
                    position,
                    map,
                    title: label || '',
                });

                mapInstanceRef.current = map;
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });

        return () => {
            cancelled = true;
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
                mapInstanceRef.current = null;
            }
        };
    }, [lat, lng, label]);

    if (error) {
        return (
            <div className={`bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 ${className || 'h-[300px] md:h-[400px]'}`}>
                <p className="text-slate-400 text-sm">Map unavailable</p>
            </div>
        );
    }

    return <div ref={mapRef} className={`rounded-2xl overflow-hidden ${className || 'h-[300px] md:h-[400px] w-full'}`} />;
};

export default NaverMap;
