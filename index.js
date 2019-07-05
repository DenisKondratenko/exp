var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('this is home');
});

app.get('/news/', function(req, res) {
	res.send('This is news');
});
app.get('/news/:name/:id', function(req, res) {
	res.send('This is news ID -'+ req.params.name + req.params.id);
});
app.listen(3000);

