const http = require('http');
const util = require('util');
const fs = require('fs');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

const server = http.createServer(async (request, response) => {
    try {
        const url = decodeURI(request.url);

        const filePath = path.resolve(__dirname, url.slice(1));
        const stats = await stat(filePath);

        if (stats.isDirectory()) {
            const files = await readdir(filePath);
            // 拼接成字符串
            const lis = files.reduce((p, c) => {
                // c 就是文件名   01.server.js
                // 访问文件路径： http://localhost:9527/01.server.js 
                // 简写：/01.server.js 
                p += `<li><a href="/${c}">${c}</a></li>`;
                return p;
            }, "");
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.end(`
            <ul>${lis}</ul>
        `)

        } else {
            const data = await readFile(filePath);
            response.setHeader('Content-Type', 'application/javascript;charset=utf-8');
            response.end(data)
        }

        // const lis = files.reduce((p,c)=>{
        //     p+=`<li>${c}</li>`;
        //     return p;
        // },``)

    } catch (error) {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end('文件找不到   404')
    }


});
const port = 12137;
const host = 'localhost'

server.listen(12137, 'localhost', (error) => {
    if (error) {
        console.log('服务器启动失败了')
    }
    console.log(`
        服务器启动成功了
        服务器访问地址: http://${host}:${port};
    `)
})