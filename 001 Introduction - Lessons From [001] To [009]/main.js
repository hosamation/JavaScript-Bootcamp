// Assignment 01 
console.log('%cAssignment 01', 'font-size:20px; font-weight:bold');
console.log(`# Code One
  This Code Not Work 
  Cannot read property 'style' of null
  Code work before the page loading`);
/*
  # Code One
  This Code Not Work 
  Cannot read property 'style' of null
  Code work before the page loading
*/
// Assignment 02
console.log('%cAssignment 02', 'font-size:20px; font-weight:bold');
console.log('In the Page')
document.write("<h1>Elzero</h1>")
document.querySelector('h1').style.color= 'blue'
document.querySelector('h1').style.fontSize= '80px'
document.querySelector('h1').style.fontWeight= 'bold'
document.querySelector('h1').style.textAlign= 'center'
document.querySelector('h1').style.fontFamily= 'Arial'

// Assignment 03
console.log('%cAssignment 03', 'font-size:20px; font-weight:bold');
console.log('%cElzero %cWeb %cSchool', 'color:red; font-size: 40px', 'color: green; font-size: 40px; font-weight: bold', 'color:whait; font-size: 40px; background-color: blue');

// Assignment 04
console.log('%cAssignment 04', 'font-size:20px; font-weight:bold');
// Group One
console.group('Group 1');
console.log('Message One');
console.log('Message Two');
// Child Group
console.group('Child Group');
console.log('Message One');
console.log('Message Two');
// Grand Child Group
console.group('Grand Child Group');
console.log('Message One');
console.log('Message Two');
// End Grounp One , Child , Grand Child
console.groupEnd();
console.groupEnd();
console.groupEnd();
// Group Two
console.group('Group 2');
console.log('Message One');
console.log('Message Two');
console.groupEnd();

// Assignment 05
console.log('%cAssignment 05', 'font-size:20px; font-weight:bold');
console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);

// Assignment 06
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
// console.log("Iam In Console");
// document.write("Iam In Page");