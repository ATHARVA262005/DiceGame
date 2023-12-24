alert("Note:- that whenerver you reload the page or click on play btn you have to give input again as we do not collect any data from page.")

//get player names
var choose = prompt("Do you Want To use Your Name: (Y/N)");
if (choose === "y" || choose === "Y"  ) {
  var player1 = prompt("Enter First Player Name: ");
  var player2 = prompt("Enter Second Player Name: ");

  var firstPlayer = document.getElementById("playerName1");
  var secondPlayer = document.getElementById("playerName2");

  firstPlayer.innerHTML = player1;
  secondPlayer.innerHTML = player2;
  
} else {

  
    
}

//for player 1 dice

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceNumber1 = "dice" + randomNumber1 + ".png";
var imagePath = "./images/" + diceNumber1;

var imageSrc = document.getElementsByClassName("img1")[0];
imageSrc.setAttribute("src", imagePath);

//for player 2 dice

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var diceNumber2 = "dice" + randomNumber2 + ".png";
var imagePath = "./images/" + diceNumber2;

var imageSrc = document.getElementsByClassName("img2")[0];
imageSrc.setAttribute("src", imagePath);

//find out winner


var winner1 = player1 + " wins";
var winner2 = player2 + " wins";

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = winner1;
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = winner2;
} else {
  heading.innerHTML = "Draw";
}

if (choose === "y" || choose === "Y" ) {
  var winner1 = player1 + " wins";
  var winner2 = player2 + " wins";
  
  var heading = document.querySelector("h1");
  
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = winner1;
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = winner2;
  } else {
    heading.innerHTML = "Draw";
  }
  
} else {
  var winner1 = player1 + " wins";
  var winner2 = player2 + " wins";
  
  var heading = document.querySelector("h1");
  
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "player 2 wins";
  } else {
    heading.innerHTML = "Draw";
  }
  
    
}