function greetTester(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

greetTester("Alice", function() {
    console.log("Welcome to the testing world!");
});


//callback with parameters
function performTest(testName, callback) {
    console.log("Performing test: " + testName);
    callback(testName + " completed");
}   
performTest("Login Test", function(result) {
    console.log(result);
});

//sync callback for each
let testResults=["PASS","FAIL","PASS","PASS"];
testResults.forEach(function(result,index){
    console.log("Test " + index + ": " + result);
});

function calculate(a, b, callback) {
    let sum = a + b;
    callback(sum);
}
calculate(5, 3, function(result) {
    console.log("Sum: " + result);
});

setTimeout(function() {
    console.log("This is an asynchronous callback executed after 2 seconds");
}, 2000);

function step1(callback) {
    console.log("Step 1 completed");
    callback();
}
function step2(callback) {
    console.log("Step 2 completed");
    callback();
}
function step3() {
    console.log("Step 3 completed");
}
step1(function() {
    step2(function() {
        step3();
    });
});
