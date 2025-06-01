// 01_js_ts/07_http_request/http_request_example.ts
// CommonJS 스타일로 axios를 사용하여 HTTP 요청을 보내는 TS 예제

// ── 방법 A: ES import 문법 (esModuleInterop: true 덕분에 CommonJS로 트랜스파일됨)
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetch_json_placeholder(): Promise<void> {
  try {
    console.log('>> HTTP 요청 시작: JSONPlaceholder에서 게시물 목록 가져오기');
    const response = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('>> 응답 상태 코드(Status):', response.status);
    console.log('>> 첫 번째 게시물(id, title):', response.data[0].id, response.data[0].title);
  } catch (error) {
    console.error('>> 오류 발생:', error);
  }
}

fetch_json_placeholder();

// ── 방법 B: CommonJS require 문법
/*
const axios = require('axios');

async function fetch_json_placeholder_CJS() {
  try {
    console.log('>> HTTP 요청 시작 (CJS): JSONPlaceholder에서 게시물 목록 가져오기');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('>> 응답 상태 코드(Status):', response.status);
    console.log('>> 첫 번째 게시물(id, title):', response.data[0].id, response.data[0].title);
  } catch (error) {
    console.error('>> 오류 발생 (CJS):', error);
  }
}

fetch_json_placeholder_CJS();
*/
