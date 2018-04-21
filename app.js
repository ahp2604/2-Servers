var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You good");

}

var server1 = http.createServer(handleRequest);

server1.listen(PORT1, function(){
    console.log("Server listenning on: http:/localhost:" + PORT1)
});



function handleRequest2(request, response) {

    response.end("You suck");
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
    console.log("Server listenning on: http:/localhost:" + PORT2)
});
