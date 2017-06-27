$(document).ready(function() {

//variables:
var currentScore = 0;
var randNumtoMatch = 0;
var wins = 0;
var losses = 0;
var blueGemValue = 0;
var greenGemValue = 0;
var redGemValue = 0;
var yellowGemValue = 0;
var blueGemID = $("#blueGem");
var greenGemID = $("#greenGem");
var redGemID = $("#redGem");
var yellowGemID = $("#yellowGem");
var scoreID = $("#score");
//----------------END OF VARIABLES

//functions:
//Genereate random number player must match and then inserts it into HTML:
function randNumtoMatchGen(){
	randNumtoMatch = Math.floor((Math.random() * 120) + 19);
	$('#randNum').html(randNumtoMatch)
};

//Generate values for each individual gem:
function gemValueGen(){
	blueGemValue = Math.floor((Math.random() * 12) + 1);
	greenGemValue = Math.floor((Math.random() * 12) + 1);
	redGemValue = Math.floor((Math.random() * 12) + 1);
	yellowGemValue = Math.floor((Math.random() * 12) + 1);
	//log each generated value to console:
	console.log("blue: " + blueGemValue)
	console.log("green: " + greenGemValue)
	console.log("red: " + redGemValue)
	console.log("yellow: " + yellowGemValue)
};

//win checker:

function winCheck(){
	if (currentScore == randNumtoMatch){
		var winAlert = alert("You got a win!");
		if(winAlert = true){
			wins++;
			$("#wins").html(wins);
			randNumtoMatchGen();
			gemValueGen();
			scoreID.html(0);
			currentScore = 0;
		};
	};
};

//loss checker:

function lossCheck(){
	if (currentScore > randNumtoMatch){
		var lossConfirm = confirm("You lost!");
		if(lossConfirm == true){
			losses++;
			$("#losses").html(losses);
			randNumtoMatchGen();
			gemValueGen();
			scoreID.html(0);
			currentScore = 0;
		};
	};	
};

//----------------END OF FUNCTIONS

randNumtoMatchGen();//generate random number for user to match
gemValueGen();//generate values for gemstones

$("#wins").html(wins);//publish current number of wins to HTML
scoreID.html(currentScore);//publish current score to HTML


blueGemID.on("click", function(){
	currentScore += blueGemValue;
	scoreID.html(currentScore);
	winCheck();
	lossCheck();

});

greenGemID.on("click", function(){
	currentScore += greenGemValue;
	scoreID.html(currentScore);
	winCheck();
	lossCheck();
});

redGemID.on("click", function(){
	currentScore += redGemValue;
	scoreID.html(currentScore);
	winCheck();
	lossCheck();
});

yellowGemID.on("click", function(){
	currentScore += yellowGemValue;
	scoreID.html(currentScore);
	winCheck();
	lossCheck();
});

//----------------END OF SCRIPT	
});