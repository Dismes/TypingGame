var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./db");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

 
app.get("/", function(request,response){
	response.sendFile(__dirname + '/index.html');
})

// listen on port 8080
var port = process.env.PORT || 8080;
db.sequelize.sync().then(function() { 
  app.listen(port, function(){
  	console.log("Listening on port", port);
  });
});

