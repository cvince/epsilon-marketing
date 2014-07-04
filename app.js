var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.redirect(301, '/jukebox')
});

app.get('/jukebox', function(req, res){

  var ua = req.headers['user-agent'],
      $ = {};

  var display = 'Mac OSX 10.7+'

  if (/mobile/i.test(ua))
      $.Mobile = true;

  if (/like Mac OS X/.test(ua)) {}
      display = 'Mac OSX 10.7+'

  if (/(Intel|PPC) Mac OS X/.test(ua))
      display = 'Mac OSX 10.7+'

  if (/Windows NT/.test(ua))
      display = 'Windows XP+'

  res.render('jukebox.ejs', {
    bodyId: 'jukebox',
    navActive: 'jukebox',
    platform: display
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
