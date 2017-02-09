var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
var bcrypt = require('bcrypt');
var methodOverride = require('method-override');
const fetch = require('node-fetch');


//Bcrypt stuff
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'theTruthIsOutThere51',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.listen(8080, function(){
  console.log('server is alive on 8080')
});


//home page
app.get("/", function(req, res){
  res.render("index");
});
