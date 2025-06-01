// 01_js_ts/04_module/main.ts
// CommonJS 방식으로 user_module.ts를 불러와 실행하는 TypeScript 코드

// ── 방법 A: ES import 문법 (tsconfig.esModuleInterop = true 덕분에 CommonJS로 변환됨)
import { get_user_info, User } from './user_module';

const user1: User = {
  id: 2,
  name: 'mocha',
  email: 'mocha@example.com',
};

console.log('User Info (ES-import 방식):', get_user_info(user1));


// ── 방법 B: CommonJS require 문법 (export = 를 사용했다면 이 방식을 쓰셔야 합니다)
//    아래 예시는 export = { get_user_info } 형태로 user_module.ts를 수정했을 때 사용합니다.
/*
import userModule = require('./user_module');
const get_user_info_CJS = userModule.get_user_info;
const user2: userModule.User = {
  id: 3,
  name: 'test',
  email: 'test@example.com'
};
console.log('User Info (require 방식):', get_user_info_CJS(user2));
*/
