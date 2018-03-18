var app = require("http").createServer()
var io = require('socket.io')(app);
var PORT = 3003
var clientCount = 0;

app.listen(PORT)

io.on('Connection',function(socket){
	clientCount++
	socket.nickname = 'user' + clientCount;
	//  发送消息socket.emit
	//  广播message  io.emit
	io.emit('enter',scoket.nickname + 'comes in')

	socket.on('message',function(str){
		  console.log(str)
          io.emit('message',scoket.nickname + 'says:' +str)
	})

	scoket.on('disconnect',function(){
		io.emit('leave',scoket.nickname + 'left');
	})

});


console.log("websocket server listening on port" + PORT);
