const http=require('http');
const fs = require('fs');
const path = require('path');

const server=http.createServer((request,response)=>{
    const filePath = path.resolve(__dirname,'服务器.js');

    fs.readFile(fliePath,(err,data)=>{})
    
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end('你好啊');

})
server.listen(12138,'localhost',(error)=>{
    if(error){
        console.log('服务器启动失败');
    }
    console.log('服务器启动成功');
})
