const http = require('http');
const URL = require('url');
// Import the events package
const events = require('events');
const { emitWarning } = require('process');

const port = 8000;

// Create an EventEmitter obj (singleton)
const emitter = new events.EventEmitter();

// Create an Event handler
let pageEventHandler = (data) => {
    console.log(data);
};

// Assign the event handler to an event
// Triggers on detecting event called 'indexEvent', Event detector
emitter.on('pageEvent', pageEventHandler);

//
let requestProcessor = (request, response) => {  
    let url = URL.parse(request.url, true);
    let loginStatus = false;
    let username = "Bob";
    
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (url.pathname == "/") {
        // Emit the event
        // Emitting the 'indexEvent' to trigger the event handler
        emitter.emit('pageEvent', 'On Index Page');
        response.write("<h1>Index page</h1>");

        if (loginStatus == true) {
            emitter.emit('pageEvent', 'User logged in');
            response.write(`<p>${username} is logged in.</p>`);
        } else {
            emitter.emit('pageEvent', 'User is not logged in');
            response.write("<p>Please login...</p>");
        }
        response.end();
    } else if (url.pathname == "/about") {
        // Emit the event
        // Emitting the 'pageEvent' to trigger the event handler
        emitter.emit('pageEvent', 'On About Page');
        response.write("<h1>About page</h1>");
        response.end();
    }
};

let server = http.createServer(requestProcessor);
server.listen(port, () => {console.log(`Server listening on ${port}`)});