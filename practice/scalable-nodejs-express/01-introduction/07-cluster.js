const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length;
  console.log(`Master ${process.pid} started`);
  console.log(`Number of workers => ${numWorkers}`);
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log(`Let's for another worker!`);
    cluster.fork();
  });
} else {
  console.log('Worker ${process.pid} started');
  http
    .createServer((req, res) => {
      if (req.url === '/api/test' && req.method === 'GET') {
        console.time('API_with_cluster');
        let result = 0;
        for (let i = 0; i < 5000000; ++i) {
          result += i;
        }
        console.timeEnd('API_with_cluster');
        console.log(`Result = ${result} - on process ${process.pid}`);
        res.end(`Result = ${result}`);
      }
    })
    .listen(3000);
}
