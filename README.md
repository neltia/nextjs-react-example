# nextjs-react-example
React와 NextJS를 테스트하고 정리하기 위한 리포지토리

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
