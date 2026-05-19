# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.2.6 starter project featuring a modern landing page with shadcn/ui components. The project uses React 19, TypeScript, and Tailwind CSS v4. **Next.js 16 has breaking changes from training data** — always check the Next.js docs in `node_modules/next/dist/docs/` before writing new code.

## Development Commands

```bash
# 개발 서버 시작 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# ESLint 검사
npm run lint
```

## Project Structure

```
├── app/                    # App Router (Next.js 16)
│   ├── components/         # shadcn/ui 설치 컴포넌트
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   ├── globals.css         # Tailwind 글로벌 스타일
│   ├── error.tsx           # 에러 바운더리
│   ├── loading.tsx         # 로딩 UI
│   └── not-found.tsx       # 404 페이지
├── components/             # 커스텀 컴포넌트
│   ├── layout/             # Header, Footer
│   ├── sections/           # 페이지 섹션 (Hero, Features, Stats, CTA)
│   ├── showcase/           # 컴포넌트 데모
│   └── ui/                 # shadcn/ui 래퍼 및 커스텀 UI
├── lib/                    # 유틸리티 & 설정
│   ├── utils.ts            # cn() 함수 등 헬퍼
│   ├── constants.ts        # SITE_CONFIG, 네비게이션 데이터
│   ├── validations.ts      # Zod 스키마
│   └── component-showcase.ts  # 컴포넌트 데모 목록
├── hooks/                  # 커스텀 훅
│   └── use-mobile.ts       # 반응형 브레이크포인트 감지
├── types/                  # 공통 타입 정의
│   └── index.ts            # NavItem, FeatureItem, StatItem, SiteConfig
└── public/                 # 정적 파일
```

## Key Technologies

- **Next.js 16.2.6** (App Router, Server Components 기본)
- **React 19** (예: `use()`, 향상된 hooks)
- **TypeScript 5**
- **Tailwind CSS 4** (@tailwindcss/postcss로 PostCSS 통합)
- **shadcn/ui** (Radix Nova style, CSS variables)
- **React Hook Form 7** + **Zod 4** (폼 검증)
- **next-themes** (라이트/다크모드)
- **Lucide React** (아이콘)

## Code Style & Patterns

- **Indentation:** 2 spaces
- **Function/Variable names:** camelCase (English)
- **Component names:** PascalCase
- **Styling:** Tailwind + `cn()` 함수 (lib/utils.ts)로 클래스 병합

### Component 작성 패턴

1. **shadcn/ui 컴포넌트:** `app/components/`의 설치 컴포넌트 import
   ```tsx
   import { Button } from "@/app/components/ui/button"
   ```

2. **타입 정의:** `types/index.ts` 참조
   ```tsx
   import type { NavItem } from "@/types"
   ```

3. **폼 검증:** React Hook Form + Zod
   ```tsx
   const form = useForm<z.infer<typeof FormSchema>>({
     resolver: zodResolver(FormSchema),
   })
   ```

4. **동적 클래스:** Tailwind와 cn() 함수 조합
   ```tsx
   className={cn("base-class", isActive && "active-class")}
   ```

### 다크모드 (next-themes)

`app/layout.tsx`에서 `ThemeProvider` 래핑됨. 클라이언트 컴포넌트에서 `useTheme()` 훅 사용:
```tsx
const { theme, setTheme } = useTheme()
```

### 라우팅

- **페이지:** `app/[segment]/page.tsx`
- **동적 경로:** `app/[slug]/page.tsx` (getStaticProps 대신 `generateStaticParams()`)
- **API 라우트:** `app/api/[route]/route.ts` (Next.js 13+ 형식)
- **레이아웃 공유:** `app/[segment]/layout.tsx`

### Next.js 16 주의사항

1. **Server Components 기본값** — 컴포넌트는 서버 컴포넌트이며, `"use client"` 지시문으로 클라이언트 컴포넌트 지정
2. **Dynamic Imports** — `next/dynamic` 및 `dynamic()` 사용
3. **Image Component** — `next/image`의 `Image` 컴포넌트로 자동 최적화
4. **Font Loading** — `next/font` (예: `localFont`, `google`)
5. **메타데이터 API** — `layout.tsx`에서 `generateMetadata()` 또는 `metadata` 객체 내보내기
6. **Streaming & Suspense** — `React.Suspense`로 점진적 렌더링

상세한 API 변경사항은 `node_modules/next/dist/docs/` 참고.

## Configuration

### Site Metadata (`lib/constants.ts`)
```typescript
export const SITE_CONFIG = {
  name: "Site Name",
  description: "...",
  url: "https://...",
}
```

### TypeScript Aliases (`tsconfig.json`)
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

`@/*` 단일 alias로 모든 경로를 처리합니다. 예: `@/components`, `@/lib`, `@/hooks`, `@/types`

### shadcn/ui 설정 (`components.json`)
- **Style:** Radix Nova
- **Base Color:** Neutral
- **CSS Variables:** 활성화

## Important Notes

- **Language:** 모든 코드 주석, 커밋 메시지, 문서는 한국어로 작성합니다.
- **Next.js 16 Breaking Changes:** 학습 데이터와 다를 수 있으므로 필요시 `node_modules/next/dist/docs/` 확인
- **Component Library:** shadcn/ui 컴포넌트를 활용해 새 컴포넌트 구성
- **Type Safety:** `types/index.ts`에 공통 타입 정의하여 재사용성 확보
