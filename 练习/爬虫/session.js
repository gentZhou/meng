const http=require('http');
/* 
回话控制:解决http协议无状态问题(http协议是没办法区别用户)
1. cookie
    -创建
    res.setHeader('set-Cookie','user=jack;max-age=3600;httpOnly=true');
    -获取
    req.header.cookie
    -删除
    res.setHeader('set-Cookie','user=;max-age=0')

    客户端获取 document.cookie
    客户端设置 document.cookie = 'name=rose;max-age=3600'

    特点:
        本质上是存储在客户端key-value文本
        大小  30kb左右和数量  20个左右有限制
        传输流量大
        安全性较低

2.session

本质上是存储在服务器对象
大小和数量理论上没有限制
传输流量小 (只有一个cookie)
安全性较高


*/
//创建session对象
const session = {};

/* 
生成随机id的方法
*/
function uniqueId(){
    // substring去掉.
    const randomNum = Number(Math.random().toString().substring(2));
    // tostring(32)转为32进制
    return (randomNum + Date.now()).toString(32);
}
/* 
如果访问 /login 代表要存储用户信息
如果访问 /user 代表要获取用户信息
*/
const server = http.createServer((request,response)=>{
    const url = request.url;
    if(url === '/favicon.ico')return;

    if(url.startsWith('/login')){
        // 获取查询字符串参数并解析成对象
        const qs = url.split('?')[1];
        //['name=jack','age=18]
        const arr=qs.split('&');
        const query = arr.reduce((p,item)=>{
            cont [Key,value]=item.split('=');
            p[key]=value;
            return p;
        },{});
    }
})
