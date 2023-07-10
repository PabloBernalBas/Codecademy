// Kelvin Weather Practice
//Kelvin project, starting forcast today 293.
const kelvin = 0; 
//Using value difference between K and C to get celsius value.
const celsius = kelvin - 273;
console.log(celsius);
//Convert celsius to newton
let newton = celsius * (33/100);
//round down
newton = Math.floor(newton);
console.log(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
//Convert celsius to fahrenheit
let fahrenheit = celsius *(9/5) + 32;
//round down
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
