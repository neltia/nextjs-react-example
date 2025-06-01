// 01_js_ts/04_module/user_module.ts
// CommonJS 모듈로 트랜스파일될 것을 가정한 TypeScript 코드

// 1) User 인터페이스 선언 (TypeScript 용)
export interface User {
  id: number;
  name: string;
  email: string;
}

// 2) 사용자 정보를 문자열로 반환하는 함수
export function get_user_info(u: User): string {
  return `${u.name} <${u.email}>`;
}

// 3) (선택) 완전 CommonJS 내보내기를 원한다면 export = 구문을 써도 됩니다:
//    export = {
//      get_user_info
//    };
//    이 경우 main.ts에서는 `import userModule = require("./user_module");` 형태로 가져옵니다.
