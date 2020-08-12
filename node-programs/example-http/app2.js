const http = require("http");

let requestProcessor = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url == "/") {
        response.write("<h2>Hello</h2>");
        response.write("<a href=''>QA</a>");
        console.log(`URL: ${request.url}`);
    } else if (request.url == "/qa") {
        response.write("<h2>QA Limited</h2>");
        console.log(`URL: ${request.url}`);
    }
    
    // response.write(page.html);
};

let server = http.createServer(requestProcessor);

server.listen(8001);