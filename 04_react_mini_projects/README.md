# React Mini Project

## 개요

- 기초 jsx 문법을 바탕으로 미니 프로젝트 사례 확인
  - Todo
  - Memo
  - Board
  - Shop
  - Weather
  - Calcuator
  - MD Editor

## 프로젝트 구성

- 공통 프로젝트 생성
```
# 공통 템플릿 생성 (프로젝트명 변경)
npm create vite@latest <project-name> -- --template react-ts
cd <project-name>
npm install tailwindcss postcss autoprefixer @tailwindcss/vite
```

- vite.config.ts
```
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()]
})
```

- global.css (index.css)
```
@import 'tailwindcss';
```
