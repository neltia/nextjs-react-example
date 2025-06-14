async function fetchData() {
  try {
    const response = await fetch('https://httpbin.org/get');
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
