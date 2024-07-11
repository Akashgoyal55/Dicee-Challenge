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

//inner HTML
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!!";
}