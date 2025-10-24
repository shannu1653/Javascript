//3.Return functions
function fun1(){
    return ('this is the example of retunrn function')
}
console.log(fun1())

//parameterized return function
function fun2(a,b){
    return (a+b)
}
console.log(fun2(100,1900))


//4.arrow functions
var fun3=()=>{
    console.log('This is an example for arrow function')
}
fun3()

//example problems
//1.Parameterized arrow function
var para=(a,b)=>{
    console.log('This is is parameterized arrow function',a+b)
}
para(5,230)

//2.Returned Arrow function
var ret=()=>{
    return ('this is an example for Returned Arrow function')
}
console.log(ret())

//3.Parameterized returned function
function par(a,b){
    console.log('this is an example for parameterized return function')
    return a+b
}
console.log(par(222,333))

//4.normal arrow function
var nor=()=>{
    console.log('this is an example for noral arrow function')
}
nor()


//task: using parameterized function,write a code as it should take emplyoee details(EID,Ename,Ephone,Ejob,Experiance) print all of them on document with string
function emp(EID,Ename,Ephone,Ejob,Experiance){
    console.log('Employee id is '+EID+' Employee name are '+ Ename+' phone number is '+ Ephone+' currently working '+ Ejob+' Experiance are '+ Experiance)
}
emp(2063,'shanmukh',8096085857,'python full stack developer',"5 years")