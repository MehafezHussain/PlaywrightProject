let fruits=["Apple","Banana","Mango","Orange","Grapes"];
fruits.sort();
console.log(fruits);

let numbers=[40,10,30,20,50];
numbers.sort();
console.log(numbers); //sorts the numbers in ascending order but as strings, so it sorts based on the first digit   
let num=[10,1,21,2];
num.sort();
console.log(num);  //sorts the numbers in ascending order but as strings, so it sorts based on the first digit
//To sort numbers in ascending order, we can pass a compare function to the sort method
numbers.sort((a,b)=>a-b);
console.log(numbers);
//To sort numbers in descending order, we can pass a compare function to the sort method
numbers.sort((a,b)=>b-a);
console.log(numbers);