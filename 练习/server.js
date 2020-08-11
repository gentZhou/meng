const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    if (request.url === '/01test.html') {
        const rs = fs.createReadStream('./01test.html');
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        rs.pipe(response);
        return;
    }
    console.log('服务器接收到请求了~')
    if (request.method === 'POST') {
        request.on('data', (chunk) => {
            console.log(chunk.toString());
        });
    }
    response.end('saafsad');
}).listen(12138);