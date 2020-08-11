//配置文件
const isPort = false;

//开发环境
let port = 12138;
let host = 'localhost';

if (isPort) {
    port = 80;
    host = '127.0.0.1'
}

module.exports = {
    port,
    host
}