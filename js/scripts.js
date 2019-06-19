// Business Logic
var rollDice = function (){
  return Math.floor(6 * Math.random()) + 1;
};

function Player(turn) {
  this.diceRoll = 0;
  this.roundScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerNumber;
}

var player1 = new Player();

Player.prototype.addRoll = function() {
  if (this.diceRoll != 1) {
    this.roundScore += this.diceRoll;
  } else {
    this.roundScore = 0;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
  //this.roundScore = 0;
}






// User Interface
$(document).ready(function(){
  $('#player1Roll').click(function(event){
    debugger;
    event.preventDefault();
    player1.diceRoll = rollDice();
    // player1.roundScore = addRoll();
    $("span#diceRoll1").text(player1.diceRoll);
    // alert(player1.diceRoll);
    player1.addRoll();
    $('#roundTotal1').text(player1.roundScore);
  });

  $('#hold').click(function(event){
    event.preventDefault();
    player1.hold();
    $("span#totalScore1").text(player1.totalScore);

  })








});
