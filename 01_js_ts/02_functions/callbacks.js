// 콜백 패턴: 비동기 작업이 끝난 뒤 호출되는 함수를 인자로 전달
function fetchData(callback) {
  setTimeout(() => {
    callback('data loaded');
  }, 1000);
}

fetchData(function(result) {
  console.log(result);
});