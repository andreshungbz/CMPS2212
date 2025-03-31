function randomDelayPromise() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      const success = Math.random() > 0.3;
      success ? resolve('Success!') : reject(new Error('Random failure.'));
    }, delay);
  });
}

randomDelayPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
