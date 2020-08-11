function sum(...args){
    return args.reduce(function (a,b){
            return a+b;
        },0)
    
}

module.exports={b:function(){
    console.log('我不好');
}};
module.exports={a:function(){
    console.log('你好啊');
}}