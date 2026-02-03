import { useEffect, useState } from 'react';

/**
 * useScrollOptimized: 스크롤 이벤트를 requestAnimationFrame으로 최적화하는 커스텀 훅
 * 성능 개선: 불필요한 상태 업데이트를 제한하여 리페인트 최소화
 */
export const useScrollOptimized = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return scrollY;
};
