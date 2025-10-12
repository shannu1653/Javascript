/*var arr=['shannu','vizianagaram',22,'175cm','pythonfull stack']
var [persion,place,age,height,course]=arr;
console.log(persion) */

// var obj={name:"diwali",date:33-4-3,purpose:"Removing darkness"}
// var {name :a,date:d,purpose:p}=obj;
// console.log(a);
// console.log(d);
// console.log(p);


// var obj={name:"diwali",date:33-4-3,purpose:"Removing darkness"}
// var {name ,...purpose}=obj;
// console.log(name);
// console.log(purpose);



var arr=['shanmukh',20000,'vizianagaram']
var [name,salary,place]=arr;
a=prompt("enter a salary : ");
var status=a>=1000?arr:'salary must greater than 1000';
document.write(status)