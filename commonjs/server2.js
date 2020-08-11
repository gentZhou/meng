const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log('服务器接收到请求了~');
    if (request.url === '/01.ajax.html') {
        const rs = fs.createReadStream('./01.ajax.html');
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        rs.pipe(response);
        return;
    }
    if (request.method === 'GET') {
        // console.log(request.url);
        // response.end('success~');
        const { callback } = request.url
            .split('?')[1]
            .split('&')
            .reduce((p, c) => {
                const [key, val] = c.split('=');
                p[key] = val;
                return p;
            }, {});

        const person = {
            name: 'jack',
            age: 18
        }
        response.setHeader('Content-Type', 'application/javascript;charset=utf-8');
        // getData(JSON.stringify(person))
        response.end(`${callback}(${JSON.stringify(person)})`);
    }
    if (request.method === 'POST') {//json
        request.on('data', (chunk) => {
            console.log(chunk.toString());
        })
        response.end('succssss');
    }

    // if(request.method==='POST'){
    //     request.on('data')
    // }
}).listen(12138)