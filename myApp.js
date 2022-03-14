var express = require('express');
var app = express();

console.log("Hello World");

/* first challenge
app.get("/", function(req, res) {
  res.send("Hello Express");
})
*/

// second challenge
app.get("/", function(req, res) {
	let fileUrl = __dirname + "/views/index.html";
	res.sendFile(fileUrl);
})































 module.exports = app;
