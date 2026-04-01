let val=null ?? "Milk";
let val2=null ?? "default";
val="Which milk? " + val; // null is treated as 0 in numeric context
console.log(val); // "nullHello"