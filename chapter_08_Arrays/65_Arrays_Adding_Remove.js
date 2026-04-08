let arr=[10,20,30,40,50];
arr.push(60); //adds 60 at the end of the array
console.log(arr); //[10,20,30,40,50,60]
arr.pop(); //removes the last element of the array
console.log(arr);
arr.push(70,80); //adds 70 and 80 at the end of the array
console.log(arr);
arr.unshift(5); //adds 0 at the beginning of the array
console.log(arr);
arr.shift(); //removes the first element of the array
console.log(arr);
arr.splice(2,1); //removes 1 element at index 2
console.log(arr);
arr.splice(2,0,99); //adds 25 at index 2 without removing any element
console.log(arr);
arr.splice(1,2,11,22); //removes 2 elements at index 1 and adds 11 and 22 at index 1
console.log(arr);