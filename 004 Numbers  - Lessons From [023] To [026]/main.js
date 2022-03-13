// Assignment 01 
console.log('%cAssignment 01', 'font-size:20px; font-weight:bold');

// Examples
console.log("Examples");

console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// My Solutions
console.log("My Solutions");

console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(5e4 * 2); // 100000
console.log(50000 * 2); // 100000
console.log(100_000.0); // 100000
console.log(+"100000"); // 100000
console.log(Number('100000')); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.trunc(100000.5)); // 100000

// Assignment 02
console.log('%cAssignment 02', 'font-size:20px; font-weight:bold');
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Assignment 03
console.log('%cAssignment 03', 'font-size:20px; font-weight:bold');
console.log(Number.MAX_SAFE_INTEGER.toFixed().length); // 16

// Assignment 04
console.log('%cAssignment 04', 'font-size:20px; font-weight:bold');
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Assignment 05
console.log('%cAssignment 05', 'font-size:20px; font-weight:bold');
let num = 10;

console.log(Number.isInteger(num) + true); // 2

// Assignment 06
console.log('%cAssignment 06', 'font-size:20px; font-weight:bold');
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.ceil(--flt)); // 10

// Assignment 07
console.log('%cAssignment 07', 'font-size:20px; font-weight:bold');
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4