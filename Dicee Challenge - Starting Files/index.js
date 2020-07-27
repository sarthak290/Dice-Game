//  for thefirst dice 

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
// if (randomNumber1 == 1)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 == 2)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber1 == 3)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber1 == 4)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 == 5)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");
// }
// else if (randomNumber1 == 6)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
// }

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

// for the second dice

var randomNumber2=Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="👑Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!👑";
}

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!";
}