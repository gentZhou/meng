const http=require('http');
const util=require('util');
const fs=require('fs');
const path=require('path');

const readdir=util.promisify(fs.readdir);

const server=http.createServer(async(request,response)=>{
    try{
        const filePath=path.resolve(__dirname);
        const files = await readdir(filePath);

        const lis = files.reduce((p,c)=>{
            p+=`<li>${c}</li>`;
            return p;
        },``)
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.end(`
            <ul>${lis}</ul>
        `)

    }catch(error){
        if(error){
            response.statusCode=404;
            response.setHeader('Content-Type','text/plain;charset=utf-8')
            response.end('文件找不到   404')
        }
    }

    
})
const port=12137;
const host='localhost'

server.listen(12137,'localhost',(error)=>{
    if(error){
        console.log('服务器启动失败了')
    }
    console.log(`
        服务器启动成功了
        服务器访问地址: http://${host}:${port};
    `)
})