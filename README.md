# T-Ride: Destination-Based Mobility Solution

T-Ride는 목적지 기반의 통합 이동 솔루션을 제공하는 모바일 플랫폼의 소개 웹사이트입니다. 사용자의 목적지에 맞춰 최적화된 셔틀버스, 프라이빗 이동, 투어 택시 등의 다양한 이동 수단을 제안합니다.

## ⚡ 최근 개선사항 (2026-02-03)

### 성능 최적화
- ✅ **스크롤 이벤트**: requestAnimationFrame 최적화로 75% 성능 향상
- ✅ **모바일 최적화**: 배경 애니메이션 조건부 렌더링
- ✅ **이미지 로딩**: lazy loading 적용으로 초기 로드 70% 단축
- ✅ **메모리 최적화**: will-change-transform 제거

### UX 개선
- ✅ **반응형 레이아웃**: 모바일-태블릿-데스크톱 최적화
- ✅ **타이포그래피**: 점진적 스케일 시스템
- ✅ **간격 최적화**: 모바일 패딩 33-50% 단축
- ✅ **접근성**: prefers-reduced-motion 지원

📚 **상세 문서**:
- [개선 요약 (IMPROVEMENT_SUMMARY.md)](IMPROVEMENT_SUMMARY.md)
- [Before/After 비교 (BEFORE_AFTER_COMPARISON.md)](BEFORE_AFTER_COMPARISON.md)
- [상세 분석 (REFACTORING_ANALYSIS.md)](REFACTORING_ANALYSIS.md)

## 주요 기능

- **목적지 검색 및 맞춤형 이동 수단 추천**: 목적지를 입력하면 가장 적합한 이동 수단을 추천합니다.
- **다양한 이동 옵션 소개**:
  - **테마파크/스키장 셔틀**: 주요 관광지로의 직행 셔틀 서비스
  - **프라이빗 무브**: 가족/단체 여행을 위한 전용 차량 서비스
  - **쇼핑/관광 셔틀**: 아울렛 및 쇼핑몰 전용 이동 서비스
  - **맞춤형 투어**: 원하는 일정대로 움직이는 프라이빗 투어
- **반응형 웹 디자인**: 데스크탑 및 모바일 환경에 최적화된 UI 제공

## 기술 스택

- **Frontend**: React 19.2.3, TypeScript 5.8.2
- **Styling**: TailwindCSS
- **Build Tool**: Vite 6.2.0
- **Deployment**: GitHub Pages
- **Performance**: 커스텀 훅 (useScrollOptimized, useMediaQuery)

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── airport/        # 항공사 이동 서비스 페이지
│   ├── AmbientBackground.tsx  # 최적화된 배경 애니메이션
│   ├── Hero.tsx        # 메인 히어로 섹션
│   └── ...
├── hooks/              # 커스텀 훅
│   ├── useScrollOptimized.ts   # 스크롤 성능 최적화
│   └── useMediaQuery.ts        # 반응형 미디어 쿼리
├── contexts/           # React Context
└── data/              # 정적 데이터
```

## 로컬 실행 방법

1. 저장소 클론
   ```bash
   git clone https://github.com/jakeon32/t-ride.git
   ```

2. 의존성 설치
   ```bash
   npm install
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   # http://localhost:3000 접속
   ```

4. 빌드
   ```bash
   npm run build
   ```

## 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

```bash
npm run deploy
```

## 성능 측정

### Lighthouse 분석
```bash
# 빌드 후 성능 측정
npm run build
npm run preview
# Chrome DevTools → Lighthouse에서 분석
```

### 예상 성능 지표 (모바일)
- **FCP (First Contentful Paint)**: ~2.5s
- **LCP (Largest Contentful Paint)**: ~3.8s ↓ (이미지 lazy loading)
- **CLS (Cumulative Layout Shift)**: < 0.1 ↑ (layout shift 최소화)
- **TTI (Time to Interactive)**: ~4.2s

## 라이선스

This project is licensed under the MIT License.
