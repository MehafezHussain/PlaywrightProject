let result=Array.isArray([1,2,3]);
console.log(result); //returns true because [1,2,3] is an array
let result2=Array.isArray("hello");
console.log(result2); //returns false because "hello" is a string

let r=[80,90,70,85,95].every(score=>score>=70);
console.log(r); //returns true because every score in the array is greater than or equal to 70  
let r2=[80,90,70,65,95].some(score=>score<70);
console.log(r2); //returns true because there is at least one score in the array that is less than 70   

