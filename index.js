//dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1; //random no b/w 0-0.999999 then int using Math.floor

var radnomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + radnomDiceImage; //images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; //property
image1.setAttribute("src" , randomImageSource); //Changes img1 everytime

//dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

//inner HTML and color change depending which player wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector("h1").style.color = "orange";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector("h1").style.color = "green";
}else{
    document.querySelector("h1").innerHTML = "Draw!!";
    document.querySelector("h1").style.color = "red";
}

//Next update
function rollDice() {
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
  
    // Add rolling class to both dice
    image1.classList.add("rolling");
    image2.classList.add("rolling");
  
    // Remove rolling class after animation is complete
    setTimeout(function() {
      image1.classList.remove("rolling");
      image2.classList.remove("rolling");
  
      // Roll Dice
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
      image1.setAttribute("src", randomImageSource1);
  
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var randomImage
  

