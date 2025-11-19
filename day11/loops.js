/*function marks(marks){
if(marks>=90 && marks<=100){
    console.log('grade A')
}
else if(marks<90 && marks>=85){
    console.log('grade B')
}
else if (marks<85 && marks>=65){
    console.log('grade C')
}
else if (marks<65 && marks>=35){
    console.log('grade c')
}
else{
    console.log('you are failed')
}
}
marks(Number(prompt('Enter your marks :')))
*/

//1.for loop

/*for(let i=1;i<5;i++){
    console.log(i);//it will prints only 4 or n-1
}
for (let i=0;i<5;i++){
    console.log(i+1) //it will prints 0 to 5 -->i+1
}

const students=['shanmukha','tharun','naveen','satish']
for(i=0;i<students.length;i++){
    console.log(`students ${i+1} : ${students[i]}`)
}*/

//2.while loop
//intialization
//while(condition){
//block of code
//increment or decreament}

/*var i=0
while(i<5){
    console.log(i+1)
    i++;
}
var std_names=['shannu','tharun','naveen']
i=0
while(i<std_names.length){
    console.log(`student ${i+1} : ${std_names[i]}`)
    i++
}*/

//3.do while
/*`syntax-->do{
             //block of code
             }
          while(condition)`*/
/*let i=0
do{
    console.log(i+1);
    i++
}
while(i<5)

const student=['shannu','navven','tharun']
i=0
do{
    console.log(`student_name ${i+1} : ${student[i]}`)
    i++
}
while(i<student.length)*/

//4.for...of Loop -->used to iterate over the iterable objects(arrays,strigs,maps,sets)
//syntax-->for(element of iterable){//block of code}`
/*let numbers=[1,2,3,4,5];
for(num of numbers){
    console.log(num)
}
const students=['shannu','navven','prashnath']
for(std of students){
    console.log(`students : ${std}`)
}*/

//5.for in loop -->used to iterate over enumerable properties of objects
//for(key in object){//block of code}
/*let persion={name:'shannu',
             age:30,
             city:'new_york',
}
for(let key in persion){
    console.log(key + ": " + persion[key])
    console.log(`${key} : ${persion[key]}`)
}

let scores={john : 90,
            shannu :100,
            naveen : 101
}
for (let score in scores){
    console.log(`${score} scored ${scores[score]}`)
}*/

//Continue and Break in  loops
//Continue--skips current iteration ,moves to next
/*for(let i=0;i<21;i++){
    if(i%2==0) continue;
    console.log(i) //print odd numbers form 
}

for (let i=0;i<10;i++){
     console.log(i)
    if(i==5) break;
   
}

*/


/*
for (let i=0;i<=10;i++){
    console.log(i)
}*/

var marks={
    shannu:123,
    naveen:324,
    tharun:324
}
for (var i in marks){
    console.log(`Marks of ${i} are ${marks[i]}`)
}