// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
    console.log(`${counter + true} => ${friends[index]}`)
    counter++
  }
  index++
}