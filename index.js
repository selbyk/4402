var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var root = '/home/selby/projects/4402'

app.get('/', function(req, res){
  res.sendFile(root+'/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(4402, function(){
  console.log('listening on *:4402');
});
