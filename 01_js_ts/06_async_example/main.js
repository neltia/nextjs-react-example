// async_example.js
// JavaScript에서 Promise와 async/await를 사용한 비동기 처리 예제입니다.

// 1) Promise를 반환하는 함수 예시
function fetchData() {
    return new Promise((resolve, reject) => {
        // setTimeout을 통해 1초 후에 데이터를 반환하도록 시뮬레이션
        setTimeout(() => {
            const data = { id: 1, title: 'Sample Data' };
            resolve(data);
        }, 1000);
    });
}

// 2) async/await 사용 예시
async function main() {
    try {
        console.log('데이터 요청 시작...');
        // await 키워드를 통해 Promise가 처리될 때까지 기다림
        const result = await fetchData();
        console.log('데이터 수신 완료:', result);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

// 비동기 함수(main) 호출
main();

// 3) Promise 체이닝 예시 (then/catch)
fetchData()
    .then((data) => {
        console.log('Promise then:', data);
    })
    .catch((err) => {
        console.error('Promise catch:', err);
    });
