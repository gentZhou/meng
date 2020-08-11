const etag = require('etag');
//检查资源是否要走协商缓存
function checkCache(stats, request) {
    //获取客户端的请求头的两个字段
    const ifModifiedSince = request.headers['if-modified-since'];
    const ifNoneMatch = request.headers['if-none-match'];

    //获取文件本身的etag和last-modified
    const Etag = etag(stats);
    const lastModified = new Date(stats.mtime).toGMTString();

    if (ifNoneMatch !== Etag) {
        return false;
    }

    if (ifModifiedSince !== lastModified) {
        return false;
    }
    return true;
}

// 设置新缓存
function setCache(stats, response) {
    //先设置强制缓存
    response.setHeader('Cache-Control', 'max-age=60');
    response.setHeader('Expires', new Date(Date.now() + 60000).toGMTString());
    // 再设置协商缓存
    response.setHeader('Etag', etag(stats));
    response.setHeader('Last-Modified', new Date(stats.mtime).toGMTString());
}

function cache(stats, request, response) {
    const isCache = checkCache(stats, request);

    if (isCache) {
        //要走缓存,响应到此终止,后面就不需要了
        //设置响应状态码304
        response.statusCode = 304;
        response.end();
        return true;
    }
    //不走缓存,设置新缓存
    //还需要
    setCache(stats, response);
}
module.exports = cache;