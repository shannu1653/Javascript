
//1. Find the first non-repeated character
const str = "aabbccd";
let charCount ={};
for (let i = 0; i < str.length; i++){
    const char = str[i];
    if (charCount[char]){
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
let firstNonRepeated = null;
for (let i = 0; i < str.length; i++){
    if (charCount[str[i]] === 1) {
        firstNonRepeated = str[i];
        break;
    }
}
console.log(firstNonRepeated);


//2. Convert temperature series from Celsius to Fahrenheit
function celsiusTemperatures(value){
    fahrenheitTemperatures=(value*9/5)+32
    return  fahrenheitTemperatures
}
console.log(celsiusTemperatures(100));


//3.Reverse words in a sentence(preserving space)
var sentence = "Hello World JS";
var reversed = "";
var word = "";

for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] === " ") {
        reversed = " " + word + reversed;
        word = "";
    } 
    else {
        word += sentence[i];
    }
}
reversed = word + reversed;
console.log(reversed); 

//Q7. Count Character Occurrences in a String

const str1='aabbd'
let charCount1={}
for (let i = 0; i < str1.length; i++){
    const char1 = str1[i];
    if (charCount1[char1]){
        charCount1[char1]++;
    }
    else {
        charCount1[char1] = 1;
    }
}
console.log(charCount1)

//11.Count vowels in string
const vowels = ['a', 'e', 'i', 'o', 'u']
const inputString = 'shannu'
let count = 0
for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])){
        count++
    }
}
console.log(count)

//Q10. Swap two variables without a temp (using destructuring)
var a=10
var b=20
a=a+b
b=a-b
a=a-b
console.log(a)
console.log(b)

//
