const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);

    // response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('content-type', 'application/json;charset=utf-8')
    const repo = {
        name: 'vue',
        url: 'https://github.com/vue',
    }

    response.end(
        JSON.stringify({
            code: 10000,
            data: repo,
        })
    )
})

server.listen(5000);