const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve('done');
  else reject('error');
});

promise.then(console.log).catch(console.error);