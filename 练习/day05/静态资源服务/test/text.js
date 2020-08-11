const yargs = require('yargs');

//运行当前文件的指令
const argv = yargs
    .command('[options]:')
    //添加指令选项
    .option('prot', {
        alias: 'p',//配置指令别名
        describe: '指定ip',
        default: 12138
    })
    .option('host', {
        alias: 'H',
        describe: '指定主机名',
        default: 'localhost'
    })
    .version()
    .alias('version', 'v')
    .help()
    .alias("help", 'h').argv

console.log(argv);
module.exports = argv;