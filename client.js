var http = require('http');
function wacr(name){
  return "http://localhost:10700/"+name;
}
function wacr_names(){
}

function poll(){
  console.log("polling");
  http.get(wacr("poll"), function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function() { /* do nothing */ });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
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
