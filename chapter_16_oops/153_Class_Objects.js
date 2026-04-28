class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.


class Person2 {
    name;
    age;
    email;
    salary;

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}

let person2 = new Person2();
person2.name = "Bob";
person2.age = 25;
person2.email = "bob@example.com";
person2.salary = 50000;
person2.sleep();
person2.eat();
person2.work();


class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
let car1 = new car("Toyota", "Camry", 2020);
console.log(car1.make);


class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {
        console.log(`Test Case: ${this.name}, Status: ${this.status}, Priority: ${this.priority}`);
    }
}

let testCase1 = new TestCase("Login Test", "Pass", "High");
testCase1.display(); // Test Case: Login Test, Status: Pass, Priority: High


class Browser {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
    launch() {
        console.log(`Launching ${this.name} version ${this.version}`);
    }
    close() {
        console.log(`Closing ${this.name}`);
    }
}

let browser1 = new Browser("Chrome", "90.0");
browser1.launch();
browser1.close();

//Private fields and methods

class Credential {
    #apikey; //private field
    constructor(username, password, apikey) {
        this.username = username;
        this.password = password;
        this.#apikey = apikey; //initialize private field
    }
    getApiKey() { //public method to access private field
        return this.#apikey;
    }
    #encryptPassword() { //private method
        return this.password.split("").reverse().join(""); //simple encryption by reversing the password
    }
    display() {
        console.log(`Username: ${this.username}, Encrypted Password: ${this.#encryptPassword()}`);
    }
}

let credential1 = new Credential("user1", "password123", "APIKEY12345");
credential1.display();
console.log("API Key: " + credential1.getApiKey()); // Accessing private field through public method    


//Static properties and methods

class TestRunner{
    static totalTests=0; //static property
    static passcount=0; //static property
    static failcount=0; //static property
    constructor(testName, status){
        this.testName=testName;
        this.status=status;
        TestRunner.totalTests++;
        if (this.status === "Pass") {
            TestRunner.passcount++;
        } else {
            TestRunner.failcount++;
        }
    }
    static displaySummary(){ //static method
        console.log(`Total Tests: ${TestRunner.totalTests}, Passed: ${TestRunner.passcount}, Failed: ${TestRunner.failcount}`);
    }
} 

new TestRunner("Login Test", "Pass");
new TestRunner("Signup Test", "Fail");
new TestRunner("Logout Test", "Pass");
TestRunner.displaySummary();


class Student {
    static schoolName="ABC High School"; //static property
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    static displaySchoolName() { //static method
        console.log(`School Name: ${Student.schoolName}`);
    }
}

let student1 = new Student("Alice", "A");
let student2 = new Student("Bob", "B");
console.log(student1.name);
console.log(student2.grade);
console.log(Student.schoolName); // Accessing static property directly from the class
Student.displaySchoolName(); // Calling static method to display school name

//Encapsulation - bundling data and methods that operate on that data within a single unit (class) and restricting access to some of the object's components.
class Hussain {
    #child1;
    #child2;
    constructor(child1, child2) {
        this.#child1 = child1;
        this.#child2 = child2;
    }
    getChild1() {
        return this.#child1;
    }
    getChild2() {
        return this.#child2;
    }
    setChild1(child1) {
        this.#child1 = child1;
    }
    setChild2(child2) {
        this.#child2 = child2;
    }

}

let hussain = new Hussain("Child1", "Child2");
console.log(hussain.getChild1()); // Outputs: Child1
console.log(hussain.getChild2()); // Outputs: Child2
hussain.setChild1("New Child1");
hussain.setChild2("New Child2");
console.log(hussain.getChild1()); // Outputs: New Child1
console.log(hussain.getChild2()); // Outputs: New Child2


class car{
    #engineNumber; //private field
    constructor(make, model, engineNumber){
        this.make=make;
        this.model=model;
        this.#engineNumber=engineNumber; //initialize private field
    }
    getEngineNumber(){ //public method to access private field
        return this.#engineNumber;
    }
    #startEngine(){ //private method
        console.log(`Starting engine number ${this.#engineNumber}`);
    }
    setEngineNumber(engineNumber){ //public method to modify private field
        this.#engineNumber=engineNumber;
    }
}
let car2=new car("Toyota","Camry","ENG12345");
console.log(car2.getEngineNumber()); // Outputs: ENG12345
car2.setEngineNumber("ENG67890");
console.log(car2.getEngineNumber()); // Outputs: ENG67890


class ICICIBank {
    #balance; //private field
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = balance; //initialize private field
    }
    getBalance() { //public method to access private field
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Only cashier can update the balance.");
        }
    }
}

let Hussain=new ICICIBank("ACC12345", 1000);
console.log(Hussain.getBalance());
Hussain.setBalance(2000, false); // Attempt to update balance without cashier privileges
console.log(Hussain.getBalance());

let hussain_father=new ICICIBank("ACC67890", 5000);
console.log(hussain_father.getBalance());
hussain_father.setBalance(6000, true);
console.log(hussain_father.getBalance());