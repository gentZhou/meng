const http = require('http');
const fs = require('fs');
const util = require('util');
const path = require('path')
const zlib = require('zlib');

// const readFile = util.promisify(fs.readFile);



const server = http.createServer(async (request, response) => {
    const filePath = path.resolve(__dirname, 'test/text.js');
    // const data = await readFile(filePath);
    let rs = fs.createReadStream(filePath);

    // rs = rs.pipe(zlib.createGzip())
    // response.setHeader('Content-Encoding', 'gzip');
    // rs = rs.pipe(zlib.createDeflate());
    // response.setHeader('Content-Encoding', 'Deflate');
    rs = rs.pipe(zlib.createBrotliCompress());
    response.setHeader('Content-Encoding', 'br');
    response.setHeader('Content-Type', 'application/javascript;charset=utf-8');
    rs.pipe(response);
    // response.end(data);
})

server.listen(12138, 'localhost', (error) => {
    if (error) {
        console.log('服务器启动失败', error);
        return;
    }
    console.log('服务器启动成功  http://localhost:12138')
})