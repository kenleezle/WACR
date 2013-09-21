var http = require('http');
function wacr(name){
  return "http://localhost:10700/"+name;
}
function wacr_names(){
}

function wacr_get(which,cb) {
  var data = '';
  http.get(wacr(which), function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function(d) { 
    	console.log('on data')
      data += d;
    });

    res.on('end', function() {
    	console.log('on end');
    	cb(data)
    })
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

function poll(){
  console.log("polling");
  wacr_get('poll', function (data) {
  	console.log(data);
  })
}
function testAllCalls(){
  http.get(wacr("names"), function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function(data) { 
      console.log(data);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

console.log("starting client...");
testAllCalls();
setInterval(function(){
  poll();
},2000);
console.log("why am i here?!");
