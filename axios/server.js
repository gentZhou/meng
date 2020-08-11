const http = require('http');

const server = http.createServer((request, response) => {
    setTimeout(() => {
        response.setHeader('Content-Type', 'application/json;charset=utf-8');
        response.setHeader('Access-Control-Allow-Origin', '*');
        const person = {
            name: 'jack',
            age: 18
        }
        response.end(JSON.stringify(person));
    }, 5000);

})
server.listen(12138, 'localhost', (error) => {
    if (error) {
        console.log('服务器启动失败', error);
    };
    console.log('服务器启动成功了')
})