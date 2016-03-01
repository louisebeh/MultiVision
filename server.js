var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
  return stylus(str).set('filename', path);
};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
      src: __dirname + '/public',
      compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

if(env === 'development'){
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect('mongodb://lbeh:multivision@ds019028.mlab.com:19028/multivision1985');
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error...'));
db.once('open', function callback(){
    console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
  mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
  res.render('index', {
      mongoMessage: mongoMessage
  });
});

app.set('port', process.env.PORT || 3030);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});