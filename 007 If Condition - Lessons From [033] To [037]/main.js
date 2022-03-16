// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

if (num < 10) {
  console.log(`00${num}`);
} else if (num >9 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(num);
}

// Conditional (Ternary) Operator | Condition ? If True : If False
num < 10 
  ? console.log(`00${num}`) 
  : (num >9 && num < 100) 
  ? console.log(`0${num}`) 
  : console.log(num);

// Assignment 02 
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

let num1_ = 9;
let str = "9";
let str2 = "20";

if (num1_ == str) {
  console.log("{num1} Is The Same Value As {str}");
} else {
  console.log("{num1} Is Not The Same Value As {str}");
}

if (num1_ !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
} else {
  console.log("{num1} Is Not The Same Value As {str} But The Same Type");
}

if (! (num1_ == str2 && typeof num1_ == typeof str2)) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
} else {
  console.log("{num1} Is The Same Value Or The Same Type As {str2}");
}

if ((! (str == str2)) && typeof str == typeof str2 ) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
} else {
  console.log("{str} Is TheDDD Same Type As {str2} But Not The Same Value");
}

// Assignment 03 
console.log("%cAssignment 03", "font-size:20px; font-weight:bold");

let num_1 = 10;
let num_2 = 30;
let num_3 = "30";

if (num_3 > num_1 && typeof num_3 != typeof num_2) {
  console.log(`${num_3} Is Larger Than ${num_1} And Type string Not The Same Type As number`);
} else if (num_3 > num_1 && num_3 !== num_2 ) {
  console.log(`${num_3} Is Larger Than ${num_1} And Value Is The Same As ${num_3} And Type string Not The Same Type As number`);
} else if (! (num_3 === num_1) && ! (typeof num_3 == typeof num_2)) {
  console.log(`{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`);
} else {
  console.log("Different Value")
}

// Assignment 04
console.log("%cAssignment 04", "font-size:20px; font-weight:bold");

// Edit What You Want Here

let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}