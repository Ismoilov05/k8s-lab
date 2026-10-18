const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'healthy' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'node-api',
    version: 'v3',
    status: 'ok',
    message: 'Hello from Kubernetes v3!'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Node API v3 listening on port 3000');
});
