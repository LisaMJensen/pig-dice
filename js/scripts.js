// Business Logic
var rollDice = function (){
  return Math.floor(6 * Math.random()) + 1;
};

var player2;
var player1;
// var currentPlayer;

function Player(diceRoll, roundScore, totalScore, activePlayer) {
  this.diceRoll = 0;
  this.roundScore = 0;
  this.totalScore = 0;
  this.activePlayer = activePlayer;

}

// player1.activePlayer =true;
// player2.activePlayer = false;

Player.prototype.playerSwitch = function() {
  if (player1.activePlayer === true) {
    player2.activePlayer = true;
    player1.activePlayer = false;
  } else {
  player1.activePlayer = true;
  player2.activePlayer = false;
  }
}



Player.prototype.addRoll = function() {
  if (this.diceRoll != 1) {
    this.roundScore += this.diceRoll;
  } else {
    this.roundScore = 0;
    player1.playerSwitch();

  }
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  console.log("Current player ", this.activePlayer);

}

Player.prototype.win = function()  {
  if (this.totalScore >= 100) {
    alert("You win!");
  }
}

// function playerSwitch(){
//   if (currentPlayer === player1){
//     currentPlayer = player2
//   } else {
//     currentPlayer = player1;
//   }
// }



// User Interface
$(document).ready(function(){
  player2 = new Player();
  player1 = new Player();
  currentPlayer = player1;

  $('#player1Roll').click(function(event){
    event.preventDefault();

// debugger;

if (player1.activePlayer === true) {
    player1.diceRoll = rollDice();
    //player1.roundScore = addRoll();
    $("span#diceRoll1").text(player1.diceRoll);
    //alert(player1.diceRoll);
    player1.addRoll();
    $('#roundTotal1').text(player1.roundScore);

  } else{
    player2.diceRoll = rollDice();
    // player2.roundScore = addRoll();
    $("span#diceRoll1").text(player2.diceRoll);
    alert(player2.diceRoll);
    player2.addRoll();
    $('#roundTotal1').text(player2.roundScore);
  }
  });

  $('#hold').click(function(event){
    event.preventDefault();
    player1.hold();
    $("span#totalScore1").text(player1.totalScore);
    player1.win();
    player2.hold();
    $("span#totalScore2").text(player2.totalScore);
    player2.win();
    player1.playerSwitch();
  });



  // console.log(player2.activePlayer);
  // console.log(player1.activePlayer);



});
