function playCraps(){
    //playCraps() is a function used to simulate a craps game.
    //use for the week 3 assignment
    console.log("playCraps() started");
//roll the dice
var die1= 1 + Math.floor (6* Math.random());
console.log(die1);
document.getElementById("die1Res").innerHTML = die1
var die2= Math.ceil (6* Math.random());
console.log(die2);
document.getElementById("die2Res").innerHTML = die2



//find the sum of the two dice
var sum = die1 + die2;
console.log(sum);
document.getElementById("sumRes").innerHTML = sum;

//if sum equals 7 or 11 the player loses
if(sum == 7 || sum == 11){
    document.getElementById("finRes").innerHTML = "You Lose Fool! Roll dem dice again if you aint scared.😈 " ; 
}
//if sum is doubles and even, then player wins
else if (die1 == die2 && die1%2 == 0) {
    document.getElementById("finRes").innerHTML = "Congrats Gang! Guess You not Worthless.💯 "
}
//otherwise, they draw
else{
    document.getElementById("finRes").innerHTML = "You so bad you couldn't even win OR lose. Roll em again fool!🙅"
}
}

