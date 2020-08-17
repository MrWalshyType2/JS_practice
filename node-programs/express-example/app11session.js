// npm install express-session
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 8000;

app.use(cookieParser());
app.use(session({
    secret: 'some secret code'
}));

app.get("/", (request, response) => {
    request.session.user="morgan";
    request.session.password="password";
    response.send("Session created");
});

app.get("/session", (request, response) => {
    const username = request.session.user;
    const password = request.session.password;

    //response.writeHead(200, {"Content-Type": "text/HTML"});
    response.send(`Username: ${username}, Password: ${password}`);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});