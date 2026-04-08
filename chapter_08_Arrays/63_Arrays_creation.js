let fruit=[];
let fruits=["Apple","Banana","Mango"];

let arr=[10,20,30,40,50];

let mixed=[10,"Hello",true,null,undefined];
let testresult=["Pass","Fail","Pass","Pass","skip"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]); //undefined because there is no value at index 5

console.log(mixed[0]);
let browser=["chrome","firefox","edge","safari"];

//Array constructor
let arr1=new Array(10,20,30,40,50);
let arr2=new Array(5); //creates an array of length 5 with all elements as undefined
console.log(arr1);
console.log(arr2);
let arr3=Array.of(10,20,30,40,50); //creates an array with the specified elements
console.log(arr3);
let characters=Array.from("Hello"); //creates an array from a string
console.log(characters);
