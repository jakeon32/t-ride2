import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Container - 공통 레이아웃 컴포넌트
 * - max-width: 1216px
 * - 좌우 패딩: mobile 24px (px-6), md 32px (px-8), lg+ 48px (px-12)
 * - 수평 중앙 정렬
 */
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`max-w-[1216px] mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
