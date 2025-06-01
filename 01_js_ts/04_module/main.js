// 01_js_ts/04_module/main.js
// CommonJS 방식으로 user_module.js를 불러와서 사용

// 1) require()를 통해 user_module.js로부터 user, get_user_info를 가져옴
const { user, get_user_info } = require('./user_module');

console.log('User Info:', get_user_info(user));
