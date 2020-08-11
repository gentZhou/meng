// console.log(global.Buffer);

const buf1=Buffer.alloc(8);
buf1[2]=123;

console.log(buf1);
const buf2=Buffer.from('true');
console.log(buf2);
console.log(buf2.toString());