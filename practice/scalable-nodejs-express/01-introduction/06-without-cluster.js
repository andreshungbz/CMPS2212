const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/api/test' && req.method === 'GET') {
      console.time('API_without_cluster');
      let result = 0;
      for (let i = 0; i < 5000000; ++i) {
        result += i;
      }

      console.timeEnd('API_without_cluster');
      console.log(`Result = ${result} - on process ${process.pid}`);

      res.end(`Result = ${result}`);
    }
  })
  .listen(3001);
