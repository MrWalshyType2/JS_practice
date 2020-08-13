const express = require("express");

const app = express();
const port = 8000;

app.locals.title = "Express Example 3";
app.locals.email = "expressexample@expressexample.com";

let doMath = (operation, x, y) => {
    if (isNaN(x) || isNaN(y)) return "Invalid input, x or y is not a number.";

    if (operation == "add") {
        return x + y;
    } else if (operation == "sub") {
        return x - y;
    } else if (operation == "mul") {
        return x * y;
    } else if (operation == "div") {
        return x / y;
    } else {
        return "Something went wrong";
    }
};

// URL parameters are created in the request object
app.get("/message/:name", (request, response) => {
    // The value located at the position of ':name' is a url parameter
    response.status(200).send(`Hello ${request.params.name}`);
});

app.get("/message/:name/:location", (request, response) => {
    response.status(200).send(`${request.params.name} lives in ${request.params.location}`);
});

// localhost:8000/maths/add/2/4
// localhost:8000/maths/sub/2/4
app.get("/math/:operation/:x/:y", (request, response) => {
    const operation = request.params.operation;
    const x = parseFloat(request.params.x);
    const y = parseFloat(request.params.y);

    const result = doMath(operation, x, y);

    if (isNaN(result)) {
        // Bad Request
        response.status(400).send(result);
    } else {
        // OK
        response.status(200).send(result.toString());
    }
});

// Query Parameters start with ?, format: key=value, param separator: &
let users = [];

app.get("/query", (request, response) => {
    const name = request.query.name;
    const age = request.query.age;

    response.send(`Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);
    console.log(app.locals.email);
});