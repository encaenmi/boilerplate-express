var express = require('express');
var app = express();

console.log("Hello World");

/* first challenge
app.get("/", function(req, res) {
  res.send("Hello Express");
})
*/

// third challenge
app.use("/public", express.static(__dirname + "/public"));

// second challenge
app.get("/", function(req, res) {
	let fileUrl = __dirname + "/views/index.html";
	res.sendFile(fileUrl);
})

// fourth challenge
app.get("/json", function(req, res) {
	let payload = {
		"message": "Hello json"
	}
	res.json(payload)
})



















 module.exports = app;
