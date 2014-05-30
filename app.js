var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.ejs', {
    bodyId: 'index',
   });
});

app.get('/jukebox', function(req, res){
  res.render('jukebox.ejs', {
    bodyId: 'jukebox',
    navActive: 'jukebox'
  });
})

app.get('/play', function(req, res){
  res.render('play.ejs', {
    bodyId: 'play',
    navActive: 'play'
  });
})

var port = 1338;
var server = app.listen(port, function() {
    console.log('Listening on port ', server.address().port);
});
