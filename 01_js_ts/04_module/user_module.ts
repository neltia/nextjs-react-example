// user_module.ts
// TypeScript에서 인터페이스(Interface) 정의 및 모듈화 예제입니다.

// 1) User 인터페이스 선언: 객체의 속성과 타입을 정의
export interface User {
    id: number;
    name: string;
    email: string;
}

// 2) 사용자 정보를 문자열로 반환하는 함수에 타입 주석 추가
export function get_user_info(u: User): string {
    return `${u.name} <${u.email}>`;
}
