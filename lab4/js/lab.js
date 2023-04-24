
// Ping_Pong
// An implementation of the game
// index.js - The purpose of this pseudocode is to draft out the steps of playing a game of ping pong.
// Author: Kamryn Callwood
// Date: 24 April 2023

// Initialize player 1 score to 0  
// Initialize player 2 score to 0  
// Initialize ball position x axis (ball_x) to 0  
// Initialize ball position y axis (ball_y) to 0 
// Initialize derivative with respect to x of ball (ball_dx) to 1 
// Initialize derivative with respect to y of ball (ball_dy) to 1 
// Set winning score to 10 
// Print score of each player starting at 0 
// Loop while game running: 
	// If key “w” is pressed, player 1 score is subtracted by 1  point
		// Update player 1 score
		// Print player 1 score
	// Else-if “s” is pressed, player 1 score is added 1 point
		// Update Player 1 score
		// Print player 1 score
	// If “up arrow” is pressed, player 2 score is subtracted by 1 point 
		// Update player 2 score
		// Print player 2 score
	// Else-if  “down arrow” is pressed, player 2 score is added 1 point 
		// Update player 2 score
		// Print player 2 score
// Update the the ball_x variable by adding the ball_dx variable to it 
// Update the the ball_y variable by adding the ball_dy variable to it 
// If ball_y is equal to 0
	// subtract 1 from ball_dy 
// If ball_x is equal to 0
	// Player 2 score is added 1 point 
	// Reset ball position
// Else if ball_x is equal to the screen width - 1
	// Player 1 score is added 1 point 
	// Reset ball position
// If ball_x is equal to 1 and player 1 score is less than or equal to ball_y which is less than player 1 score plus the paddle height 
	// Multiply the current value of ball_dx by -1 which reverses the direction of the horizontal motion    
// Else-if ball_x is equal to screen width - 2 and player 2 score is less than or equal to ball_y which is less than player 2 score plus the paddle height 
	// Multiply the current value of ball_dx by -1 which reverses the direction of the horizontal motion    
// If player 1 score is equal to 10, 
	// Print “player 1 is the winner”
// If player 2 score is equal to 10, 
	// Print “player 2 is the winner”