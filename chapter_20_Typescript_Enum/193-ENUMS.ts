enum TestStatus {
    PASSED = "Passed",
    FAILED = "Failed",
    SKIPPED = "Skipped",
    BLOCKED = "Blocked",
    Pending = "Pending"
}

console.log("Test Status: " + TestStatus.PASSED); //prints "Test Status: Passed"
console.log("Test Status: " + TestStatus.FAILED); //prints "Test Status: Failed"
console.log("Test Status: " + TestStatus.SKIPPED); //prints "Test Status: Skipped"
console.log("Test Status: " + TestStatus.BLOCKED); //prints "Test Status: Blocked"
console.log("Test Status: " + TestStatus.Pending); //prints "Test Status: Pending"
