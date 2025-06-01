// 01_js_ts/04_module/user_module.js
// CommonJS 방식으로 객체와 함수를 내보내도록 변경

// 1) User 정보를 보관할 객체 리터럴
const user = {
  id: 1,
  name: 'mokha',
  email: 'mokha@example.com',
};

// 2) 사용자 정보를 문자열로 반환하는 함수
function get_user_info(u) {
  return `${u.name} <${u.email}>`;
}

// CommonJS 방식 export
module.exports = {
  user,
  get_user_info,
};
