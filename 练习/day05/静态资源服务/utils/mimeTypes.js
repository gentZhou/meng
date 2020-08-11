//所有文件类型
const mimeTypes = {
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    html: 'text/html',
    txt: 'text/plain',
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
    gif: 'image/gif',
    png: 'image/png',
    wepb: 'image/wepb',
    mp4: 'video/mp4',
    mp3: 'audio/mp3'
}
//找到地址对应文件类型
function matchMimeTypes(url) {
    const arr = url.split('.');
    //获取文件扩展名(后缀名)
    const extname = arr[arr.length - 1].toLowerCase();
    return mimeTypes[extname] || 'text/plain';
}

module.exports = matchMimeTypes;
