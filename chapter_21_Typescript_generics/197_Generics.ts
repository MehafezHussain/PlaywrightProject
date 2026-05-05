import { get } from "node:http";

function getFirstResult(name: string): string {
    // Simulating a search operation
    const results = ["Result 1", "Result 2", "Result 3"];
    return results[0]; // Return the first result
}

getFirstResult("Test"); // Returns "Result 1"

function getFirstResultGeneric<T>(name: string): T {
    // Simulating a search operation
    const results: T[] = ["Result 1", "Result 2", "Result 3"] as unknown as T[];
    return results[0]; // Return the first result
}

getFirstResultGeneric<string>("Test"); // Returns "Result 1"
getFirstResultGeneric<number>("Test"); // Returns 1

class TestDataStorage<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    getFirst(): T {
        return this.data[0];
    }
}   
const stringStorage = new TestDataStorage<string>();
stringStorage.add("Test Data 1");
stringStorage.add("Test Data 2");
console.log(stringStorage.getFirst()); //prints "Test Data 1"
const numberStorage = new TestDataStorage<number>();
numberStorage.add(100);
numberStorage.add(200);
console.log(numberStorage.getFirst()); //prints 100