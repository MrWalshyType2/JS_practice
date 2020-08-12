const http = require("http");
const URL = require("url");

let requestProcessor = (request, response) => {
    let url = URL.parse(request.url, true);
    console.log(url);
    console.log(url.query);
    console.log(url.query.name);
    console.log(url.query.age);
    console.log(request.url);

    response.writeHead(200, {'Content-Type': 'text/html'});
    if (url.pathname == "/") {
        response.write("<h1>Home Page</h1>");
        response.write("<h2>Select Times Table</h2>")

        for (let t = 1; t <= 10; t++) {
            response.write(`<a href='http://localhost:8000/range?t=${t}'>TimesTables ${t}</a>`);
            response.write("<br/>");
        }
        response.end();
    }

    if (url.pathname == "/range") {
        response.write("<h2>Select the range</h2>");

        for (let i = 10; i <= 100; i += 10) {
            response.write(`<a href='http://localhost:8000/timestable?t=${url.query.t}&r=${i}'>${i}</a>`);
            response.write("<br/>");
        }
        response.end();
    }

    if (url.pathname == "/timestable") {
        response.write("<a href='http://localhost:8000'>Home</a>");
        response.write(`<h3>Times table: ${url.query.t}, Range: ${url.query.r}</h3>`);

        response.write("<table border='1'>");
        for (let i = 1; i <= url.query.r; i++) {
            response.write("<tr><td>");
            response.write(`${i} x ${url.query.t} = ${url.query.t * i}`);
            response.write("</td></tr>");
        }
        response.write("</table>");
        response.end();
    }
};

let server = http.createServer(requestProcessor);

server.listen(8000);