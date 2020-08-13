const express = require("express");

const app = express();
const port = 8000;

app.locals.title = "Express Example 3";
app.locals.email = "expressexample@expressexample.com";

app.get("/", (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>Home Page</h1>");
    response.write("<h2>Select Times Table</h2>")
    for (let i = 0; i <= 12; i++) {
        response.write(`<a href='http://localhost:8000/range/${i}'>${i}</a><br/>`);
    }
    response.end();
});

app.get("/range/:table", (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h2>Select the range for timestable of ${request.params.table}</h2>`);

    for (let i = 10; i <= 100; i += 10) {
        response.write(`<a href='http://localhost:8000/timestable/${request.params.table}/${i}'>${i}</a>`);
        response.write("<br/>");
    }
    response.end();
});

app.get("/timestable/:t/:r", (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<a href='http://localhost:8000'>Home</a>");
    response.write(`<h3>Times table: ${request.params.t}, Range: ${request.params.r}</h3>`);    
    response.write("<table border='1'>");

    for (let i = 1; i <= request.params.r; i++) {
        response.write("<tr><td>");
        response.write(`${i} x ${request.params.t} = ${request.params.t * i}`);
        response.write("</td></tr>");
    }

    response.write("</table>");
    response.end();
});

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);
    console.log(app.locals.email);
});