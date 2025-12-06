
        // //1.Synchronous examples////////
        // console.log("step1");
        // console.log('step2')
        // console.log('step3')
        // console.log('step4')


    //    /// 2.Asynchronous examples////
    //    console.log("start")
    //    setInterval(()=>{
    //     console.log("Async Task Done")
    //    },2000)
    //    console.log("End")


    // ///example1///
    // ///asynchrnous task
    // console.log("start")
    // setTimeout(()=>console.log("Task is Done"),2000)
    // console.log("End")

     //Addition//synchronus
    //  function add(a,b){
    //     return a+b
    //  }
    //  console.log(add(10,30))
    //asynhronous
    // function addAsync(){
    //     setTimeout(()=>console.log('Result',5+20),3000)
    // }
    // addAsync()
    // console.log("Calculating......")
    
//Reading files
///sync
// const fs = require("fs")
// let data=fs.readFileSync("file.txt","utf8")
// console.log(data)
// asyn
// const fs=require('fs')
// fs.readFile("file.txt",'utf8',(err,data)=>{
//     if (err){
//         console.log('err occures',err)
//         return;
//     }
//     setTimeout(() => {
//         console.log(data)
//     }, 2000);
// })
// console.log("file loading.......")

//fetching user
/*sync --impossible would freexe browser
async
setTimeout(()=>console.log("User data loaded"),2000)*/


//print 10 numbers
/*sync
for(let i=0;i<=10;i++){
    console.log(i)
}*/
//async
// for(let i=0;i<=10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }


////////Real world Examples/////////////
//Example1--->ordering food
/*console.log("Ordering Food")
setTimeout(()=>{
    console.log("Food Ready")
},3000)
console.log('Meanwhile scrolling reels')*/


//examples2---.downloading
/*console.log("Dowloading start")
setTimeout(()=>{
    console.log("Downloading finshed")
},3000)
setTimeout(()=>console.log("Downloading Please Wait......"),1500)
*/

//example3--->boiling water
/*console.log('Boiling water')
setTimeout(() => {
    console.log("Boiled water")
}, 3000);
setTimeout(()=>console.log('cutting vegetables.......!'),1500)
*/

//example4===>brushing
/*console.log("Brushing teeth......")
setTimeout(()=>{
      console.log("Bathing....");
      setTimeout(() => {
        console.log("Eating breakfast....")
      }, 1000);
},1000);*/



console.log("Checking internet....")
setTimeout(() => {
    console.log('connectiong to server...')
    setTimeout(() => {
        console.log("Downloading movie...")
        setTimeout(() => {
            console.log("saving file.....")
            setTimeout(()=>{
                console.log("Movie download complerete!")
            },2000)
        }, 2000);
    }, 2000);
}, 2000);





