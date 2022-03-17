// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.length = num;
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends, num)); // ["Ahmed", "Elham", "Osama"];

// Assignment 02 
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// Assignment 03 
console.log("%cAssignment 03", "font-size:20px; font-weight:bold");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment 04
console.log("%cAssignment 04", "font-size:20px; font-weight:bold");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// Assignment 05
console.log("%cAssignment 05", "font-size:20px; font-weight:bold");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.indexOf(needle) ? console.log("Found") : console.log("Not Found");
haystack.lastIndexOf(needle) ? console.log("Found") : console.log("Not Found");
haystack.includes(needle) ? console.log("Found") : console.log("Not Found");


// Assignment 06
console.log("%cAssignment 06", "font-size:20px; font-weight:bold");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().slice(allArrs.length - arr1.length).join('').toLocaleLowerCase()
console.log(allArrs); // fxy