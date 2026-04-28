let order=new Promise(function(resolve,reject){
    let orderPlaced=true;
    if(orderPlaced){
        resolve("Order placed successfully!");
    } else {
        reject("Failed to place order.");
    }
});

let apicall=new Promise(function(resolve,reject){
    resolve({status:200, data:{message:"API call successful!"}});
});

apicall.then(function(response){
    console.log(response.status);
    console.log(response.data.message);
}).catch(function(error){
    console.log(error);
});

let apicall2=new Promise(function(resolve,reject){
   reject("API call failed!");
});
apicall2.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});


// finally

let apicall3=new Promise(function(resolve,reject){
    resolve("API call successful!");
});
apicall3.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("API call completed.");
}); 

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

openBrowser().then(function(result){
    console.log(result);
    return login();
}).then(function(result){
    console.log(result);
    return navigateToPage();
}).then(function(result){
    console.log(result);
    console.log("Test completed");
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Test execution completed.");
});


let checkAuth=Promise.resolve("User authenticated");
let checkDB=Promise.resolve("Database connected");
let checkCache=Promise.resolve("Cache cleared");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log(results); //["User authenticated","Database connected","Cache cleared"]
})

Promise.all([
    Promise.resolve("User authenticated"),
    Promise.resolve("Database connected"),
    Promise.resolve("Cache cleared")
])

Promise.allSettled([
    Promise.resolve("User authenticated"),
    Promise.reject("Database connection failed"),
    Promise.resolve("Cache cleared")
]).then(function(results){
    console.log(results);
}); 

let fastServer=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast server response");
    }, 1000);
});

let slowServer=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Slow server response");
    }, 3000);
});

Promise.race([fastServer,slowServer]).then(function(winner){
    console.log(winner);
});

let p=Promise.resolve("Initial value");

p.then(function(value){
    return value*10; //NaN because value is a string and cannot be multiplied by 10     
}).then(function(value){
    console.log(value);
});

Promise.resolve("Hello").then(function(value){
    return value + " World";
}).then(function(value){
    console.log(value); //Hello World
});

Promise.reject("Something went wrong").catch(function(error){
    console.log(error); //Something went wrong
});


