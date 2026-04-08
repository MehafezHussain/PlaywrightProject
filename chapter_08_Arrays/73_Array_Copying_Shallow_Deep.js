let original=[1,2,3];
let copy=[...original]; //creates a shallow copy of the original array using spread operator
console.log(copy);
let copy2=original.slice(); //creates a shallow copy of the original array using slice method
console.log(copy2);
let copy3=Array.from(original); //creates a shallow copy of the original array using Array.from method
console.log(copy3);
let copy4=original.concat(); //creates a shallow copy of the original array using concat method
console.log(copy4);

copy2.push(4); //modifying the copy array
console.log(copy2);

//Deep copying
let original2=[[1,2],[3,4]];
let copy5=JSON.parse(JSON.stringify(original2));