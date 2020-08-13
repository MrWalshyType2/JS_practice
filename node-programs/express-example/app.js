const express = require('express');

const app = express();
const port = 8000;

app.locals.title = 'Express Example';
app.locals.email = 'expressexample@expressexample.com';

let manchesterRequest = (request, response) => {
    console.log(`Manchester endpoint hit: ${request.url}`);
    response.write("<h1>Hello from Manchester</h1>"); // Call as many times as wanted
    // Auto closes connection after sending so can only call once, .send() is
    // express only
    //response.send("<h1>Hello World</h1>"); 
    response.end(); // Used with response.write()
}

let qaRequest = (request, response) => {
    console.log(`QA endpoint hit: ${request.url}`);
    response.send("<h1>Hello from QA</h1>");
}

app.get("/manchester", manchesterRequest);
app.get("/qa", qaRequest);

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);

    // Set in app settings table
    console.log(app.set('title', 'Express Example'));
    console.log(app.get('title'));
});