function randomDelayPromise() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      const success = Math.random() > 0.3;
      success ? resolve('Success!') : reject(new Error('Random failure.'));
    }, delay);
  });
}

const messageElement = document.querySelector('#message');

randomDelayPromise()
  .then((result) => (messageElement.textContent = result))
  .catch((error) => {
    console.error(error);
    messageElement.textContent = 'Loading Failed';
  });
