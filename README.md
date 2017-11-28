
![alt text](Images/demo.gif "view a demo for Fight the Demogorgon!")
# Fight the Demogorgon!
Roll the dice to defeat the Demogorgon and save your friends!

## How to Play
* Click on the dice to roll! 
* Roll an 8 to defeat the monster and save your friends!

## Credit
* Font credit | timgormly's [8-bit Bump.aif](https://freesound.org/people/timgormly/sounds/170141/)
* Music credit | joshuaempyre's [Arcade Music Loop.wav](https://freesound.org/people/joshuaempyre/sounds/251461/)

## Programming Languages used
* Python
* [Pygame](http://www.pygame.org/news)

## MVP (Minimum Viable Product)
* Player can click on the dice and generate a random number
* If dice numbers equal 8, monster is defeated and player wins the game

## Code Snippets
```
# Make alien chase Harley
for bad_guy in bad_guys:
  # update the bad guy (based on where the player is)
  bad_guy.update_me(the_player)
  # draw the bad guy
  bad_guy.draw_me()

for bullet in bullets:
  # update the bullet location
  bullet.update()
  # draw the bullet on the screen
  bullet.draw_bullet()
    
# Alien collides with Harley
player_hit = groupcollide(players,bad_guys,False, True) # Bad guy sticks around after collision
if (player_hit):
  bump = pygame.mixer.Sound("Sounds/bump.aiff")
  bump.play(0) # Play sound once
  bump.set_volume(1) # Set sound volume
  player.health -= 2 # Harley loses 2 health points if hit
  print "Harley has %d health points!" % (player.health)
    
```
