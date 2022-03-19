// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

let start = 10;
let end = 100;
let exclude = 40;

for (i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i)
}

// Assignment 02 
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

let start_2 = 10;
let end_2 = 0;
let stop_2 = 3;

for (i = start_2; i >= end_2; i--) {
  i >= start_2 && i >= end_2 ? console.log(`${i}`) : console.log(`0${i}`);
  if ( i === stop_2) break;
}

// Assignment 03
console.log("%cAssignment 03", "font-size:20px; font-weight:bold");

let start_3 = 1;
let end_3 = 6;
let breaker = 2;

for (i = start_3; i <= end_3; i++) {
  console.log(i)
  for (j = breaker; j < end_3; j += breaker) {
    console.log(`-- ${j}`)
  }
}

// Assignment 04 
console.log("%cAssignment 04", "font-size:20px; font-weight:bold");

let index = 10;
let jump = 2;
let end_4 = 0;

for (;;) {
  // Write Your Code Here
  console.log(index)
  index -= jump;
  if (index === jump) break;
}

// Assignment 05 
console.log("%cAssignment 05", "font-size:20px; font-weight:bold");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// for (i = --letter.length; i < friends.length; i++) {
//   if (!friends[i].startsWith(letter.toUpperCase())) {
//     console.log(`${i} => ${friends[i]}`)
//   } else {
//     continue;
//   }
// }

let finalFriends = [];
for (i = finalFriends.length; i < friends.length; i++) {
  if (!friends[i].startsWith(letter.toUpperCase())) {
    finalFriends.push(friends[i])
  } else {
    continue;
  }
}
for (i = --letter.length; i < finalFriends.length; i++) {
  console.log(`${i + letter.length} => ${finalFriends[i]}`)
}

// Assignment 06
console.log("%cAssignment 06", "font-size:20px; font-weight:bold");

let start_6 = 0;
let swappedName = "elZerO";
let str = "";
for (i = start_6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    str += swappedName[i].toLowerCase();
  } else {
    str += swappedName[i].toUpperCase();
  }
}
console.log(str);

// Assignment 07 
console.log("%cAssignment 07", "font-size:20px; font-weight:bold");

let start_7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (i = start_7; i < mix.length; i++) {
  if (typeof mix[i] === "number" && mix[i] !== mix[start_7])
  console.log(mix[i])
}