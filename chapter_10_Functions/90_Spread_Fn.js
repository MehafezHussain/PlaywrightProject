function add(a,b,c){
    return a+b+c;
}

let numbers=[10,20,30];
console.log(add(...numbers)); //Output: 60  


function hasError(...args){
    return args.includes("error");
}

console.log(hasError("success","warning","error")); //Output: true
console.log(hasError("success","warning")); //Output: false

function getStatus(code){
    if(code===200){
        return "OK";
    }else if(code===404){
        return "Not Found";
    }else if(code===500){
        return "Internal Server Error";
    }else{
        return "Unknown Status Code";
    }   
}

getStatus(200); //Output: OK
getStatus(404); //Output: Not Found
getStatus(500); //Output: Internal Server Error
getStatus(403); //Output: Unknown Status Code

let statusCodes=[200,404,500,403];
console.log(getStatus(statusCodes[0])); //Output: OK
console.log(getStatus(statusCodes[1])); //Output: Not Found
console.log(getStatus(statusCodes[2])); //Output: Internal Server Error
console.log(getStatus(statusCodes[3])); //Output: Unknown Status Code

function logTest(name){
    console.log(`Running test: ${name}`);   
}

//Return multiple values from a function using an array
function getUserInfo(){
    let name="John Doe";
    let age=30;
    let email="john.doe@example.com";
    return [name, age, email];
}
let [name, age, email]=getUserInfo();
console.log(name); //Output: John Doe
console.log(age); //Output: 30
console.log(email); //Output: john.doe@example.com

//Hoisting functions
console.log(square(5)); //Output: 25

function square(num){
    return num*num;
}


//var functions are hoisted but variables declared with var are hoisted but not initialized
console.log(x);
var x=10; //Output: undefined because x is hoisted but not initialized


//Scope of functions
let env="staging";
function setupconfig(){
    let timeout=5000;
    console.log(`Environment: ${env}`);
    console.log(`Timeout: ${timeout}`);
}

setupconfig();


//Nested functions
function outer(){
    let outerVar="I am from outer function";    
    function inner(){
        let innerVar="I am from inner function";
        console.log(outerVar);
        
    }
    inner();
    console.log(innerVar); //ReferenceError: innerVar is not defined because innerVar is only accessible within the inner function
}


//Closures
function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}

let increment=counter();
increment(); //Output: 1
increment(); //Output: 2

function outer(){
    let outerVar="I am from outer function";
    console.log(outerVar);
    function inner(){
        let innerVar="I am from inner function";
        console.log(innerVar);
        console.log(outerVar); //Output: I am from outer function because inner function has access to outer function's variables due to closure
    }
    inner();
    console.log(innerVar); //ReferenceError: innerVar is not defined because innerVar is only accessible within the inner function
}

outer();

let fun_inner=outer();
fun_inner(); // Output: I am from outer function, I am from inner function, I am from outer function

inner(); // ReferenceError: inner is not defined because inner function is not accessible outside the outer function


//Higher order functions
//A higher order function is a function that takes another function as an argument or returns a function as a result
function runwithLogging(testFn, testName){
    console.log(`Running test: ${testName}`);
    let result=testFn();
    console.log(`Test result: ${result}`);
    return result;
}

function loginTest(){
    // Simulate a login test
    return "Login successful";
}
runwithLogging(loginTest, "Login Test"); //Output: Running test: Login Test, Test result: Login successful


//Pure functions
//A pure function is a function that always produces the same output for the same input and has no side effects
function add(a,b){
    return (a+b).toFixed(2);
}
console.log(add(10,20)); //Output: 30
console.log(add(10,20)); //Output: 30

//Impure function
let count=0;    
function increment(){
    count++;
    return count;
}
console.log(increment()); //Output: 1
console.log(increment()); //Output: 2 because the function has a side effect of modifying the count variable

//call back functions
function fetchData(callback){
    setTimeout(()=>{
        let data="Sample Data";
        callback(data);
    }, 1000);
}

fetchData((data)=>{
    console.log(`Data received: ${data}`);
}); //Output: Data received: Sample Data after 1 second

function hussain_doing_work(worker, callback){
    let work=worker();
    console.log(`Hussain is doing ${work}`);
    callback(work);
}

function callwife(){
    console.log("Calling wife...");
}

hussain_doing_work('PW class', callwife); //Output: Calling wife...