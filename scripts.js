// Ideas:
// pixel font

// Background Music:
// Credit: 
// @FiltyFrackers on Youtube
// https://www.youtube.com/watch?v=G2yp5Db7XYQ

// Play and loop background music
var myAudio = new Audio('Sounds/music_short.wav'); 
	myAudio.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	myAudio.play();

var health = 10;

function rollDice() {

	// console.log("User pressed the roll button!");
	// get a random number between 1 an 6 for both dice:
	var rand1 = Math.ceil(Math.random() * 6);
	var rand2 = Math.ceil(Math.random() * 6);

	// The dice images are dN.gif. We have 2 random numbers for that N.
	// Use javascript to update the DOM, so that the image files that show
	// will be the same number as the random numbers above.

	var dice = document.getElementById('dice')
	console.log(dice);
	var image1 = dice.children[0];
	var image2 = dice.children[1];
	image1.src = `Images/d${rand1}.gif`;
	image2.src = `Images/d${rand2}.gif`;

	// Roll an 8 or higher to defeat the monster
	if(rand1 + rand2 > 8){
		
		// Display new image and control its height and width
		document.getElementById('monster').children[0].src = "Images/winning.gif"; 
		document.getElementById('monster').children[0].style.height = "381px"
		document.getElementById('monster').children[0].style.width = "600px"

		// Display new message
		document.getElementById('message').innerHTML = "<strong>You</strong> have defeated the Demogoron and saved your friends!"; 
	}

	// // Roll less than a five and lose two health points
	// if(rand1 + rand2 < 4) {
	// 	health -= 2

	// 	// Display new message
	// 	document.getElementById('message').innerHTML = "You've lost 2 health points!"; 
	// }

	// // If health = 0
	// if(health == 0) {

	// 	// Display new image and control its height and width
	// 	document.getElementById('monster').children[0].src = "Images/monster.jpg"; 
	// 	document.getElementById('monster').children[0].style.height = "200px"
	// 	document.getElementById('monster').children[0].style.width = "300px"

	// 	// Display new message
	// 	document.getElementById('message').innerHTML = "<strong>You</strong> have run out of health points! Become Demogorgon food or try again?"; 

	// }

}