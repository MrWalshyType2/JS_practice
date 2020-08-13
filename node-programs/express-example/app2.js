const express = require("express");

const app = express();
const port = 8000;

app.locals.title = "Express Example 2";
app.locals.email = "expressexample@expressexample.com";

let reply = (request, response) => {
    console.log(`Endpoint "${request.url}" hit.`);
    response.send("Hello");
};

// Multiple uri's can be specified as a list
app.get(["/one", "/two", "/three"], (request, response) => {
    reply(request, response);
});

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);
});