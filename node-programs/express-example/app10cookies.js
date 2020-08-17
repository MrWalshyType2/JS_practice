const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

// Allows reading of cookies, cookies can be created natively
// Cookies are read from the 'request' object via 'request.cookies'
app.use(cookieParser());

app.get("/", (request, response) => {
    response.setHeader("Content-Type", "text/HTML");
    // Setting a cookie called 'cookie_test' with a value of 'A test express cookie'
    response.cookie("cookie_test", "A test express cookie");
    response.write("<h3>I made a cookie</h3>");
    response.end("<p>End of cookie test</p>");
});

app.get("/cookies", (request, response) => {
    response.setHeader("Content-Type", "text/HTML");
    response.write(`<p>The contents of 'cookie_test' is: ${request.cookies.cookie_test}</p>`);
    response.end();
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})