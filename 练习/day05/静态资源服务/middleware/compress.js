//压缩
/* 
    rs 可读流
    request  请求对象
    response 响应对象
*/
const zlib = require('zlib');
function compress(rs, request, response) {
    //1.获取客户端兼容的压缩格式
    const acceptEncoding = request.headers['accept-encoding'];


    //半段是否支持gzip
    const isGzip = acceptEncoding.match(/gzip/);
    if (isGzip) {
        // 对数据进行gzip压缩
        rs = rs.pipe(zlib.createGzip());
        //设置响应头
        response.setHeader('Content-Encoding', 'gzip')
        return rs;
    }

    const isDeflate = acceptEncoding.match(/deflate/);
    if (isDeflate) {
        // 对数据进行gzip压缩
        rs = rs.pipe(zlib.createDeflate());
        //设置响应头
        response.setHeader('Content-Encoding', 'gzip')
        return rs;
    }

    const isBr = acceptEncoding.match(/br/);
    if (isBr) {
        // 对数据进行gzip压缩
        rs = rs.pipe(zlib.createBrotliCompress());
        //设置响应头
        response.setHeader('Content-Encoding', 'br')
        return rs;
    }

    return rs;
}

module.exports = compress;