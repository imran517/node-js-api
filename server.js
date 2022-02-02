const http = require('http');
const Controller  = require('./controller');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    new Controller(req, res).action()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});