enum Severity {
    Low = 1,
    Medium = 2,
    High = 3
}

function logMessage(message: string, severity: Severity): void {
    console.log(`[${Severity[severity]}] ${message}`);
}
logMessage("This is a low severity message.", Severity.Low); //prints "[Low] This is a low severity message."
logMessage("This is a medium severity message.", Severity.Medium); //prints "[Medium] This is a medium severity message."
logMessage("This is a high severity message.", Severity.High); //prints "[High] This is a high severity message."   


enum Environment {
    Development = "development",
    Staging = "staging",
    Production = "production"
}

function getApiEndpoint(env: Environment): string {
    switch (env) {
        case Environment.Development:
            return "https://dev.api.example.com";
        case Environment.Staging:
            return "https://staging.api.example.com";
        case Environment.Production:
            return "https://api.example.com";
        default:
            return "Unknown environment";
    }   
}

console.log("API Endpoint for Development: " + getApiEndpoint(Environment.Development)); //prints "API Endpoint for Development: https://dev.api.example.com"
console.log("API Endpoint for Staging: " + getApiEndpoint(Environment.Staging)); //prints "API Endpoint for Staging: https://staging.api.example.com"
console.log("API Endpoint for Production: " + getApiEndpoint(Environment.Production)); //prints "API Endpoint for Production: https://api.example.com"  


enum Browser1 {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}   
function launchBrowser(browser: Browser1): void {
    switch (browser) {
        case Browser1.Chrome:
            console.log("Launching Chrome browser...");
            break;
        case Browser1.Firefox:
            console.log("Launching Firefox browser...");
            break;
        case Browser1.Safari:
            console.log("Launching Safari browser...");
            break;
        case Browser1.Edge:
            console.log("Launching Edge browser...");
            break;
        default:
            console.log("Unknown browser");
    }
}
launchBrowser(Browser1.Chrome); //prints "Launching Chrome browser..."
launchBrowser(Browser1.Firefox); //prints "Launching Firefox browser..."
launchBrowser(Browser1.Safari); //prints "Launching Safari browser..."
launchBrowser(Browser1.Edge); //prints "Launching Edge browser..."


enum HTTPStatusCode {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

function getStatusMessage(statusCode: HTTPStatusCode): string {
    switch (statusCode) {
        case HTTPStatusCode.OK:
            return "OK";
        case HTTPStatusCode.BadRequest:
            return "Bad Request";
        case HTTPStatusCode.NotFound:
            return "Not Found";
        case HTTPStatusCode.InternalServerError:
            return "Internal Server Error";
        default:
            return "Unknown status code";
    }
}

console.log("Status Message for 200: " + getStatusMessage(HTTPStatusCode.OK));
console.log("Status Message for 400: " + getStatusMessage(HTTPStatusCode.BadRequest));
console.log("Status Message for 404: " + getStatusMessage(HTTPStatusCode.NotFound));
console.log("Status Message for 500: " + getStatusMessage(HTTPStatusCode.InternalServerError)); 

