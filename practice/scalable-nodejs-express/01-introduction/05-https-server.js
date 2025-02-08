const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync(`./openssl/ssl.key`),
  cert: fs.readFileSync(`./openssl/ssl.crt`),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end(`hello world from https server\n`);
  })
  .listen(3000);
