var express = require('express'),
    cors = require('cors');

var app = express();

// enable cors
app.use(cors());

// serve static files
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/__build__', express.static(__dirname + '/__build__'));
app.use('/', express.static(__dirname + '/src'));

// handle jwt request
app.post('/jwt', function(req, res){
    res.json({'success': true});
    res.end();
})

// handle other api request
app.use('/api', function(req, res){
    res.json({'success': true});
    res.end();
})

/* If using HTML5 style URLs in the client app, you'll need dummy URL support here for your routes */
//app.use('/public', express.static(__dirname + '/src'));
//app.use('/protected', express.static(__dirname + '/src'));

app.listen(8000);
console.log('Listening on port 8000.');