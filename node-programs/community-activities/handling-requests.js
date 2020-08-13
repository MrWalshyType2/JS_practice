const express = require("express");

const app = express();
const port = 8000;

let names = ["Fred", "Bob", "Gabriella", "Elron", "Stacy", "Darcy"];

app.use(express.json());

app.route("/")
    .get((request, response) => {
        response.send("Hello, my name is !")
    });


app.get("/getAll", (request, response) => {
    response.status(200).send(names);
});

app.get("/get/:id", (request, response) => {
    response.status(200).send(names[request.params.id]);
});

app.delete("/delete/:id", (request, response) => {
    names.splice(request.params.id, 1);
    response.status(204).end();
});

app.post("/create", (request, response) => {
    const body = request.body;
    names.push(body.name);
    response.status(201).end();
})

app.put("/update/:id", (request, response) => {
    const id = request.params.id;
    const name = request.query.name;

    names[id] = name;
    response.status(204).end();
});

const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});