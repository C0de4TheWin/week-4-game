
//I need to set up the randomly generated number between 19 - 120

//at the start of the game

var starting = Math.floor((Math.random() * 120) + 19);
var userTotal = 0;
var wins = 0;
var losses = 0;

console.log(starting);



$('#randomNumber').text(starting);


//I need to add a random value of 1-12 to each of the 4 crystals
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);


/////////////variables for scores

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//reset
function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
}

////adds wins to total
function yay() {
    alert("You won!");
    wins++;
    $('#numberWins').text(wins);
    reset();
}


////adds losses to total
function loser() {
    alert("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}


////the click for jewels
$('#one').on('click', function () {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);



    ////sets win or loss scenario
    if (userTotal == Random) {
        yay();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#two').on('click', function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random) {
        yay();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#three').on('click', function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
        yay();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#four').on('click', function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == Random) {
        yay();
    }
    else if (userTotal > Random) {
        loser();
    }
});


//when user clicks on crystal it will add specific number of points
//to score



//game will hide this amount of points until crystal is clicked


//player wins if their total score matchs random number

//player loses if score goes above random number


//game restarts upon win/loss

//when a new game begins the player should get a new random number


//all 4 crystals will have new values each game


//score and score counter will reset to 0


//app should show number of games the player wins and loses