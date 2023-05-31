# Simple-Jump-Game_HTML-CSS-JavaScript
The"Simple Jump Game" involves a character that can jump and a block that moves towards the character.⏹

The goal of the game is to make the character jump over the block to avoid collision.💢

The code is written in HTML, CSS, and JavaScript.📝

The game keeps track of the score, which increases as the character successfully jumps over the block.
It also tracks the player’s high score and displays it on the game over screen.

When the user clicks the "space" button on the keyboard, it calls a jump() function that makes the character element jump by adding a class animate to it, which triggers a CSS animation defined in the stylesheet.⌨️
The function also sets a timer to remove the animate class after 300 milliseconds, stopping the jump animation.🖲

The game also sets up an interval that checks for collision between the character and the block every 10 milliseconds.⏱
It does this by getting the current values of the top property of the character element and the left property of the block element and checking if they meet certain conditions.🔎

If a collision is detected, it stops the animation on the block element, checks if the current score is greater than the current high score and updates it if necessary, displays an alert with the final score and high score, and resets the game by setting the counter variable to 0 and restarting the animation on the block element.❌ 

If no collision is detected, it increments a counter variable and updates a score display with its current value.✔️

The index file is related to the About Page file, and the Exit Page file.🌐

The relationship is created by hyperlinking appropriate words 🔑.

The About Page file contains basic information about the game.📋

The Exit Page file contains a goodbye message.👋
