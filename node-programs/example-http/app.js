const http = require("http");

let requestProcessor = (request, response) => {
    console.log(`Request URL: ${request.url}`);
}

let server = http.createServer(requestProcessor);

server.listen(8001);