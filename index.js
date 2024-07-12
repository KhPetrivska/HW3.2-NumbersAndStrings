'use strict';

// declare variables from user's inputs
alert("This is Pickleball Players Tournament Reporter. Please enter your last match results report in next few windows.");
const numberOfWins = prompt('How many rounds did you win?');
const numberOfLooses = prompt('How many rounds did you loose?');
const numberOfDraws = prompt('How many rounds did you play a draw?');

// validate
// Possible invalid inputs : 
//1.cancel 

if (numberOfWins === null || numberOfLooses === null || numberOfDraws === null){
  alert("You canceled at least one of the inputs. Please refresh the page and try again.");
} else if (!numberOfWins.trim() || !numberOfLooses.trim() || !numberOfDraws.trim()) {
  alert("At least оne of the inputs was empty. Please refresh the page and try again.");
} else {
  console.log(`The user just confirmed that they got ${numberOfWins} wins, ${numberOfLooses} losses and ${numberOfDraws} draws.`);
};