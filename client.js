var http = require('http');

function poll(){
  console.log("polling");
  http.get("http://localhost:10700/poll", function(res) {
    console.log("Got response: " + res.statusCode);
    poll(res);
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

console.log("starting client...");
setInterval(function(){
  poll();
},2000);
console.log("why am i here?!");
