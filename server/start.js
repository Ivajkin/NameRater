var express = require('express'),
	fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile('console/index.html', function (err, data) {
		if (err) throw err;
		response.send(data);
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});