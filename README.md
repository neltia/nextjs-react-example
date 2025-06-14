# nextjs-react-example
React와 NextJS를 테스트하고 정리하기 위한 리포지토리


## Flow

- 전체 구성 목표 구조
```
react-nextjs-learning/
├── README.md
├── backup/                           # 참고용 파일
├── docs/                             # 학습 문서 및 가이드 모음
├── 01_js_ts/                         # JavaScript/TypeScript 기초
├── 02_react_setup/                   # React 환경 설정 (CRA vs Vite)
├── 03_react_basics/                  # React 핵심 개념 (JSX만 사용)
├── 04_react_mini_projects/           # React 미니 프로젝트들 (JSX/TSX 혼재)
├── 05_nextjs_basics/                 # Next.js 기초 학습
├── 06_nextjs_advanced/               # Next.js 고급 기능
├── 07_backend_integration/           # 백엔드 연동 (FastAPI)
├── project/                          # 최종 프로젝트: 도커 로그 대시보드
├── shared/                           # 공통 유틸리티 및 컴포넌트
└── scripts/                          # 자동화 스크립트
```


## Download
### NodeJS & TypeScript
- NodeJS
- URL: https://nodejs.org/en/download
```
# Docker has specific installation instructions for each operating system.
# Please refer to the official documentation at https://docker.com/get-started/

# Pull the Node.js Docker image:
docker pull node:22-alpine

# Create a Node.js container and start a Shell session:
docker run -it --rm --entrypoint sh node:22-alpine

# Verify the Node.js version:
node -v # Should print "v22.16.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```

- TypeScript
```
npm install -g typescript
npx tsc --init             # tsconfig.json 생성
npm install --save-dev @types/node eslint prettier eslint-config-prettier eslint-plugin-react
```

### Tailwind CSS & shacdn/ui
```
npm install tailwindcss postcss autoprefixer @shadcn/ui
npx tailwindcss init -p    # tailwind.config.js, postcss.config.js 생성
```

## Config
- VSCode Extension
  - ESLint
  - Prettier

- project init
```
mkdir my-project && cd $_
npm init -y                # package.json 생성
npm install --save-dev typescript @types/node
npx tsc --init             # tsconfig.json 생성
```

- ESLint/Prettier
```
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-react
```

## Test
- 브라우저 실시간 확인
  - HTML 파일에 ```<script type="module" src="index.js"></script>``` 포함 후 Live Server 확장 사용
  - CodeSandbox

- Node.js REPL: 간단한 JS 테스트, (파이썬 인터프리터)
```
node
```

- 단일 JS 파일 실행
```
node example.js
```

- 단일 TS 파일 실행
```
ts-node example.ts
```
