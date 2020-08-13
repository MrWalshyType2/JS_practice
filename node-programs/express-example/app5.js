const express = require("express");

const app = express();
const port = 8000;

app.locals.title = "Express Example 3";
app.locals.email = "expressexample@expressexample.com";

// Immediately invoked anonymous function
((a) => {
    console.log(a);
})(50);

app.get("/first", (request, response) => {
    //response.writeHead(200, {'Content-Type': 'text/html'});

    console.log("A1");
    
    response.end();
});

app.get("/second/:num", (request, response, next) => {
    //response.writeHead(200, {'Content-Type': 'text/html'});
    let num = request.params.num;

    console.log("A2");
        
    if (num == 2) {
        next();
    }
    response.end();
}, (request, response) => {
    // This function is stored in the 'next' parameter
    console.log("A3");

    response.end();
});

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);
    console.log(app.locals.email);
});