# Getting Started with Create React App

## CRA
CRA(Create-React-App): Set up a modern web app by running one command

### 장단점

장점
- 안정성
- 설정 없이 바로 시작 가능
- 개발 서버 및 HMR(Hot Module Replacement) 지원
- react-scripts라는 패키지로 모든 설정을 추상화
단점
- 프로젝트가 커질수록 느린 빌드 속도와 리로딩 시간
- 설정 커스터마이징 복잡도
- 최신 프론트엔드 트렌드 반영이 느림 (ESM, lightning fast HMR)

### 앱 구성

CRA 명령어 사용 React 환경 구성
```
npx create-react-app <app_name>
npx create-react-app my_app
```

CRA + TypeScript
- typescript 환경 구성
```
npx create-react-app my_app --template typescript
```
- 추가 라이브러리 설치
```
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npm i --save react react-dom typescript
npm i --save-dev @types/react @types/react-dom @types/node
```
- tsconfig.json 수정
  - (수정) "target": "es5" -> "es6"
  - (추가) "baseUrl": "./src"

실행
- 기본 실행: http://localhost:3000
```
npm start
```

### 코드 정리
코드 정리, 불필요 파일
- public - index.html 제외 나머지
- src - App.css / App.js / index.js만 남김


## Vite
- 비트(Vite), Vue.js 개발자가 만든 차세대 Frontend 빌드 도구
- React, Vue, Svelte, Preact 등 프레임워크 대응
- ES 모듈 기반 개발 서버, Rollup 기반 빌드 도구

### 장단점

장점
- esbuild 기반 빠른 시작 및 업데이트 속도
- 설정 유연성
- 최신 생태계 대응력
- 코드 분할과 Tree shaking 등 성능 최적화 제공
단점
- CRA에 비해 비교적 적은 자료
- 복잡한 웹팩 생태계에 대한 충돌 가능성이 있으나 점차 줄어드는 추세

### 앱 구성
- 기본 생성. npm 사용
```
npm create vite my_app -- --template react
```
- 혹은 yarn이나 pnpm 사용
```
yarn create vite my_app --template react
pnpm create vite my_app --template react
```
- typescript 템플릿 사용 시, _ts는 구분을 위해서 넣은 값
```
npm create vite@latest my_app_ts -- --template react-ts
```

- 프로젝트 구성 후 패키지 설치 동일
```
cd my-app
npm install
```

실행
- 기본 실행: http://localhost:5173
```
npm run dev
```
