class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getHeaders(): { [key: string]: string } {
        return {
            "Authorization": `Bearer ${this.apiKey}`,
            "Content-Type": "application/json"
        };
    }

    public sendRequest(endpoint: string, data: any): void {
        const headers = this.getHeaders();
        console.log(`Sending request to ${this.baseURL}${endpoint} with data:`, data);  
        console.log("Request headers:", headers);
    }
}

class UserAPIClient extends APIClient {
    getUser(userId: string): void {
        this.sendRequest(`/users/${userId}`, {});
    }
}


//Absract class example

abstract class BaseTest {
    protected testName: string;

    constructor(testName: string) {
        this.testName = testName;
    }
    abstract runTest(): void; // Abstract method to be implemented by subclasses
    abstract displayTestInfo(): void; // Abstract method to be implemented by subclasses
    abstract getTestResult(): string; // Abstract method to be implemented by subclasses    
}

class UItest extends BaseTest {
    runTest(): void {
        console.log(`Running UI test: ${this.testName}`);   
    }
    displayTestInfo(): void {
        console.log(`UI Test Name: ${this.testName}`);
    }
    getTestResult(): string {
        return "UI Test Result: Passed";
    }
}

// As Alias
type TestCase1 = {
    id: number;
    name: string;
    status: string;
    duration: number;
    priority: string;
    display(): void;
}

let test11: TestCase1 = {
    id: 1,
    name: "Test Case 1",
    status: "Pending",
    duration: 10,
    priority: "High",
    display(): void {
        console.log(`Test Case: ${this.name}`);
    }
};

let element:unknown={
    id: 1,
    name: "Test Element",
    type: "UI",
    tagName: "Button",
    disabled: true
}

let buttonElement=element as { id: number; name: string; type: string; tagName: string; disabled: boolean };
console.log("Button Element Name: " + buttonElement.name); //prints the name of the button element

//Decorators

function Role(roleName: string) {
    return function (target: any) {
        target.prototype.role = roleName;
    }
}

@Role("Admin")
class AdminUser {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let admin = new AdminUser("Alice");
console.log("Admin Name: " + admin.name);