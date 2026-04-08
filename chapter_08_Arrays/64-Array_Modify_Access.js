let status=["Pass","Fail","Pass","Pass","skip"];
console.log(status[0]);
console.log(status[-1]); //undefined because negative index is not supported in JavaScript
console.log(status[5]); //undefined because there is no value at index 5
console.log(status.at(-1)); //skip last element of the array
console.log(status.at(0)); //Pass

status[1]="Fail"; //modifying the value at index 0
console.log(status[1]); //Fail

//IIFE
(function(){
    let arr=[10,20,30,40,50];
    console.log(arr[0]);   
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[5]); //undefined because there is no value at index 5
})();


(()=>{    let arr=[10,20,30,40,50];
    console.log(arr[0]);   
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[5]); //undefined because there is no value at index 5
})();


// Rest parameter
function logresults(suitename,...results){
    console.log(`Results for ${suitename}:`);
    console.log(results);
}
logresults("Test Suite 1","Pass","Fail","Pass","Pass","skip");  

function add(a,b,...numbers){
    let sum=a+b;    
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(add(10,20));