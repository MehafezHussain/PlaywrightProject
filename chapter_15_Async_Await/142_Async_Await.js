getToken().then(function(token) {
    return getUserInfo(token);
}).then(function(userInfo) {
    console.log("User Info: ", userInfo);
});

async function fetchData() {
    try {
        let token = await getToken();
        let userInfo = await getUserInfo(token);
        console.log("User Info: ", userInfo);
    } catch (error) {
        console.log("Error: ", error);
    }   
}

fetchData();



///////////////////////////

function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened");
    });
}

function login(){
    return new Promise(function(resolve){
        resolve("Logged in");
    });
}

function navigateToPage(){
    return new Promise(function(resolve){
        resolve("Page loaded");
    });
}

async function runTest(){
    try {
        let browserResult = await openBrowser();
        console.log(browserResult);
        let loginResult = await login();
        console.log(loginResult);
        let pageResult = await navigateToPage();
        console.log(pageResult);
        console.log("Test completed");
    } catch (error) {
        console.log("Error: ", error);
    }
}

runTest();


// Basic async function example
async function fetchData() {
    return "Data fetched successfully!";
}
fetchData().then(function(result) {
    console.log(result);
}
).catch(function(error) {
    console.log(error);
}
);

// Async function with error handling
async function fetchDataWithError() {
    throw new Error("Failed to fetch data!");
}
fetchDataWithError().then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log("Error: ", error.message);
});

//

async function testAPI() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log("API Response: ", data);
    } catch (error) {
        console.log("API call failed: ", error);
    } finally {
        console.log("API call completed.");
    }
}

testAPI();


function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("API call successful for " + name);
        }, 2000);
    }); 
}

async function sequesntialAPICalls(){
    let start=Date.now();
    let result1=await apiCall("Test1");
    console.log(result1);
    let result2=await apiCall("Test2");
    console.log(result2);
    let end=Date.now();
    console.log("Total time taken: " + (end-start)/1000 + " seconds");
}

sequesntialAPICalls();

async function checkEndpoint(){
    let endpoints=["/login","/users","/orders"];
    for(let endpoint of endpoints){
        try {   
            let response=await fetch("https://api.example.com" + endpoint);
            if(response.ok){
                console.log(endpoint + " is up");
            } else {
                console.log(endpoint + " is down");
            }
        } catch (error) {
            console.log(endpoint + " check failed: ", error);
        }
    }
}

checkEndpoint();