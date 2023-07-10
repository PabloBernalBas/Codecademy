// Function to get the number of sleep hours for a given day
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8; // Returns 8 hours of sleep for Monday
      break; // Break statement to exit the switch case
    case 'tuesday':
      return 6.5; // Returns 6.5 hours of sleep for Tuesday
      break;
    case 'wednesday':
      return 8.5; // Returns 8.5 hours of sleep for Wednesday
      break;
    case 'thursday':
      return 7.5; // Returns 7.5 hours of sleep for Thursday
      break;
    case 'friday':
      return 6; // Returns 6 hours of sleep for Friday
      break;
    case 'saturday':
      return 9; // Returns 9 hours of sleep for Saturday
      break;
    case 'sunday':
      return 5; // Returns 5 hours of sleep for Sunday
      break;
  }
};

// Function to calculate the total actual sleep hours for the week
const getActualSleepHours = () =>
  getSleepHours('monday') + // Calls getSleepHours function to get sleep hours for Monday
  getSleepHours('tuesday') + // Calls getSleepHours function to get sleep hours for Tuesday
  getSleepHours('wednesday') + // Calls getSleepHours function to get sleep hours for Wednesday
  getSleepHours('thursday') + // Calls getSleepHours function to get sleep hours for Thursday
  getSleepHours('friday') + // Calls getSleepHours function to get sleep hours for Friday
  getSleepHours('saturday') + // Calls getSleepHours function to get sleep hours for Saturday
  getSleepHours('sunday'); // Calls getSleepHours function to get sleep hours for Sunday

// Function to calculate the ideal sleep hours for the week
const getIdealSleepHours = () => {
  const idealHours = 7.5; // Defines the ideal number of sleep hours per day
  return idealHours * 7; // Returns the ideal number of sleep hours for the week (7 days)
};

console.log(getActualSleepHours()); // Prints the actual sleep hours for the week
console.log(getIdealSleepHours()); // Prints the ideal sleep hours for the week

// Function to calculate and display the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(); // Stores the actual sleep hours for the week
  const idealSleepHours = getIdealSleepHours(); // Stores the ideal sleep hours for the week

  if (actualSleepHours < idealSleepHours) {
    console.log(
      'You got ' + (idealSleepHours - actualSleepHours) + 
      ' hour(s) less sleep than you needed this week. Get some rest.'); // Prints a message indicating the sleep debt and advises to get some rest
  } else if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.'); // Prints a message indicating the perfect amount of sleep
  } else {
    console.log('You have slept more than you need.'); // Prints a message indicating oversleeping
  }
};

calculateSleepDebt(); // Calculates and displays the sleep debt
