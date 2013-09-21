// GO SPEED WACR GOOOOOO

var wacr = require('./wacr')

var express = require('express');
var app = express();

app.configure(function(){
  app.use(function (req,res,next) {
  	console.log('request');
  	next();
  })
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler());
  app.use(app.router);
  app.use(function(req, res){
    res.redirect('/poll')
  }); 
});

app.get('/poll', function(req, res){
	//CLIENT WILL SEND DATA TO SERVER
	//USED AS A KEEPALIVE
	//CHECK TIME
	//CHECK VERSION OF SCRIPTS
	//SERVER RESPONDS BACK WITH DIRECTIONS FOR THE CLIENT
  console.log('received poll request');
  res.send('hello world');
});

app.get('/scripts', function(req,res) {
	//SERVER WILL SEND LATEST VERSION OF SCRIPTS
	//CLIENT WILL SAVE SCRIPTS AND UPDATE LOCAL VERSION
});

app.get('/task', function(req,res) {
	//CLIENT GETS A TASK TO PERFORM
});

app.get('/update', function(req,res) {
	//GET DETAILS ON UPDATE
})

app.get('/version', function (req,res) {
	//RETURN A JSON INTEGER OF THE LATEST VERSION NUMBER
	var version = 1;
	res.json(version);
})

app.post('/report', function(req,res) {
	//CLIENT REPORTS AN EVENT TO THE SERVER
});
app.post('/time', function(req,res) {
	//CLIENT REPORTS AN EVENT TO THE SERVER
});
app.post('/names', function(req,res) {
  res.write('names');
  res.write('poll');
  res.write('task');
  res.write('update');
  res.write('version');
  res.write('report');
  res.write('scripts');
  res.write('time');
  res.end();
});

app.post('/authenticate', function(req,res) {
	////////////
	// TO BE REPLACED BY CANSEC
	// https://github.com/deitch/cansecurity
	////////////

	//CLIENT AUTHENTICATES WITH SERVER
});

app.listen(10700);
