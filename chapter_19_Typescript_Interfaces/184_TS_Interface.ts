interface TestCase {
    id: number;
    name: string;
    status: string; // Optional property
    duration: number; // Method to run the test case
    priority: string;
    display(): void;
}

let test1: TestCase = {
    id: 1,
    name: "Test Case 1",
    status: "passed",
    duration: 100,
    priority: "high",
    display() {
        console.log(`Test Case: ${this.name}, Status: ${this.status}, Priority: ${this.priority}`);
    }
};

let test2: TestCase = {
    id: 2,
    name: "Test Case 2",
    status: "failed",
    duration: 150,
    priority: "medium",
    display() {
        console.log(`Test Case: ${this.name}, Status: ${this.status}, Priority: ${this.priority}`);
    }
};
