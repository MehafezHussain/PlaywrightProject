let userName: string = "John Doe";
let age1: number = 30;
let isStudent: boolean = true;
console.log("Name: " + userName); //prints the name
console.log("Age: " + age1);
console.log("Is Student: " + isStudent); //prints the boolean value

//Arrays
let numbers1: number[] = [1, 2, 3, 4, 5];
let names1: string[] = ["Alice", "Bob", "Charlie"];
console.log("Numbers: " + numbers1);
console.log("Names: " + names1); //prints the array of names

//Tuples
let person2: [string, number] = ["Alice", 25];
console.log("Person: " + person2); //prints the tuple with name and age

//Any type
let randomValue: any = "Hello";
console.log("Random Value: " + randomValue); //prints the string value
randomValue = 42;
console.log("Random Value: " + randomValue); //prints the number value  
randomValue = true;
console.log("Random Value: " + randomValue); //prints the boolean value


//Unknown type
let unknownValue: unknown = "Hello";
console.log("Unknown Value: " + unknownValue); //prints the string value
unknownValue = 42;
console.log("Unknown Value: " + unknownValue); //prints the number value
unknownValue = true;
console.log("Unknown Value: " + unknownValue); //prints the boolean value   

