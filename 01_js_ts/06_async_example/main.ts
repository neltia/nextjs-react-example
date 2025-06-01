// async_example.ts
// TypeScript에서 인터페이스(Interface)와 함께 Promise 및 async/await를 사용하는 예제입니다.

// 1) 인터페이스 선언: API로부터 받아올 데이터의 형태를 정의
interface Data {
    id: number;
    title: string;
}

// 2) Promise<Data>를 반환하는 함수 예시
function fetchData(): Promise<Data> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Data 타입을 만족하는 객체 생성
            const data: Data = { id: 1, title: 'Sample Data' };
            resolve(data);
        }, 1000);
    });
}

// 3) async/await 사용 예시
async function main(): Promise<void> {
    try {
        console.log('데이터 요청 시작...');
        const result: Data = await fetchData();
        console.log('데이터 수신 완료:', result);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

// 비동기 함수(main) 호출
main();

// 4) Promise 체이닝 예시
fetchData()
    .then((data: Data) => {
        console.log('Promise then:', data);
    })
    .catch((err: unknown) => {
        console.error('Promise catch:', err);
    });
