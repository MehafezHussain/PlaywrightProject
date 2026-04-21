function openBrowser(callback){
    console.log("Opening browser...");
    setTimeout(function(){
        console.log("Browser opened");
        callback();
    }, 2000);
}

function login(callback){
    console.log("Logging in...");
    setTimeout(function(){
        console.log("Logged in");
        callback();
    }, 2000);
}   
function navigateToPage(callback){
    console.log("Navigating to page...");
    setTimeout(function(){
        console.log("Page loaded");
        callback();
    }, 2000);
}

openBrowser(function(){
    login(function(){
        navigateToPage(function(){
            console.log("Test completed");
        });
    });
});
