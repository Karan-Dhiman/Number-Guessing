// Define the range of numbers for the game
const minNum = 1;
const maxNum = 10;

// Generate a random number between minNum and maxNum (inclusive)
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Initialize variables
var attempts = 0; // Track the number of attempts the user makes
let guess; // Variable to store user's guesses
let running = true; // Flag to control the game loop

// Main game loop
while(running) {
     // Prompt the user to enter a number within the specified range
     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
     guess = Number(guess); // Convert user input to a number

     // Validate user input
     if(isNaN(guess)){
          window.alert("Please enter a valid number!"); // Alert if input is not a number
     } 
     else if(guess < minNum || guess > maxNum){
          window.alert("Please enter a number within the valid range!"); // Alert if input is out of valid range
     } 
     else {
          attempts++; // Increment the attempt count
          
          // Provide feedback based on the user's guess
          if(guess < answer) {
               window.alert("Too low!"); // Alert if the guess is too low
          }
          else if(guess > answer) {
               window.alert("Too high!"); // Alert if the guess is too high
          }
          else {
               // Alert the user that they guessed correctly and display the number of attempts
               window.alert(`Correct! The answer ${answer} was right. You took ${attempts} attempts.`);
               running = false; // End the game loop
          }
     }
}
