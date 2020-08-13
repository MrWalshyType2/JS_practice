const express = require("express");

const app = express();
const port = 8000;

app.locals.title = "Express Example 3";
app.locals.email = "expressexample@expressexample.com";

// let router = app.route("/morgan");

// router.get((request, response) => {
//     response.send("Hello from GET");
//     response.end();
// });

// router.post((request, response) => {
//     response.send("Hello from POST");
//     response.end();
// });

// router.put((request, response) => {
//     response.send("Hello from PUT");
//     response.end();
// });

app.route("/morgan")
    .get((request, response) => {
        response.send("Hello from GET");
        response.end();
    })
    .post((request, response) => {
        response.send("Hello from POST");
        response.end();
    })
    .put((request, response) => {
        response.send("Hello from PUT");
        response.end();
    });

app.route("/record")
    .get((request, response) => {
        response.send("Getting record...");
        response.end();
    })

app.listen(port, () => {
    console.log(`${app.locals.title} listening on port: ${port}`);
    console.log(app.locals.email);
});