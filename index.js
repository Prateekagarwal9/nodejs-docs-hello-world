const http = require('http');
function function2() {
    // all the stuff you want to happen after that pause
    console.log('Testing');
}


const server = http.createServer((request, response) => {
    setTimeout(function2, 3000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
