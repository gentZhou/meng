const http=require('http');

const request=http.request('http://127.0.0.1:12138',(response)=>{
    response.on('data',(chunk)=>{
        console.log(chunk.toString());
    })
})
request.end();
