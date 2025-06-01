// http_request_example.js
// Node.js 환경에서 axios를 사용하여 HTTP 요청을 보내고 응답을 처리하는 예제입니다.

// 1) axios 설치가 필요합니다.
// - 터미널에서: npm install axios
// 코드 내부에서 모듈을 호출하는 경우에는 해당 패키지가 현재 디렉터리 기준으로 설치되어 있어야 함
import axios from 'axios';

async function fetch_json_placeholder() {
    try {
        console.log('HTTP 요청 시작: JSONPlaceholder에서 게시물 목록 가져오기');
        // JSONPlaceholder(https://jsonplaceholder.typicode.com/)는 테스트용 무료 API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('응답 상태 코드(Status):', response.status);
        // 응답 데이터 중 첫 번째 게시물만 출력
        console.log('첫 번째 게시물:', response.data[0]);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

fetch_json_placeholder();
