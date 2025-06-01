// 01_js_ts/07_http_request/http_request_example.js
// 순수 CommonJS 방식으로 작성한 JS 예제

const axios = require('axios');

async function fetch_json_placeholder() {
  try {
    console.log('>> HTTP 요청 시작: JSONPlaceholder에서 게시물 목록 가져오기');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('>> 응답 상태 코드(Status):', response.status);
    console.log('>> 첫 번째 게시물(id, title):', response.data[0].id, response.data[0].title);
  } catch (error) {
    console.error('>> 오류 발생:', error);
  }
}

fetch_json_placeholder();

// 필요 시, 외부 파일에서 호출할 수 있도록 export
module.exports = { fetch_json_placeholder };
