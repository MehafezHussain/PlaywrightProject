let score1=85;
let score2=90;
let score3=78;  

let result1=score1>=70?"Pass":"Fail";
console.log(result1); //returns "Pass" because score1 is greater than or equal to 70

function getresult(score){
    return score>=70?"Pass":"Fail";
}
console.log(getresult(score2)); //returns "Pass" because score2 is greater than or equal to 70
console.log(getresult(score3)); //returns "Fail" because score3 is less than 70