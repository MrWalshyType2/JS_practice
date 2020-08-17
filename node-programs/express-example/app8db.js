const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 8000;

let getAllRecords = (response) => {
    console.log("Database Application");

    // Configure connection object
    let mysqlConfig = mysql.createConnection({
        host: "localhost",
        user: "node",
        password: "root",
        database: "express_test"
    });

    // Establish the connection
    mysqlConfig.connect();

    // Query the db
    mysqlConfig.query("SELECT * FROM users", (error, result) => {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            result.forEach((record) => {
                response.write(`${record.name}...${record.age}<br/>`);
            });
        }
        response.end();
    });
}

app.get("/records/get", (request, response) => {
    getAllRecords(response);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});