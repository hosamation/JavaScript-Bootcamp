console.log("%cArray Methods Challenge", "font-size:20px; font-weight:bold");

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Task 1
console.log("%cTask 1", "font-size:14px; font-weight:bold");
// Write Code Here
my = my.splice(zero, ++counter).reverse()
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// Task 2
console.log("%cTask 2", "font-size:14px; font-weight:bold");
console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

// Task 3
console.log("%cTask 3", "font-size:14px; font-weight:bold");
// It Is Not Dynamic Code.
my.shift();
my.pop();
console.log(`${my[--zero].slice(zero, --counter)}${my[--counter].slice(++counter)}`); // "Elzero"

// Task 4
console.log("%cTask 4", "font-size:14px; font-weight:bold");
// It Is Not Dynamic Code.
console.log(my[++zero][++counter + zero] + my[zero][++counter + zero].toUpperCase()); // "rO"
