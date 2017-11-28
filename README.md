
![alt text](fight_demo.gif "view a demo for Fight the Demogorgon!")
# Fight the Demogorgon!
Roll the dice to defeat the Demogorgon and save your friends!

## How to Play
* Click on the dice to roll! 
* Roll an 8 or higher to defeat the monster and save your friends!

## Credit
* Font credit | Jason Kottke's [Silkscreen](http://www.kottke.org/plus/type/silkscreen/index.html)
* Music credit | FilthFrackers's [Stranger Things Intro 8bit (ish)](https://www.youtube.com/watch?v=G2yp5Db7XYQ)

## Programming Languages used
* JavaScript
* HTML
* CSS

## MVP (Minimum Viable Product)
* Player can click on the dice and generate a random number
* If dice numbers equal 8 or higher, monster is defeated and player wins the game

## Code Snippets
```
// Roll an 8 or higher to defeat the monster
	if(rand1 + rand2 > 8){
		
		// Display new image and control its height and width
		document.getElementById('monster').children[0].src = "Images/winning.gif"; 
		document.getElementById('monster').children[0].style.height = "381px"
		document.getElementById('monster').children[0].style.width = "600px"

		// Display new message
		document.getElementById('message').innerHTML = "<strong>You</strong> have defeated the Demogoron and saved your friends!"; 
	}
```
