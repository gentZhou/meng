/*
  异步文件写入：
    1. 打开文件
      fs.open(path[, flags[, mode]], callback)
    2. 写入文件
      fs.write(fd, string[, position[, encoding]], callback)
    3. 关闭文件
      fs.close(fd, callback)

*/

//引入模块
const fs=require('fs');
//promise只有成功了才会有返回值
//await 返回值看resolve

async function fn(){
  try{
    const fd=await new Promise((resolve,reject)=>{
      fs.open('a.txt','w',(error,fd)=>{
        error=true;
        if(error){
          
        console.log('打开文件出错了',error); 
        reject(error);
        return;
      }
      console.log('打开文件成功了');
      resolve(fd);
    })
      


    })
    await new Promise((resolve,reject)=>{
      fs.write(fd,'哈哈啊哈哈哈哈哈',(error)=>{
        if(error){
          console.log('写入文件出错了',error)
        }else{
          console.log('写入文件成功了');
        }
      resolve();

      })
    })
    await new Promise((resolve,reject)=>{
      fs.close(fd,(error)=>{
        if(error){
          console.log('文件出错了',error);
        }
        console.log('关闭文件成功了')
      })
      resolve();
    })
  }catch(error){
    console.log(error);
  }

}
fn();


// // 1. 打开文件
// fs.open('a.txt', 'w', (error, fd) => {
//   if (error) {
//     console.log('打开文件出错了', error);
//     return;
//   }

//   console.log('打开文件成功了');

//   // 2. 写入文件
//   fs.write(fd, '唱跳rap篮球', (error) => {
//     if (error) {
//       console.log('写入文件出错了', error);
//     } else {
//       console.log('写入文件成功了');
//     }

//     // 3. 关闭文件
//     fs.close(fd, (error) => {
//       if (error) {
//         console.log('关闭文件出错了', error);
//         return;
//       }
//       console.log('关闭文件成功了');
//     })

//   })

// })
