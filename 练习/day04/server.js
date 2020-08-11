const http=require('http');
const fs =require('fs');
//path查找地址
const path =require('path');
//util中放置工具函数
const util =require('util');
 

//创建服务器
const readFile=util.promisify(fs.readFile);

const server = http.createServer(async(request,response)=>{
    try{
        const filePath=path.resolve(__dirname,'server.js');

    const data=await readFile(filePath);
    response.setHeader('Content-Type','application/javascript;charset=utf-8');
    response.end(data);
    
    }catch (error){
        response.statusCode=404;
        response.setHeader('Content-Type','application/javascript;charset=utf-8');
        response.end('文件找不到  404');
    }
    
})

// 监听端口号。启动服务
server.listen(12138,'127.0.0.1',(error)=>{
    if(error){
        console.log('服务器启动失败',error);
        return;
    }
    console.log('服务器启动成功了');
})
