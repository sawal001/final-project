console.log("I am on the front end")

//I will need this later when I start building out the hall of fame
//const Post = require('../models/posts.js')



//player selects "play game" on the Welcome page--> this happens on welcome.html


//player is taken to the game page aka game-page.html


//Upon game page loading "Ready Set Go!" displays on the screen for three seconds





window.onload = function() {
  let change = document.getElementById("msg");



  setTimeout(function(){
   change.style.display = 'none';
}, 3000);


/*
if (document.getElementById('msg').style.display = 'none'){
  document.getElementById('one').style.display = ''
}
  */


var x = document.getElementById("one")
var y = document.getElementById('two')



console.log(x)

x.addEventListener('click', function() {
  if (x.style.display="")  {
    y.innerHTML = y.style.display = 'none' //&& x.style.display= 'none';
  }

})


//round 1 (3 seconds apart)

//pop up number 1 should appear after three seconds




  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 2 should appear after six seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 3 should appear after nine seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 4 should appear after twelve seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 5 should appear after fifteen seconds



//round 2 (2 seconds apart)

//pop up number 6 should appear after 17 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 7 should appear after 19 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 8 should appear after 21 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 9 should appear after 23 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 10 should appear after 25 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page


//round 3 (1 second apart)

//pop up number 11 should appear after 26 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 12 should appear after 27 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 13 should appear after 28 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 14 should appear after 29 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//pop up number 15 should appear after 30 seconds
  //if the user clicks the popup move on to next popup
  //if not show "GAME OVER" page

//If user completes this round show "YOU WON" message which has option to play again or enter your name in the hall of fame
}


//Real game logic =:0
