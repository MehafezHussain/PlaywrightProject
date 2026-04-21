let url="https://www.example.com";
console.log(url.length);

let name="Alice";
console.log(name.toUpperCase());

//multi line string
let message=`Hello, ${name}!
Welcome to JavaScript strings.`;
console.log(message);

//string construction
let str1="Hello";
let str2="World";
let str3=str1+" "+str2;
console.log(str3);

String(true); //Output: "true"
String(123); //Output: "123"
String(null); //Output: "null"
String(undefined); //Output: "undefined"
String([1,2,3]); //Output: "1,2,3"
String({name:"Alice",age:30}); //Output: "[object Object]"  
