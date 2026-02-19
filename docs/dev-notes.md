# T-Ride 개발 노트

## 프로젝트 개요
- **스택**: React 19 + TypeScript + Vite 6 + Tailwind CSS v3
- **배포**: Netlify (main 브랜치 자동 배포)
- **저장소**: https://github.com/jakeon32/t-ride2

---

## 아키텍처 핵심 패턴

### 히어로 + 스크롤 레이아웃
- 히어로 섹션: `position: fixed`, `z-0`
- 스크롤 콘텐츠: `position: relative`, `z-10`, `mt-[75vh]`
- 홈 히어로만 `mt-screen` (100vh) 사용, 상세 페이지는 `mt-[75vh]`

### 다국어 (KR/EN)
- `useLanguage()` 훅, `{ KR: string; EN: string }` 데이터 구조
- `lang === 'KR' ? '...' : '...'` 패턴

### 공통 컴포넌트
- `Container`: max-w-[1216px] mx-auto px-6 md:px-8 lg:px-12

---

## 주요 수정 이력

### 2026-02-19

#### ResortCollection 마키 드래그 기능 복원
- **파일**: `components/leisure/ResortCollection.tsx`
- **문제**: CSS animation (`marquee 30s linear infinite`) 방식에서는 사용자 드래그 불가
- **해결**: CSS 애니메이션 제거 → `requestAnimationFrame` 기반 JS 자동 스크롤로 전환
  - 컨테이너를 `overflow-x-auto` + `scrollbarWidth: none`으로 변경
  - `onMouseDown/Move/Up` 이벤트로 드래그 스크롤 구현
  - `hasDragged` ref로 드래그 중 Link 클릭 이동 방지
  - `pausedRef`로 hover pause 상태를 RAF 루프와 동기화

```tsx
// 핵심 구조
const marqueeRef = React.useRef<HTMLDivElement>(null);
const isDragging = React.useRef(false);
const hasDragged = React.useRef(false);

// RAF 자동 스크롤
const tick = () => {
  if (!pausedRef.current && !isDragging.current && el) {
    el.scrollLeft += 0.8;
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0; // 무한 루프
  }
  animRef.current = requestAnimationFrame(tick);
};
```

#### 인기 목적지 (Process.tsx) 모바일 조정
- 모바일 카드 높이: 400px → 200px (`min-h-[200px] md:min-h-[382px]`)
- 모바일 갭: gap-8 → gap-4 (`gap-4 md:gap-4`)
- 그리드: 데스크톱 bento layout (`lg:grid-cols-4`, 첫/마지막 카드 `lg:col-span-2`)

#### Categories 카드 간격
- 전 브레이크포인트 gap 통일: `gap-4` (1rem)

---

## Vite 6 주의사항
- `index.html` 인라인 `<style>` 태그 빌드 오류 발생
- **해결**: 인라인 CSS를 `index.css`로 이동

## YouTube 영상 루프
- `loop: 1`만으로는 루프 안 됨
- `playlist: VIDEO_ID`도 함께 설정해야 실제 루프 동작

## 마키 무한 루프 구현
- 아이템 배열을 2배 복제: `[...items, ...items]`
- `scrollLeft >= scrollWidth / 2` 조건에서 `scrollLeft = 0` 리셋

---

## MCP 설정 (Claude Code)
- mcp-obsidian 추가: `claude mcp add mcp-obsidian ...`
- 저장 위치: `C:\Users\USER\.claude.json` (프로젝트 범위)
- Obsidian Local REST API 플러그인 실행 필요 (port: 27124)
