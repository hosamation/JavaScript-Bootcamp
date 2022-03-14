// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.charAt(userName.indexOf("e")).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
console.log(userName.substr(-6, 1).toLocaleLowerCase().repeat(3)); // eee

// Assignment 02
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True