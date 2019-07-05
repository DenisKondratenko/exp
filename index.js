var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/news/', function(req, res) {
	res.send('This is news');
});



app.get('/news/:id', function(req, res) {
	res.render('news', {newsId: req.params.id});
});
app.listen(3000);

