console.log('%cPlus And Minus Puzzle Challenge', 'font-size:20px; font-weight:bold');

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a]
  - Value: [11]
  - Explain: Increment [++Pre]
  [+]
  - Explain: Addition
  [+b++]
  - Value: [20]
  - Explain: +[Type Coercion] Increment [Post++]
  [+]
  - Explain: Addition
  [+c++]
  - Value: [80]
  - Explain: +[Type Coercion] Increment [Post++]
  [-]
  - Explain: Subtraction
  [+a++]
  - Value: [11]
  - Explain: +[Type Coercion] Increment [Post++]
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a]
  - Value: [13]
  - Explain: Increment [++Pre]
  [+]
  - Explain: Addition
  [-b]
  - Value: [-21]
  - Explain: -[Type Coercion] 
  [+]
  - Explain: Addition
  [+c++]
  - Value: [81]
  - Explain: +[Type Coercion] Increment [Post++]
  [-]
  - Explain: Subtraction
  [-a++]
  - Value: [-13]
  - Explain: -[Type Coercion] Increment [Post++]
  [+]
  - Explain: Addition
  [+a]
  - Value: [14]
  - Explain: +[Type Coercion] 
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]
  - Value: [81]
  - Explain: Decrement [--Pre]
  [+]
  - Explain: Addition
  [+b]
  - Value: [21]
  - Explain: [Type Coercion] 
  [+]
  - Explain: Addition
  [--a]
  - Value: [13]
  - Explain: Decrement [--Pre]
  [*]
  - Explain: Multiplication
  [+b++]
  - Value: [21]
  - Explain: +[Type Coercion] Increment [Post++]
  [-]
  - Explain: Subtraction
  [+b]
  - Value: [22]
  - Explain: +[Type Coercion]
  [*]
  - Explain: Multiplication 
  [a]
  - Value: [13]
  - Explain: +[Type Coercion]
  [+]
  - Explain: Addition
  [--a]
  - Value: [12]
  - Explain: Decrement [--Pre]
  [-]
  - Explain: Subtraction
  [+true]
  - Value: [1]
  - Explain: +[Type Coercion]
*/
