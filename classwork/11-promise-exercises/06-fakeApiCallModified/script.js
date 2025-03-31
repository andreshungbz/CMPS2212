function fakeApiCall(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('Invalid ID'));
      } else {
        resolve({ id, name: `Item ${id}` });
      }
    });
  });
}

fakeApiCall(5)
  .then((result) => {
    console.log('good call');
    return result.name;
  })
  .then((name) => name.toUpperCase())
  .then((item) => console.log(item))
  .catch((error) => {
    console.log('bad call');
    console.error(error);
  });
