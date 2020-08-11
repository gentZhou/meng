// 创建http server
const server = require('http').createServer();
// 创建websocket服务
const io = require('socket.io')(server);

// io可以代表所有客户端连接对象
io.on('connect', (socket) => {
    //socket 代表当前连接上服务的客户端对象
    socket.on('client_to_server', function (data) {
        console.log(data);
        socket.broadcast.emit('server_to_client', data)
    })
})

//启动服务
server.listen(5557);