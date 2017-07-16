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

app.get('/', function (req, res) {
  res.send("game-page.html");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
