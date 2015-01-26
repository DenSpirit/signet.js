var port = 25600;
var net = require('net');
var server = net.createServer();
function complain(c) {
    return function(){
    console.log(new Date()+'\t'+c)
    }
}
complain('started')();
server.on('connection',function (socket){
    var data={}
    data.date=new Date()
    data.az='az'
    complain('bound')();
    socket.on('error',complain('socket err'));
    socket.on('end',complain('socket end'));
    socket.write(JSON.stringify(data)+'\n');
    socket.end();
});
server.on('error',function(errorObj){
complain('server err')();
});
server.listen(port);