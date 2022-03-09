// Assignment 01 
console.log('%cAssignment 01', 'font-size:20px; font-weight:bold');
let numberOne = 10,
    numberTwo = 20;

console.log(numberOne + '' + numberTwo);   // Normal Concatenate => 1020
console.log(typeof(numberOne + '' + numberTwo));   // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`);   // Template Literals Way => 1020
console.log(typeof`${numberOne}${numberTwo}`);   // Template Literals Way => String
console.log(numberTwo + '\n' + numberOne);    // Normal Concatenate
console.log(`${numberTwo}\n${numberOne}`);    // Template Literals Way

// Assignment 02 
console.log('%cAssignment 02', 'font-size:20px; font-weight:bold');

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Assignment 03 
console.log('%cAssignment 03', 'font-size:20px; font-weight:bold');

console.log ("\`I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\ \"\"\"\n\"\"JavaScript\"\"\`\`");

// Assignment 04 
console.log('%cAssignment 04', 'font-size:20px; font-weight:bold');

let a = 21;
let b = 20;
let c = `${b}${a}`
console.log("_" + a + "_" + c + "_" + c + "_" + c + "_" + b + "_"); // _21_2021_2021_2021_20_
console.log(`_${a}_${c}_${c}_${c}_${b}_`); // _21_2021_2021_2021_20_