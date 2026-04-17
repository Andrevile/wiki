---
title: React Native
description: JavaScript(React)로 iOS/Android 앱을 동시에 개발하는 크로스플랫폼 프레임워크
---

# React Native

## React Native란?

Meta(Facebook)가 만든 크로스플랫폼 모바일 앱 프레임워크. JavaScript(React)로 iOS/Android 앱을 **동시에** 개발할 수 있다.

::: tip
WebView 기반이 아니라 진짜 네이티브 컴포넌트를 렌더링한다. 성능이 중요한 이유다.
:::

## 웹 React와의 차이

| | React (Web) | React Native |
|---|---|---|
| 렌더링 대상 | DOM (HTML) | iOS / Android 네이티브 컴포넌트 |
| 스타일링 | CSS | StyleSheet (CSS 유사 문법, 일부 속성만 지원) |
| 레이아웃 | CSS Flexbox | Flexbox (기본값, 방향이 column) |
| 라우팅 | React Router 등 | React Navigation |
| 기본 태그 | `<div>`, `<p>`, `<img>` | `<View>`, `<Text>`, `<Image>` |

## 동작 원리

```
[JS 코드]
    ↓
[JS Engine (Hermes)]
    ↓
[Bridge / JSI]
    ↓
[iOS / Android 네이티브 컴포넌트]
```

JS 코드가 네이티브 UI와 통신해서 실제 플랫폼 컴포넌트를 렌더링한다.

## 핵심 개념

| 개념 | 설명 |
|------|------|
| **Metro** | React Native 전용 JS 번들러 |
| **Expo** | RN 개발 환경을 쉽게 세팅해주는 플랫폼. 초보자 친화적 |
| **Hermes** | Meta가 만든 RN 최적화 JS 엔진 |
| **New Architecture** | JSI 기반 새 아키텍처. Bridge 제거로 성능 향상 |

## 프로젝트 구조 (Expo 기준)

```
app/
├── (tabs)/
│   ├── index.tsx      ← 홈 탭
│   └── explore.tsx
├── _layout.tsx        ← 루트 레이아웃
components/
assets/
```

## 학습 로드맵

React를 이미 알고 있다면 아래 순서로 학습하면 된다.

1. **기본 컴포넌트 & StyleSheet** — View, Text, Image, ScrollView
2. **React Navigation** — 화면 전환, 스택/탭 네비게이션
3. **상태관리** — Zustand / Redux
4. **네이티브 모듈 & 권한 처리** — 카메라, 위치, 알림
5. **배포** — App Store / Play Store 배포 프로세스

::: info Expo vs React Native CLI
입문은 **Expo**로 시작하는 것을 추천한다. 네이티브 모듈을 직접 다뤄야 하는 상황이 오면 그때 CLI로 전환(eject)해도 늦지 않는다.
:::
