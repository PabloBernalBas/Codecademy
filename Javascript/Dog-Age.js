const myAge = 43;
let earlyYears = 2;
earlyYears *= 10.5;
//dividing years, 1st 2 years growth difference that above 2 years dog age.
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//add both variables to know exact amount of years.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//create my name in a variable a use method to lower cases it
const myName = 'PABLO ESCOBAR';
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
