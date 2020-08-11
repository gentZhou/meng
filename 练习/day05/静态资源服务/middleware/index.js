
const fs = require('fs');
const path = require('path');
const util = require('util');
const matchMimeTypes = require('../utils/mimeTypes');
const compress = require('../middleware/compress');
const cache = require('../utils/cache');




// const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);




module.exports = async (request, response) => {
    try {
        const url = decodeURI(request.url);
        const filePath = path.resolve(__dirname, '../', url.slice(1));
        const stats = await stat(filePath);



        if (stats.isDirectory()) {
            const files = await readdir(filePath);//
            const lis = files.reduce((p, c) => {
                // p += `<li><a href="/${c}">${c}</a></li>`;
                // return p;
                const prefixUrl = url === '/' ? url : url + '/';
                p += `<li><a href="${prefixUrl}${c}">${c}</a></li>`;
                return p;
            }, '');

            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.end(`
            <ul>
                ${lis}
            </ul>
        `);
        } else {
            // 检查缓存
            const isCache = cache(stats, request, response);
            // 命中缓存后面代码不执行了
            if (isCache) return;


            // console.log(stats);
            // 说明是文件
            // const data = await readFile(filePath);
            let rs = fs.createReadStream(filePath);
            console.log(filePath);
            const mimeType = matchMimeTypes(url);
            response.setHeader('Content-Type', `${mimeType};charset=utf-8`)

            // if (stats.size > 1024) {
            rs = compress(rs, request, response);
            // }

            // response.end(data)
            rs.pipe(response);
        }
    } catch (error) {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');


        response.end('文件或文件夹找不到');
    }
}