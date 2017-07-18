console.log("I am on the server")

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')


mongoose.connect('mongodb://sashalou25:$a$haWa1$h@ds139322.mlab.com:39322/sasha-tunr')

//require models (I don't think I have any yet?)

//require controllers aka routers (I don't think I have any yet?)
//const appRoutes = require('./routes/index.js')

//making out application
const app = express()

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


// Serving static files (like css)
//app.use('/static', express.static('public'))

app.use(express.static('public'))

 //app.use('/game', express.static(__dirname + '/public'));

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

/*
  This route renders our home page, where a user can elect to see the hall of fame or play the game
 */
app.get('/', function (req, res) {
  res.render("welcome");
});

/*
  This route will render our get-ready screen and navigate the user to the first level after 3 seconds.
 */
app.get('/game', (req, res ) => {
  res.render('game-page')
})

app.get('game-over', (req, res) => {
  res.render('game-over')
})

/*
  This route will render all the levels of our game. The url for any level of our game will be: http://localhost:3000/levels/someLevel. This will match against this route where the parameter :level will contain the current level (one, two, three, etc). We can then use that to look up which handlebars template we should render. So if we're at level one (http://localhost:3000/levels/one), then the value of :level will be the strin 'one' and so we'll render the view at /views/levels/one.handlebars.
 */
app.get('/levels/:level', (req, res ) => {
  let currentLevel = req.params.level
  res.render(`levels/${currentLevel}`)
})





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
