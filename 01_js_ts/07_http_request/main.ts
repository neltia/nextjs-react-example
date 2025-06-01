// http_request_example.ts
// TypeScript에서 axios를 사용하여 HTTP 요청 시 인터페이스를 통해 응답 데이터를 타입 안전하게 처리하는 예제입니다.

// 1) axios 설치가 필요합니다.
//    터미널에서: npm install axios @types/node
import axios from 'axios';

// 2) 응답 데이터에 대한 인터페이스 정의
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetch_json_placeholder(): Promise<void> {
    try {
        console.log('HTTP 요청 시작: JSONPlaceholder에서 게시물 목록 가져오기');
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        console.log('응답 상태 코드(Status):', response.status);
        // 첫 번째 게시물을 Post 타입으로 안전하게 가져옴
        const firstPost: Post = response.data[0];
        console.log('첫 번째 게시물(id, title):', firstPost.id, firstPost.title);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

fetch_json_placeholder();
