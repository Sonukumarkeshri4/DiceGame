var random1= Math.floor(Math.random()*6) + 1; //1-6 tk ka number aa gya
var random2= Math.floor(Math.random()*6) + 1;

var diceImage1 = "dice"+random1 + ".png"; //koi dice ka photu select hua
var diceImage2 = "dice"+random2 + ".png";

var diceSource1 = "images/"+diceImage1;
var diceSource2 = "images/"+diceImage2;

image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",diceSource1);



image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",diceSource2);

  text = document.querySelector("h2");
if(random1 > random2){
text.innerHTML ="🎲Player 1 is Winner🎲";
}
else if(random1<random2){
text.innerHTML = "🎲Player 2 is Winner🎲";
}
else{
text.innerHTML="🎲DRAW draw DRAW🎲";
}
