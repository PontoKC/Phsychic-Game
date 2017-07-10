      $(document).ready(function() {

      // VARIABLES
      // ==========================================================================

      var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


      // We start the game with 0 wins and losses, 10 guesses left and an empty array to store user entries.
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      var guessHistory;


      // Function that makes the computer pick a random letterChoice
      // // function computerChoice() {
      //   var compChoice = letterArray[Math.floor(Math.random() * letterArray.length)];
      // // }

      function updateWins() {
        $("#wins").html("Wins: " + wins);
      }

      function updateLosses() {
        $("#losses").html("Losses: " + losses);
      }

      function updateGuessesLeft() {
        $("#guessesleft").html("Guesses Left: " + guessesLeft);
      }

      function updateGuessHistory() {
        $("#guesshistory").append(", " + guessHistory);
      }

      function clearGuessHistory() {
        $("#guesshistory").html("Your Guesses so far: ");
      }



      // function updateScore() {
      //   document.querySelector("#score").innerHTML = "Score: " + score;
      // }


      // MAIN PROCESS
      // ==============================================================================

      // computerChoice();

function game () {


    updateGuessesLeft();
    var compChoice = letterArray[Math.floor(Math.random() * letterArray.length)];
    console.log(compChoice);

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();

      // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === compChoice) {
            wins++;
            updateWins();
            clearGuessHistory();
            guessesLeft = 10;
            updateGuessesLeft();
            game();
        }

          else if (userInput !== compChoice) {
            guessHistory = userInput;
            updateGuessHistory();
            guessesLeft--;
            updateGuessesLeft();
    
              if (guessesLeft == 0) {
                guessesLeft = 10;
                updateGuessesLeft();
                clearGuessHistory();
                losses++;
                updateLosses();
              }
          }

        }
}   

game();

});