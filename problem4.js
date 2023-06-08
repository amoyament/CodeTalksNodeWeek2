// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9.
// const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

// First we need to create a function that takes in an array
const filterNumbers = (arr) => {
  // Use the .filter method to filter divisble numbers
  return arr.filter((number) => {
    // Return numbers divisible by 3 and 6 but not divisible by 9
    return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
  });
};

// Call the filterNumbers function with the numbers array
const result = filterNumbers(numbers);

// Console.log to ensure it worked
console.log(result); // Output: [48, 12, 96]
