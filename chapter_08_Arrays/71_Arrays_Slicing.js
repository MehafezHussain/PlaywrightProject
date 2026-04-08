let arr=[1,2,3,4,5];
console.log(arr.slice(0,3)); //returns a new array with elements from index 0 to 2
console.log(arr.slice(2)); //returns a new array with elements from index 2 to the end of the array
console.log(arr.slice(-2)); //returns a new array with the last 2 elements of the array
console.log(arr.slice(1,-1)); //returns a new array with elements from index 1 to the second last element of the array
console.log(arr.slice()); //returns a new array with all the elements of the original array

let arr1=[1,2,3,4,5];
let a =[1,2];
let b = [3,4]
let c = a.concat(b); //returns a new array by concatenating array a and b
console.log(c);

let d=[...a,...b]; //returns a new array by concatenating array a and b using spread operator
console.log(d);

let s=["pass","fail","pass","pass","skip"].join(","); //returns a string by joining all the elements of the array with a comma as a separator
console.log(s);