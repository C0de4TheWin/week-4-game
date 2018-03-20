
//I need to set up the randomly generated number between 19 - 120

//at the start of the game

var starting = Math.floor((Math.random() * 120) + 19);
var userTotal = 0;
var wins = 0;
var losses = 0;
var random = Math.random();


//I need to add a random value of 1-12 to each of the 4 crystals
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

$('#randomNumber').text(starting);
$('#wins').text(wins);
$('#losses').text(losses);
$("#userTotal").text(userTotal);

console.log(starting);
console.log(wins);
console.log(losses);
console.log(userTotal);

//reset
function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $('#randomNumber').text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
}

////adds wins to total
function winner() {
    alert("You won!");
    wins++;
    $('#wins').text(wins);
    reset();
}


////adds losses to total
function loser() {
    alert("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
}


////the click for crystals
$('#one').click(function() {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);



    ////sets win or loss scenario
    if (userTotal == random) {
        winner();
    }


    else if (userTotal > random) {
        loser();
    }
})
$('#two').on('click', function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == random) {
        winner();
    }
    else if (userTotal > random) {
        loser();
    }
})
$('#three').on('click', function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    //sets win/loss rules
    if (userTotal == random) {
        winner();
    }
    else if (userTotal > random) {
        loser();
    }
})
$('#four').on('click', function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == random) {
        winner();
    }
    else if (userTotal > random) {
        loser();
    }
});


