// Challenges 01
console.log("%cTernary If Syntax Challenge", "font-size:20px; font-weight:bold");
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Challenges 02
console.log("%cCondition Met Challenge", "font-size:20px; font-weight:bold");

let st = "Elzero Web School";

if ((st.length * 2).toFixed() === "34") {
  console.log("Good");
}
// W Position May Change
if (st.charAt(st.indexOf('W')).toLocaleLowerCase() === "w") {
  console.log("Good");
}

if (typeof (st.length) !== "string") {
  console.log("Good");
}

if (typeof (st.length) === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}