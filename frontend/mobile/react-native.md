# React Native

## React Native란?

Facebook(Meta)이 만든 크로스플랫폼 모바일 앱 프레임워크. JavaScript(React)로 iOS/Android 앱을 동시에 개발할 수 있다.

## 웹 React와의 차이

| | React (Web) | React Native |
|---|---|---|
| 렌더링 | DOM (HTML) | 네이티브 컴포넌트 |
| 스타일링 | CSS | StyleSheet (CSS 유사 문법) |
| 레이아웃 | CSS Flexbox | Flexbox (기본값) |
| 라우팅 | React Router 등 | React Navigation |
| 기본 태그 | `<div>`, `<p>`, `<img>` | `<View>`, `<Text>`, `<Image>` |

## 동작 원리

```
[JS 코드]  →  [JS Engine (Hermes)]  →  [Bridge / JSI]  →  [Native 컴포넌트]
```

JS 코드가 네이티브 UI와 통신해서 실제 iOS/Android 컴포넌트를 렌더링한다. WebView가 아니라 진짜 네이티브.

## 주요 개념

- **Metro**: React Native 전용 JS 번들러
- **Expo**: RN 개발 환경을 쉽게 세팅해주는 플랫폼 (초보자 친화적)
- **Hermes**: Meta가 만든 RN 최적화 JS 엔진
- **New Architecture**: JSI 기반 새 아키텍처 (Bridge 제거, 성능 향상)

## 프로젝트 구조 (Expo 기준)

```
app/
├── (tabs)/
│   ├── index.tsx    # 홈 탭
│   └── explore.tsx
├── _layout.tsx      # 루트 레이아웃
components/
assets/
```

## 학습 로드맵

1. React 기초 (이미 알고 있음)
2. React Native 기본 컴포넌트 & StyleSheet
3. React Navigation (화면 전환)
4. 상태관리 (Zustand / Redux)
5. 네이티브 모듈 & 권한 처리
6. 배포 (App Store / Play Store)
