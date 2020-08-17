const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

// Allows reading of cookies, cookies can be created natively
// Cookies are read from the 'request' object via 'request.cookies'
app.use(cookieParser());

app.get("/", (request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    // Setting a cookie called 'cookie_test' with a value of 'A test express cookie'
    response.cookie("cookie_test", "A test express cookie");
    response.write("<h3>I made a cookie</h3>");
    response.end("<p>End of cookie test</p>");
});

app.get("/colouredText", (request, response) => {
    let colour = request.cookies.colour;
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(`<h2 style='color:${colour}'>This text is coloured...</h2>`);
});

app.get("/cookies", (request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(`<p>The contents of 'cookie_test' is: ${request.cookies.cookie_test}</p>`);
    response.end();
});

app.get("/colour/:colour", (request, response) => {
    let colour = request.params.colour;
    response.cookie("colour", colour);
    response.end(`Cookie created with colour: ${colour}`);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})