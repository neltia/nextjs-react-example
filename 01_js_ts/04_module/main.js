// main.js
// (ESM) 앞서 작성한 user_module.js에서 내보낸(Export) 객체와 함수를 가져와서(Import) 사용

import { get_user_info, user } from './user_module.js';

console.log('User Info:', get_user_info(user));
