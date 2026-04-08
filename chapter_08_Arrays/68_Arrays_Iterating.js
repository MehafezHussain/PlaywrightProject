//Iterate -Go through each element of the array and perform some action on it.
let tests=["login","signup","logout"];
for(let i=0;i<tests.length;i++){
    console.log(tests[i]);
}

console.log("Using for...of loop");
for(let test of tests){
    console.log(test);
}

console.log("Using forEach method");
tests.forEach((test, index)=>{
    console.log(`${index}: ${test}`);
});

//entry - key-value pair in the array
console.log("Using for...in loop");
for(let [i, test] of tests.entries()){
    console.log(i, test);
}

let students=[
    {name:"Alice", age:20},
    {name:"Bob", age:22},
    {name:"Charlie", age:24}
];
for(let student of students){
    console.log(student.name, student.age);
}   

