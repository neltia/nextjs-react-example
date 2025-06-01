// main.ts
// 앞서 작성한 user_module.ts에서 내보낸(Export) 인터페이스 및 함수를 가져와 사용하는 예제입니다.

import { User, get_user_info } from './user_module';

// User 인터페이스를 사용하여 객체 생성
const user: User = {
    id: 2,
    name: 'mocha',
    email: 'mocha@example.com',
};

// 타입 안정성을 보장받으며 함수 호출
console.log('User Info:', get_user_info(user));
