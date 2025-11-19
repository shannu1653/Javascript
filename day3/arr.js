//Working with Array Methods
//1.create an array
var arr=['shannu','tharun','rohith','sharanaya']
console.log(arr)

//2.creat an empty array usig array literals
let Emptyarr=[]
console.log(Emptyarr)

//3.Intializing array while declaring
var arr=['shannu','tharun','mahesh']
console.log(arr)

//4.Declaring empty arrayy and adding values using index
var arr=[];
arr[0]='shannu'
arr[1]='tharun'
arr[2]='mohan'
console.log(arr)
console.log(typeof(arr))//object

//5.Accessing individual elements using Index
console.log(arr[0],arr[1])
console.log(typeof(arr[0],arr[1])) //string

//6.create an array 2 nd method array object /new Keyword()
var arrayName=new Array(); //creating empty array
console.log(arrayName)
var arrayName=new Array('shannu','mahesh','tharuni')
console.log(arrayName)//Array with elements

//ex1.Decaring empty array and adding values
var arr=new Array()
arr[0]='mahi'
arr[1]='jimba'
arr[2]='cameo'
arr[4]='john'
console.log(arr)
//ex2.Accesig individual elements
console.log(arr[0])
console.log(arr[3]) //it shows undefined because we do not give an value

//*** 7.Array Methods
//1.push()-->adds one or more elemetns at the end of the array
console.log(arr.push('meghna','shannu'))//it gives 6 number 
console.log(arr)

//2.pop()-->Remove the last elemtn from the array
console.log(arr.pop()) //gives meghna
arr.pop()
console.log(arr)

//3.unshift()-->Adds one or more elemetns at the beginning of the array
arr.unshift('first_name')
console.log(arr)

//4.shift()-->Removes the first element of the array
arr.shift()
console.log(arr)

//5.indexOf()-->know the index value of specific elements
console.log(arr.indexOf('mahii')) //if found give perfect index value other wise gives -1

//6.lenth --> returns the number of elements in the array
console.log(arr.length)

//7.slice()-->Returns a portion of an array as a new array
var new_arr=(arr.slice(4)) //it gives last four value
console.log(new_arr)

//8.splice()-->adds/removes/replaces elements at a specific index.

console.log(arr.splice(3,2));
console.log(arr)
console.log(arr.splice(3,6,35,56.45))
console.log(arr)

//9.concat()-->Merges two or more arrays without changinf the originals.
arr1=['1,2,3,4']
console.log(arr.concat(new_arr,arr1))

//10.toString-->converts the array into a comma-separates string
console.log(arr.toString())
console.log(arr)

//11.join()-->joins array elements into a string with a specified separator
console.log(arr.join("*"))

//12.includes()-->Checks if an element exists in the array
console.log(arr.includes(35)) // it gives boolean value

//13.lastIndexOf()-->Returns the last occurrence of an element
console.log(arr.lastIndexOf(35))

//14.map()-->Applies a function to each element and returns a new array.
var arr2=[3,2,3,4,3]
var double=arr2.map(function(x){
    return x*2;
})
console.log(double)

//15.find() -->Returns the first element that satisfies a test function.
let arr3 = [10, 20, 32,31,35, 40, 50];

let result = arr3.find(function(x){
    return x > 30;
});

console.log(result);  // 35

//16.findIndex
/*Definition: Returns the index of the first element that satisfies a test function.
Syntax: arrayName.findIndex(function(element){ return condition; })
Example:*/
 var index = arr3.findIndex(function(x){ return x > 30; });
 console.log(index); // 2

 //17.Additional Array Methods
/*sort() and reverse()
Definition: sort() method sorts the elements of an array in place and returns the sorted array. reverse() method reverses the elements of an array in place.
Syntax:
 numbers.sort();
 numbers.reverse();
Example:*/
 let numbers = [5, 3, 8, 1];
 console.log(numbers.sort()); // [1, 3, 5, 8]

//20.
/*Definition: Copies a sequence of array elements within the same array to a new position.
Syntax: arrayName.copyWithin(target, start, end)
Example:*/
 let arr4 = [10, 20, 30, 40, 50];
 arr4.copyWithin(0, 2);
 console.log(arr4); // Output: [40, 50, 30, 40, 50]

 //21.flat()
/*Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Syntax: arrayName.flat(depth)
Example:*/
 let arr21 = ['a', 'b', 'c', 'd', 'e', ['f', ['g','h', ['h', 'i']]]];
 let newArr = arr21.flat(4);
 console.log(newArr); // Output: ['a','b','c','d','e','f','g','h','i']
