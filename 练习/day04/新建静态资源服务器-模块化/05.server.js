const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util')

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


const server = http.createServer(async (request, response) => {
    try {
        const url = decodeURI(request.url);
        const filePath = path.resolve(__dirname, url.slice(1));
        const stats = await stat(filePath);


        
        if (stats.isDirectory()) {
            const files = await readdir(filePath);
            const lis = files.reduce((p, c) => {
                p += `<li><a href="/${c}">${c}</a></li>`;
                return p;
            }, '');
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.end(`
            <ul>
                ${lis}
            </ul>
        `);
        } else {
            const data = await readFile(filePath);
            response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
            response.end(data)
        }
    } catch (error) {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('文件或文件夹找不到');

    }





});
const host = 'localhost';
const port = 12138;

server.listen(port, host, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('服务器加载成功');
    console.log(`服务器访问地址：http://${host}:${port}`)
});