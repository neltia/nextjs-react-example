# tailwind-widget with TS

- install
```
npm create vite@latest 02_tailwind_widget -- --template react-ts
```
```
cd 02_tailwind_widget
npm install
npm install -D tailwindcss postcss autoprefixer
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
