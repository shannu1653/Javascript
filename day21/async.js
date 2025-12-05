// //synchronus
// console.log("step1")
// console.log("step2")
// console.log("step3")

// //Asunchronus
// console.log("step1")
// setTimeout(()=>{
//     console.log("step2")
// },2000)
// console.log("step3")

// //callback
// function Homework(subject,callback){
   
//     setTimeout(()=>console.log("Subject "+subject+ " homework finished"),2000)
//     callback()
// }
// function finished(){
//     console.log("Home work finshed Completely")
// }
// Homework("Computers",finished)



//callback hell
setTimeout(()=>{
    console.log("step 1 done")
    setTimeout(()=>{
        console.log("step 2 done")
        setTimeout(()=>{
            console.log("step 3 done")
            setTimeout(() => {
                console.log("step 4 done")
            }, 2000);
        },2000)
    },2000)
},2000)

//nodles
function BoilWater(callback){
    setTimeout(()=>{
        console.log("Boil The Water")
        callback()
    },5000)
}
function AddNoodles(callback){
    setTimeout(()=>{
        console.log("Adding Noodles")
        callback()
    },2000)
}
function AddMasala(callback){
    setTimeout(() => {
        console.log("Adding Masala")
        callback()
    },2000);
}
function Serve(){
    setTimeout(()=>{
        console.log("Serve is Done")
    },2000)
}
BoilWater(()=>{
    AddNoodles(()=>{
        AddMasala(()=>{
            Serve()
        })
    })
})