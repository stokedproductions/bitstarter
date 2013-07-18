var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fileContents = fs.readFile('index.html', 'utf-8', function(err, data){
     response.send(data);
 });
 //response.send(fileContents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
