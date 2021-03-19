const http = require('http');
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}


const server = http.createServer((request, response) => {
    setTimeout(function2, 3000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
sleep(900000, function() {
   // executes after one second, and blocks the thread
server.listen(port);

});

console.log("Server running at http://localhost:%d", port);
