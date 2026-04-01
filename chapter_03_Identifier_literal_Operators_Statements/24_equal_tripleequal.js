//==,===,=
let a = 5;
let b = "5";    
console.log(a == b);  // true, because == performs type coercion
console.log(a === b); // false, because === checks for both value and type
console.log(a = b);   // "5", because = is an assignment operator that assigns the value of b to a and returns the assigned value   

//loose equality (==) allows for type coercion, meaning it will convert the operands to the same type before making the comparison. In this case, the number 5 is converted to the string "5", resulting in a comparison of "5" == "5", which evaluates to true.

//strict equality (===) does not perform type coercion and checks for both value and type. Since a is a number and b is a string, they are not strictly equal, resulting in false.
//The assignment operator (=) assigns the value of b to a, so after the assignment, a will have the value "5". The expression a = b evaluates to the assigned value, which is "5", and that is what gets printed to the console.
