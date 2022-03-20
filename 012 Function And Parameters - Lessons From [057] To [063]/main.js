// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  }else if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Assignment 02
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log("Second Number Not Found")
  } else if (operation === "add") {
    console.log(firstNum + secondNum)
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum)
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum)
  } else {
    console.log(firstNum + secondNum)
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// Assignment 03 
console.log("%cAssignment 03", "font-size:20px; font-weight:bold");

function ageInTime(theAge) {
  // Your Code Here
  let months = theAge * 12,
      weeks = months * 4,
      days = theAge * 365,
      hours = days * 24,
      minutes = hours * 60,
      seconds = minutes * 60;

  if (theAge > 10 && theAge < 100) {
    console.log(`${months} Months`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} Days`);
    console.log(`${hours} Hours`);
    console.log(`${minutes} Minutes`);
    console.log(`${seconds} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment 04
console.log("%cAssignment 4 | The Challenge", "font-size:20px; font-weight:bold");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function checkStatus(a, b, c) {
  // Your Code Here
  let name, age , status;
  let info = [a, b ,c]
  for (i = 0; i < info.length; i++) {
    typeof info[i] === "string"
      ? name = info[i]
      : typeof info[i] === "number"
      ? age = info[i]
      : typeof info[i] === "boolean"
    if (info[i] === true) {
      status = "Available";
    } else {
      status = "Not Available";
    }
  }
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus("Osama",false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Assignment 05
console.log("%cAssignment 5", "font-size:20px; font-weight:bold");

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Assignment 06
console.log("%cAssignment 6", "font-size:20px; font-weight:bold");

function multiply(...numbers) {
  let result = 1;
  for(i = 0; i <= numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      result *= parseInt(numbers[i]);
    } else {
      continue;
    }
  }
  console.log(result)
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000