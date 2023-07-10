let runnerName = 'Pablo';
console.log(runnerName);
let raceNumber = Math.floor(Math.random() * 2000);
console.log(`Your race number is: ${raceNumber}.`);
/*let youthRaceNumber = Math.floor(Math.random() * (3000 - 2000) + 2000);*/
const registeredEarly = false;
let age = 15;

if (raceNumber < 1000 && age > 18){
  console.log('Late adult. Race starts at 11:00am.');
} 
if (raceNumber >= 1000 && age > 18){
  console.log('Early adult. Race starts at 09:30am.');
}
if (age < 18 /*&& youthRaceNumber >=2000*/){
  console.log('Youth. Race starts at 12:30am'/* + youthRaceNumber*/);
} 
if (age = 18) {
  console.log('Go to registration desk, recheck runner information.');
}
