/*The following code represents a JavaScript file that adds interactivity to an HTML document for a “Jump Game”.
 It defines a jump() function that makes a character element jump when called. 
 It also sets up an interval that checks for collision between a character and a block every 10 milliseconds. 
 If a collision is detected, it stops the animation on the block element, checks if the current score is greater than the current high score and updates it if necessary, 
 displays an alert with the final score and high score, and resets the game. 
Otherwise, it increments a counter variable and updates a score display. */

var character = document.getElementById("character"); // Gets the character element by its id

var block = document.getElementById("block"); // Gets the block element by its id

var counter = 0; // Initializes a counter variable to keep track of the score

var highScore = 0; // Initializes a highScore variable to keep track of the high score

function jump(){ // Defines a function called 'jump'
    if(character.classList == "animate")
	{return} // If the character element already has the class 'animate', exit the function
    character.classList.add("animate"); // Adds the class 'animate' to the character element, triggering the 'jump' animation
    setTimeout(function(){ // Sets a timer to execute a function after 300 milliseconds
        character.classList.remove("animate"); // Removes the class 'animate' from the character element, stopping the 'jump' animation
    },300);
}

var checkDead = setInterval(function() { // Sets an interval to execute a function every 10 milliseconds

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // Gets the current value of the 'top' property of the character element and converts it to an integer
	
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); // Gets the current value of the 'left' property of the block element and converts it to an integer
    
	if(blockLeft<20 && blockLeft>-20 && characterTop>=130){ // Checks if the block is within a certain range and if the character is below a certain height
        block.style.animation = "none"; // Stops the animation on the block element
        if (counter > highScore) { // Checks if the current score is greater than the current high score
            highScore = counter; // Updates the high score with the current score
        }
      alert("Game Over. Score: "+Math.floor(counter/100) + ". High Score: " + Math.floor(highScore/100)); 
		// Displays an alert with the final score and high score
		
        counter=0; // Resets the counter variable to 0
		
        block.style.animation = "block 1s infinite linear"; // Restarts the animation on the block element
		
    }else{ // If the above condition is not met
	
        counter++; // Increments the counter variable by 1
		
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
		// Updates the score display with the current value of counter divided by 100 and rounded down
    }
}, 10);

/*Keydown:*/
document.addEventListener('keydown', jump);
/*This line of code adds an event listener to the document object
The event listener listens for a 'keydown' event.
When a 'keydown' event occurs, it calls the 'jump' function.
A keydown event is fired when a key is pressed on the keyboard. 
Unlike the deprecated keypress event, the keydown event is fired for all keys, regardless of whether they produce a character value.
 The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered*/

