import http from "http";
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World!!! from the new http server");
});

server.listen(3001);