// 1.Normal anonymus Function
var first=function() {
    console.log('this is example of normal anonymus function')
}
first()

//2.parametarized anonymus function
var first=function(a,b) {
    console.log('this is example of parametarized anonymus function')
    console.log( a+b)
}
first(5,10)

//3.Returned anonymous Function
var first=function(a,b) {
    console.log('this is example of Returned anonymus function')
    return a+b
}
console.log(first(5,10))


//4.Anonymous Arrow Function
const greet = () => 
    console.log("Hello from Anonymous Arrow Function");
 greet();


//5.Parameterized arrow anynomous Function
const greet1  = (a,b) => 
    console.log(a+b);
 greet1(5,3);