var express = require("express");
var bodyParser = require("body-parser");
var app = express();

console.log("Hello World");

/* first challenge
app.get("/", function(req, res) {
  res.send("Hello Express");
})
*/

// third challenge
app.use("/public", express.static(__dirname + "/public"));

// sixth challenge
app.use("/", function(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
});

// seventh challenge
app.get("/now", function(req, res, next) {
	req.time = new Date().toString();
	next();
}, function(req, res) {
	let response = { "time": req.time };
	res.json(response);
});

// second challenge
app.get("/", function(req, res) {
	let fileUrl = __dirname + "/views/index.html";
	res.sendFile(fileUrl);
});

// fourth challenge
app.get("/json", function(req, res) {
	//let payload = {"message": "Hello json"};
	let style = process.env['MESSAGE_STYLE'];

	let response = {};

	// fifth challenge
	if (style == "uppercase") {
		response.message = "HELLO JSON";
	} else {
		response.message = "Hello json";
	}

	res.json(response)
});

// eighth challenge
app.get("/:word/echo", function(req, res) {
	res.json({ "echo": req.params.word });
});

// tenth challenge
app.use(bodyParser.urlencoded({ extended: false }));

// ninth challenge
app.get("/name", function(req, res) {
	let response = { "name": req.query.first + " " + req.query.last };
	res.json(response);
})

// last challenge
app.post("/name", function(req, res) {
	let response = { "name": req.body.first + " " + req.body.last };
	res.json(response);
})


module.exports = app;
