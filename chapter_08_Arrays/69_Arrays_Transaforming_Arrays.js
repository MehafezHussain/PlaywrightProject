let scores=[85,90,78,92,88];

let grades=scores.map(score=>{
    if(score>=90){
        return "A";
    } else if(score>=80){
        return "B";
    } else {
        return "C";
    }
});
console.log(grades);

let grades1=scores.map(s=>70?"Pass":"Fail");
console.log(grades1);

let passingScores=scores.filter(score=>score>=70);
console.log(passingScores);

let totalScore=scores.reduce((total,score)=>total+score,0);
console.log(totalScore);

let nestedArr=[[1,2],[3,4],[5,6]];
let flatArr=nestedArr.flat();
console.log(flatArr);