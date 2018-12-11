var randomNum = 19 + Math.floor(Math.random() * 120);
$("#numToGuess").html(randomNum);

var uniqueValues = [];
var InitResetCrstals = function () {
    var cNum;
    while (uniqueValues.length < 4) {
        cNum = 1 + Math.floor(Math.random() * 12);
        if (jQuery.inArray(cNum, uniqueValues) == '-1') {
            uniqueValues[uniqueValues.length] = cNum;
        }
    }
}

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);
InitResetCrstals();

var reset = function () {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    uniqueValues = [];
    InitResetCrstals();
    console.log(randomNum);


    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

var winCheck = function () {


    if (userTotal == randomNum) {
        $("#wins").html(wins++);


        $("#modalText").html("Hip hip hooray! You won!");
        modal.style.display = "block";

    } else if (userTotal > randomNum) {
        $("#losses").html(losses++);

        $("#modalText").html("Uh Oh! Try Again!");
        modal.style.display = "block";
    }
};

$("#purple").on("click", function () {
    userTotal = userTotal + uniqueValues[0];
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#yellow").on("click", function () {
    userTotal = userTotal + uniqueValues[1];
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#blue").on("click", function () {
    userTotal = userTotal + uniqueValues[2];
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#red").on("click", function () {
    userTotal = userTotal + uniqueValues[3];
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
    reset();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reset();
    }
}