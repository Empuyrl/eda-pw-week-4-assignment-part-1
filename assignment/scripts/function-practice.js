console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function personalizedHello(name){
  return `Hello, ${name}!`
}

//need to read each question multiple times
//remember backticks when using ${} template 

// calling a given function, but with your own answer
// Remember to call the function to test
console.log(personalizedHello('Jason'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log( 'running addNumbers with 10 & 12:', addNumbers(10, 12));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
console.log('in multiplyThree', num1, num2, num3);
let result = num1 * num2 * num3;
return result;
}
console.log('running multiplyThree with 4 & 57 & 11:', multiplyThree(4, 57, 11));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if (number <= 0)
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
 if (array.length > 0){
   console.log("Last item in the array is", array[array.length - 1]);
  return array[array.length - 1];
 } else {
  return undefined;
 }
}
console.log("Last item in the array is", getLast([1, 2, 3, 4]));
console.log("Array is empty", getLast([])); 

//good reminders on how to call functions

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){

for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    return true;
  }
}
return false;
}
console.log('was found in the array', find(3, [1, 3, 5, 7]));
console.log("was not found in the array", find(0, [1, 3, 5, 7]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (isFirstLetter === 'a'){
    return true;
  } else if (isFirstLetter == 'a'){
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

//come back to figure this out

// 9. Function to return the sum of all numbers in an array

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
