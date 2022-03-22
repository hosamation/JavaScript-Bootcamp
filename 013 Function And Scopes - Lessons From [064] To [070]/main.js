// Assignment 01 
console.log("%cAssignment 01", "font-size:20px; font-weight:bold");

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.split(" ");
    return `${fName[0][0].toUpperCase()}${fName[0].substring(1)} ${fName[1][0].toUpperCase()}`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.substr(0, 2).toUpperCase();
    return `You Live In ${zCountry.substr(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Assignment 02 
console.log("%cAssignment 02", "font-size:20px; font-weight:bold");

// Convert to Arrow Function Syntax
// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

// Convert to Arrow Function Syntax
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Assignment 03
console.log("%cAssignment 03", "font-size:20px; font-weight:bold");
/*
  Not Solved Yet
  Need To Read First About Currying Function Technique
*/
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Assignment 04
console.log("%cAssignment 04", "font-size:20px; font-weight:bold");

function specialMix(...data) {
  // Your Code Here
  let result = 0;
  for (i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) continue;
    else result += data[i];
  }
  if(result === 0) return `All Is Strings`;
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings