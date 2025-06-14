// async/await: Promise를 더 직관적으로 다룸
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncTask() {
  console.log('start');
  await delay(500);
  console.log('end');
}

asyncTask();