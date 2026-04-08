let browser=["chrome","firefox","edge","safari"];
console.log(browser);
console.log(browser.length);
browser.pop(); //removes the last element of the array
console.log(browser);
browser.push("opera"); //adds opera at the end of the array
console.log(browser);
browser.unshift("brave"); //adds brave at the beginning of the array
console.log(browser);
browser.shift(); //removes the first element of the array
console.log(browser);
browser.splice(1,1); //removes 1 element at index 1
console.log(browser);