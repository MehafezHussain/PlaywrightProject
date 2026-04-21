let grid=[[10,20,30],[40,50,60],[70,80,90]];
console.log(grid[0][0]); //10
console.log(grid[1][2]); //60
console.log(grid[2][1]); //80
console.log(grid[2][2]); //90

grid[0][1]=25; //updates the value at index 0 and 1 to 25
console.log(grid[0][1]); //25

grid.length=2; //truncates the array to 2 elements
console.log(grid); //[[10,25,30],[40,50,60]]

let testMatrix=[["login","password"],["admin","admin123"],["user","user123"]];
console.log(testMatrix[0][0]);

for(let i=0;i<testMatrix.length;i++){
    for(let j=0;j<testMatrix[i].length;j++){
        console.log(testMatrix[i][j]);
    }   
}


let n=3;
for(let i=0;i<n;i++){
    let row=" ";
    for(let j=0;j<=i;j++){
       row+="* "; //calculates the value to be added to the row based on the current row and column index
    }
    console.log(row); //prints the row
}


let m=5;
for(let i=m;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="* "; //calculates the value to be added to the row based on the current row and column index
    }
    console.log(row); //prints the row
}


let p=5;
for(let i=1;i<=p;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="* "; //calculates the value to be added to the row based on the current row and column index
    }
    console.log(row); //prints the row
}
for(let i=p-1;i>=1;i--){
    let row=""; 
    for(let j=1;j<=i;j++){
        row+="* "; //calculates the value to be added to the row based on the current row and column index
    }
    console.log(row); //prints the row
}


let q=3;
for(let i=1;i<=q;i++){
    let row="";
    for(let j=1;j<=q-i;j++){
        row+=" "; //calculates the value to be added to the row based on the current row and column index
    }
    for(let k=1;k<=i;k++){
        row+="* "; //calculates the value to be added to the row based on the current row and column index
    }
    console.log(row); //prints the row
}