fetch('https://httpbin.org/get')
  .then(res => res.json())
  .then(data => console.log(data));