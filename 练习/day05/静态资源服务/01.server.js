const http = require('http');
const open = require('./open.js');
const middleware = require('./middleware');
const { port, host } = require('./config/index.js');

const agv = require('./test/text.js');

// const { } = Object.assign({}, config)

const server = http.createServer(middleware);


server.listen(port, host, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    const url = `http://${host}:${port}`;
    open(url);
    console.log('服务器加载成功');
    console.log(`服务器访问地址：http://${host}:${port}`)
});