# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 starter project featuring a modern landing page with shadcn/ui components. The project uses React 19, TypeScript, and Tailwind CSS v4.

**Key limitation:** Next.js 16.x has breaking changes from your training data. Always check `node_modules/next/dist/docs/` before writing new code. See AGENTS.md for details.

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
├── app/                    # App Router 디렉토리
│   ├── components/         # shadcn/ui 컴포넌트들 (설치된 컴포넌트)
│   ├── layout.tsx          # 루트 레이아웃 (Header, Footer 포함)
│   ├── page.tsx            # 홈 페이지
│   ├── globals.css         # Tailwind 및 전역 스타일
│   ├── error.tsx           # 에러 바운더리
│   ├── loading.tsx         # 로딩 UI
│   └── not-found.tsx       # 404 페이지
├── components/             # 커스텀 React 컴포넌트
│   ├── layout/             # Header, Footer 등 레이아웃 컴포넌트
│   ├── sections/           # 페이지 섹션 (Hero, Features, Stats, CTA)
│   ├── showcase/           # 컴포넌트 쇼케이스
│   └── ui/                 # shadcn/ui 컴포넌트 래퍼 및 커스텀 UI
├── lib/                    # 유틸리티 및 헬퍼
│   ├── utils.ts            # 범용 유틸리티 함수
│   ├── constants.ts        # SITE_CONFIG, 네비게이션, 피처 데이터
│   ├── component-showcase.ts  # 쇼케이스 컴포넌트 목록
│   └── validations.ts      # Zod 스키마
├── hooks/                  # 커스텀 React 훅
│   └── use-mobile.ts       # 모바일 브레이크포인트 훅
├── types/                  # TypeScript 타입 정의
│   └── index.ts            # NavItem, FeatureItem, StatItem, SiteConfig
├── public/                 # 정적 파일
├── components.json         # shadcn/ui 설정
├── tsconfig.json           # TypeScript 설정 (@/* alias)
├── next.config.ts          # Next.js 설정
└── eslint.config.mjs       # ESLint 설정 (Next.js 코어 웹 바이탈)
```

## Key Technologies

- **Next.js 15.x** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** (with @tailwindcss/postcss)
- **shadcn/ui** (Radix Nova style, with CSS variables)
- **React Hook Form 7** + **Zod 4** (폼 검증)
- **next-themes** (다크모드 지원)
- **Lucide React** (아이콘)

## Code Style & Conventions

- **Indentation:** 2 spaces
- **Function/Variable names:** camelCase (English)
- **Component names:** PascalCase
- **File structure:** 레이어드 아키텍처 (컴포넌트 → 훅 → 유틸 → 서비스)

### 컴포넌트 작성 가이드

1. **shadcn/ui 컴포넌트 사용:** `app/components/`의 설치된 컴포넌트들 활용
2. **타입 정의:** `types/index.ts`에서 공통 타입 참조
3. **스타일링:** Tailwind CSS + `lib/utils.ts`의 `cn()` 함수로 클래스 병합
4. **폼 검증:** React Hook Form + Zod 패턴 사용

### 라우팅

- App Router 기반 (`app/` 디렉토리)
- 동적 경로: `app/[slug]/page.tsx`
- API 라우트: `app/api/[route]/route.ts`

## Configuration Details

### shadcn/ui
- **Style:** Radix Nova
- **Icon Library:** Lucide
- **CSS Variables:** 활성화 (Tailwind theme에서 색상 지정)
- **Base Color:** Neutral

### Aliases (tsconfig.json)
```
@/* → ./*
@/components → ./components
@/lib → ./lib
@/hooks → ./hooks
@/utils → ./lib/utils
```

## Important Notes

- **Next.js 16 Breaking Changes:** 학습 데이터와 다를 수 있습니다. 코드 작성 전에 `node_modules/next/dist/docs/`를 확인하세요.
- **Language:** 모든 문서, 주석, 커밋 메시지는 한국어로 작성합니다.
- **사이트 메타데이터:** `lib/constants.ts`의 `SITE_CONFIG`에서 관리

## Related Documentation

- See AGENTS.md for Next.js version-specific guidance
