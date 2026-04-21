let str="Hello, World!";
console.log(str.length); //Output: 13   
console.log(str.toUpperCase()); //Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); //Output: "hello, world!"
console.log(str.includes("World")); //Output: true
console.log(str.startsWith("Hello")); //Output: true
console.log(str.endsWith("!")); //Output: true
console.log(str.indexOf("o")); //Output: 4
console.log(str.lastIndexOf("o")); //Output: 8
console.log(str.slice(0,5)); //Output: "Hello"
console.log(str.slice(7)); //Output: "World!"
console.log(str.split(", ")); //Output: ["Hello", "World!"]
console.log(str.replace("World", "JavaScript")); //Output: "Hello, JavaScript!"
console.log(str.charAt(1)); //Output: "e"
console.log(str.at(-1)); //Output: "!"
console.log(str.search("World")); //Output: 7
console.log(str.match(/o/g)); //Output: ["o", "o"]
console.log(str.trim()); //Output: "Hello, World!" (no leading or trailing whitespace to remove)
console.log(str.trimStart()); //Output: "Hello, World!" (no leading whitespace to remove)
console.log(str.trimEnd()); //Output: "Hello, World!" (no trailing whitespace to remove)

//Extracting substring using substring method
console.log(str.substring(0,5)); //Output: "Hello"
console.log(str.substring(7,12)); //Output: "World!"

//Transforming string to array and vice versa
let arr=str.split(", "); //Output: ["Hello", "World!"]
let newStr=arr.join(" "); //Output: "Hello World!"

let msg="Test:FAIL.Retry:FAIL.";
let parts=msg.split("."); //Output: ["Test:FAIL", "Retry:FAIL", ""]
console.log(parts);
let status=parts[0].split(":")[1];
msg=msg.replace(/FAIL/g,"PASS"); //Output: "Test:PASS.Retry:PASS."
console.log(status); //Output: "FAIL"
console.log(msg); //Output: "Test:PASS.Retry:PASS."

let url="https://www.example.com";
console.log(url.replace("https","http")); //Output: "http://www.example.com"

//Spitting and joining a string with different separators
let sentence="JavaScript is a versatile language.";
let words=sentence.split(" "); //Output: ["JavaScript", "is", "a", "versatile", "language."]
console.log(words);
let newSentence=words.join("-"); //Output: "JavaScript-is-a-versatile-language."
console.log(newSentence);

//String conversion
console.log(String(true)); //Output: "true"
console.log(String(123)); //Output: "123"
console.log(String(null)); //Output: "null"
console.log(String(undefined)); //Output: "undefined"
console.log(String([1,2,3])); //Output: "1,2,3"
console.log(String({name:"Alice",age:30})); //Output: "[object Object]" 
parseInt("123px"); //Output: 123
parseFloat("3.14"); //Output: 3.14
Number("123"); //Output: 123
Number("3.14"); //Output: 3.14
Number("abc"); //Output: NaN (Not a Number) 