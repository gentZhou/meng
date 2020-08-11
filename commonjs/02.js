const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log('服务器接收到请求了~');
    if (request.url === '/02.html') {
        const rs = fs.createReadStream('./02.html');
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        rs.pipe(response);
        return;
    }
    response.end('success~~');
    if (request.method === 'POST') {
        request.on('data', (chunk) => {
            console.log(chunk.toString());
        })
    }
}).listen(12138);