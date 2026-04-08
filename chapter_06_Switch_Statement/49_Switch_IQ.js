let x=10;
switch(x){
    case 10:
        let b1=1;
        console.log(b1);
        break;
    case 20:
        let b2=2;
        console.log(b2);
        break; 
        default:
        console.log("No match"); 
}


let value="5";
switch(value){
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String 5");
        break;
    default:
        console.log("No match");
}

// where it is useful? when you have multiple conditions based on the same variable, it can make your code cleaner and more readable. It is also useful when you have a large number of conditions to check, as it can be more efficient than using multiple if-else statements.    
// In QA Automation, switch statements can be used to handle different test scenarios based on the value of a variable, such as the type of test being run or the environment being tested. This can help to simplify the code and make it easier to maintain.
// Note: In JavaScript, switch statements use strict comparison (===) for case matching, so the type of the value must match the type of the case for it to be considered a match.
