import { useEffect, useState } from 'react';

/**
 * useMediaQuery: 미디어 쿼리를 감시하는 커스텀 훅
 * 모바일/데스크톱 환경에서 조건부 렌더링 또는 기능 활성화/비활성화에 사용
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // addEventListener 대신 addListener 사용 (호환성)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // 구형 브라우저 지원
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  // SSR 호환성: 클라이언트에서만 실제 값 반환
  return isClient ? matches : false;
};
