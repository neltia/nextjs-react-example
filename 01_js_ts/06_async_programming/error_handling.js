// try-catch로 비동기 에러 처리
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}