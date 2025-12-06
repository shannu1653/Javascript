//settimeout is a javascript function that runs some code after a delay(time in millisesconds)
//note-->is does not stop the programm,ot only schedules the code to run later
//examples run this code after 2 seconds

//syntax
//setTimeout(callbackFunction, delayInMilliseconds, optionalArguments...);
//example1
/*setTimeout(() => {
    console.log("Hello after 2 seconds")
}, 2000);*/

//2.Passing a named function
/*function greet(){
    console.log('this is an example for passing a nemade function')
}
setTimeout(greet,2000)*/

//3.Passin arguments
/*function add(a,b){
    console.log("Result:",a+b)
}
setTimeout(add,4000,5,9)*/

//4.setTimeout with 0 ms
/*console.log('Start')
setTimeout(()=>{
    console.log("Timeout with 0ms")
},0)
console.log("End")*/

//5.Cancel a timeout
/*const id=setTimeout(()=>{
    console.log('This will no run!')
},3000)
clearTimeout(id)*/ //it will not getting output beacuser we use cleartimeout

//6.Show a popup after 5 seconds
/*setTimeout(() => {
    alert("Hello everyone this is an pop up")
}, 5000);*/


//3.Simulate loading screen
        /*console.log("loading....")
        setTimeout(() => {
            console.log("Data Loaded!")
        }, 3000);*/

//4.//setTimeout inside loops
    /*for(let i=1;i<=3;i++){
        setTimeout(()=>console.log(i),i*1000)
    
        for(var i=1;i<=3;i++){
        setTimeout(()=>console.log(i),i*1000)
        }

    }*/

let text = "Hello World! Welcome to Typing Animation App.";
let index = 0;
let speed = 150; // typing speed in ms
let timer = null; // holds the timeout id

function typeWriter() {
    if (index < text.length) {
        document.body.innerHTML += text[index];
        index++;

        // timer = setTimeout(typeWriter, speed); // recursive timeout
    }
}
setTimeout(typeWriter, speed); 