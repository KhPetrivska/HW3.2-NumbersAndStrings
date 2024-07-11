'use strict';

// declare variables from user's inputs
const intro = alert("This is Pickleball Players Tournament Reporter. Please enter your last match results report in next few windows.");
const numberOfWins = prompt('How many rounds did you win?');
const numberOfLooses = prompt('How many rounds did you loose?');
const numberOfDraws = prompt('How many rounds did you play a draw?');

// validate
// Possible invalid inputs : 
//1.cancel 
//2.use white spacing
//3.use not a number
//4.float
//5.negative num

if (numberOfWins === null || numberOfLooses === null || numberOfDraws === null){
alert("You canceled at least one of the inputs. Please refresh the page and try again.");
} 
else if (!numberOfWins.trim() || !numberOfLooses.trim() || !numberOfDraws.trim()) {
alert("At least One of the inputs was empty. Please refresh the page and try again.");
}
else if (isNaN(numberOfWins) || isNaN(numberOfLooses) || isNaN(numberOfDraws)){
alert ('Must be numbers only! Please refresh the page and try again');
}
else {
//Check if numberOfWins,numberOfLooses, numberOfDraws  are whole positive numbers. 
    if ((parseInt(Number(numberOfWins)) !== Number(numberOfWins)) || (parseInt(Number(numberOfLooses)) !== Number(numberOfLooses)) || (parseInt(Number(numberOfDraws)) !== Number(numberOfDraws))){
     alert ('Must be whole numbers only! Please refresh the page and try again.'); 
    }
    else if((numberOfWins < 0 ) || (numberOfLooses < 0 ) || (numberOfDraws < 0 )){
     alert ('Must be positive numbers only! Please refresh the page and try again.');    
    }
    else{
        console.log(`The user just confirmed that they got ${numberOfWins} wins, ${numberOfLooses} losses and ${numberOfDraws} draws.`);
    }
}