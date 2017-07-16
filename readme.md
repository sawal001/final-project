## Overview
I want to build a game where you try to x out of 90s era pop ups

# UI Draft

My application will have the following views or pages:
- Welcome page with the rules:
    blank gray background, button indicating that the player is ready to play the game, button that allows users to see hall of fame members
- Game page:
    this page starts out blank, but shows pop ups as part of the page, a small timer will appear in the bottom right hand corner letting users know how long they have been playing, this page will show a "You won!" or "Game over" message depending on the outcome of the game
- Hall of Fame signup page:
    after winning the game players have the option to enter their name in the Hall of Fame page (this option is given in the "you won!" message on the game page)
- Hall of Fame page:
    this page posts all of the users who have signed up to be included in the hall of fame. This page is read only, users will be able to see names of players in the hall of fame but will be unable to edit


# Technical Requirements
My application will rely on the following packages:
  - express
  - mongo
  - mongoose


My application will have the following features:

### CRUD Database use/Make HTTP requests to your own server
Players who win the game will be given the option to enter their names into the hall of fame. This will be set up with a database. The hall of fame inductee names will also be posted in a read-only format on a separate page

###Listen for events and add interactivity based on user input
Players will click on the "x" button on each pop up to advance in the game.


#Game Overview

* welcome page explaining the rules

* game screen: 3, 2, 1 GO in middle of the screen
* pop ups begin showing up once every three seconds
* there are 5 unique types of popups and they appear three seconds apart in random parts of the screen.
* Player must click the "x" before the next popup shows up (aka in under three seconds)
   * After playing successfully for 30 seconds (x-ing out of 10 popups) the popups will begin to show up once every 2 seconds.
   * After playing successfully for 20 seconds (x-ing out of 10 popups) the popups will begin to show up every 1 second.
   * After playing successfully for 10 seconds (x-ing out of 10 popups) the popups will begin to show up once every .5 seconds.

* If the player successfully completes this final round a final popup will appear in the middle of the page saying that the player has won the game. An option will appear for the player to play again.
* If a player wins they have the option of adding their name to the "Hall of Fame" (Want to add your name to the Hall of Fame? on winner pop up). The Hall of Fame sign up page will have a form field for user to enter their name and save. Once saved the user will be taken to the "hall of fame" page with a list of players who have completed the game and entered their name on the hall of fame page.
* If at any point during the game the player does not successfully exit the popup in the affixed amount of time for each round a popup will appear in the middle of the screen indicating that the player has lost (Game Over) An option will appear for the player to play again.
* If the player does not click the "x" in under three seconds Game Over message will appear on the screen with an option for the player to start over
