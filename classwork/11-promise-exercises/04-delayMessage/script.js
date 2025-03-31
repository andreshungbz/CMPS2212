function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 2000);
  });
}

delayMessage().then((result) => console.log(result));
