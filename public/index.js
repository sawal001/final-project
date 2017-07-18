console.log("I am on the front end")

/*

  We can use the `window.location` object to know where we are. This object contains valuable information about the current username, including the pathname at `window.location.pathname`, and is a way for us to change the current url using `window.location.replace()`.

  Here, I've provided a sample for you. You can get the current location using `window.location.pathname`. Then, we can test against that pathname. For instance, if the current path is `/game`, then we'll set a time to call a function in 3 seconds. That function well send the user to the first level of our game using `window.location.replace()`. Check the server in `index.js` to see how the levels route works!

 */

window.onload = function() {

  // This gets the current page
  let currentPath = window.location.pathname

  /*
    If the path for the current page is '/game' (i.e. we're on the game landing page), then we'll set a timer for 3 seconds and send the user to the first level ('/levels/one') when that timer ends.
   */
  if ( currentPath === '/game' ) {
    setTimeout(function(){
      window.location.replace('/levels/one')
    }, 3000)
  }

  /*
    Next Steps:

    If the current path is one of our levels, then we'll want to do 2 things:

    1. Create a timer for some amount of time (up to you) that will send the user to the game-over page. If this function is called, then the user did not click the pop up in time and so, has lost! The game over page is at http://localhost:300/game-over

    2. Add an event listener to the div. If the player clicks the div, then we should navigate them to the next level. This will automatically kill our timer.

   */


}
