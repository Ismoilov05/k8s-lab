const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'node-api',
    status: 'ok',
    message: 'Hello from Kubernetes!'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Node API listening on port 3000');
});
