const http =require('http');

//创建服务器
const server =http.createServer((request, response)=>{
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    response.end('只因你太美');
})
server.listen(12138,'127.0.0.1',(error)=>{
    if(error){
        console.log('服务器启动失败了',error);
        return;
    }
    console.log('服务器启动成功了');
})