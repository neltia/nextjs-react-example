// user_module.js
// (ESM) 사용자(User) 정보를 담은 객체와 관련 함수를 내보내는 예제

// User 정보를 보관할 객체 리터럴
export const user = {
  id: 1,
  name: 'mokha',
  email: 'mokha@example.com',
};

// 사용자 정보를 포맷팅하여 문자열로 반환하는 함수
export function get_user_info(u) {
  return `${u.name} <${u.email}>`;
}
