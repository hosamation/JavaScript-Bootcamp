// Challenges 01
console.log("%cSwitch Statement Challenge", "font-size:20px; font-weight:bold");

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
  case job = "Manager":
    salary = 8000;
    break;
  case job = "IT":
  case job = "Support":
    salary = 6000;
    break;
  case job = "Developer":
  case job = "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}
console.log(salary);

// Challenges 02
console.log("%cIf Condition Challenge", "font-size:20px; font-weight:bold");

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if ( holidays == 0) {
  money = 5000; 
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
} else if (holidays == 3) {
  money = 2000;
} else if (holidays == 4) {
  money = 1000;
} else {
  money = 0;
}

console.log(`My Money is ${money}`);
