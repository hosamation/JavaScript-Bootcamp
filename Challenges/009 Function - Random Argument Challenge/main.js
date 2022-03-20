console.log("%cFunction - Random Argument Challenge", "font-size:20px; font-weight:bold");

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

function showDetails(a, b, c) {
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

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"