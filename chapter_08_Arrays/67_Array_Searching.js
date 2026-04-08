let results=["Pass","Fail","Pass","Pass","skip"];
console.log(results.indexOf("Pass")); //returns 0
console.log(results.indexOf("Fail")); //returns 1
console.log(results.indexOf("skip")); //returns 4
console.log(results.indexOf("Not Attempted")); //returns -1 because "Not Attempted" is not present in the array
console.log(results.lastIndexOf("Pass")); //returns 3 because "Pass" is present at index 0 and 3, lastIndexOf returns the last occurrence of the element in the array   
console.log(results.includes("Pass")); //returns true because "Pass" is present in the array
console.log(results.includes("Not Attempted")); //returns false because "Not Attempted" is not present in the array 
let numbers=[10,20,30,40,50];
console.log(numbers.find(num=>num>25)); //returns 30 because it is the first element in the array that is greater than 25
console.log(numbers.find(num=>num>50)); //returns undefined because there is no element in the array that is greater than 50
numbers.findIndex(num=>num>25); //returns 2 because it is the index of the first element in the array that is greater than 25
numbers.findIndex(num=>num>50); //returns -1 because there is no element in the array that is greater than 50
