let student1={
    name:"Alice",
    age:20,
    grade:"A"
};
console.log(student1.name); //Output: Alice
console.log(student1.age); //Output: 20
console.log(student1.grade); //Output: A
let student2={
    name:"Bob",
    age:22,
    grade:"B"
};
console.log(student2.name); //Output: Bob
console.log(student2.age); //Output: 22
console.log(student2.grade); //Output: B

let a={status:"pass"};
console.log(a.status); //Output: pass
a.status="fail";
console.log(a.status); //Output: fail

//keys are case-sensitive
let a22={Status:"pass"};
console.log(a22.Status); //Output: pass
console.log(a22.status); //Output: undefined

let b=a;
console.log(b.status); //Output: fail
b.status="pass";
console.log(a.status); //Output: pass because a and b reference the same object in memory   


//Two separate objects with the same content
let c={status:"pass"};
console.log(c.status); //Output: pass
c.status="fail";
console.log(c.status); //Output: fail
console.log(a.status); //Output: pass because a and c are different objects in memory   

const t={"name":"Hussain","age":30};
console.log(t.name); //Output: Hussain
console.log(t.age); //Output: 30

const user={
    name:"Alice",
    age:30
};
user.name="Bob";
console.log(user.name); //Output: Bob
console.log(user.age); //Output: 30

const key="email";
const value="bob@example.com";
//Adding new properties to an object
user[key]=value;
console.log(user.email); //Output: bob@example.com

user.city="New York";
console.log(user.city); //Output: New York
user.age=31;
console.log(user.age); //Output: 31


let config={};
config["host"]="localhost";
config["port"]=8080;
console.log(config.host);

//premitive data types are immutable, objects are mutable
let a =10;
let b=a;
console.log(a);
b=99;
console.log(a); //Output: 10 because a and b are separate variables that hold primitive values


//Objects are mutable, so when we assign an object to another variable, they both reference the same object in memory.
let obj1={val:10};
let obj2=obj1;
obj2.val=99;
console.log(obj1.val); //Output: 99 because obj1 and obj2 reference the same object in memory

const calculator={
    value:0,
    add(num){
        this.value+=num;
        return this;    
    },
    subtract(num){
        this.value-=num;
        return this;    
    },
    multiply(num){
        this.value*=num;
        return this;    
    },
    divide(num){
        if(num!==0){
            this.value/=num;
        }else{
            console.log("Cannot divide by zero");
        }   
        return this;
    },
    reset(){
        this.value=0;
        return this;
    }
};


let config1={browser:"Chrome", timeout:3000};
config1.browser="Firefox";
config1.timeout=5000;
config1.retries=3;
console.log(config1); //Output: { browser: 'Firefox', timeout: 5000, retries: 3 }   
config1={browser:"Safari", timeout:2000}; //Error: Assignment to constant variable because config1 is declared as const 
console.log(config1);


const config2={browser:"Edge", timeout:4000};
config2.browser="Opera";
config2.timeout=6000;
console.log(config2); //Output: { browser: 'Opera', timeout: 6000 }
config2={browser:"Brave", timeout:1000}; //Error: Assignment to constant variable because config2 is declared as const
console.log(config2);

// 1D array of objects
let result=["pass", "fail", "skip"];

let matrix=[[1,2,3],[4,5,6],[7,8,9]];

let matrix2_D=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];

let grid=[[1,2,3],[4,5,6],[7,8,9]];

for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
        console.log(grid[i][j]);
    }
}


