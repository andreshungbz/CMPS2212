const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject(new Error('Operation failed!'));
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
    throw new Error('something went wrong in .then()');
  })
  .catch((error) => {
    console.error('caught error:', error);
  });
