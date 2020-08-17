var mysql = require("mysql");
let express = require("express");

let app = express();
let con = null;
let port = 8000;

let dbConnection = () => {
  let con = mysql.createConnection({
    host: "localhost",
    user: "node",
    password: "root",
    database: "express_test",
  });

  return con;
};

function showRecords(Request, Response) {
  con.query("Select * from personal_details", function (err, result) {
    if (err) {
      console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr");
    } else {
      Response.writeHead(200, { "Content-Type": "text/HTML" });
      Response.write("<Table border='1'>");
      Response.write("<tr>");
      Response.write(" <td> Registration number </td>");
      Response.write(" <td> name </td>");
      Response.write(" <td> Options </td>");
      Response.write("</tr>");

      result.forEach(function (record) {
        Response.write("<tr>");
        Response.write("<td> " + record.regno + "</td>");
        Response.write("<td> " + record.name + "</td>");
        Response.write(
          `<td> <A href='http://localhost:8000/personinfo/${record.regno}/${record.name}'> personal </A>`
        );
        Response.write(
          `, <A href='http://localhost:8000/examdetails/${record.regno}/${record.name}'> exam </A>`
        );

        Response.write("</tr>");
      });
      Response.end();
    }
  });
}

let examsinformation = function (request, response) {
  let regno = request.params.regno;
  let name = request.params.name;
  let totalMarks = 0;

  con.query(`select * from exams where regno=${regno}`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.writeHead(200, {"Content-Type" : "text/HTML"});
      response.write("<h1>Exam Details</h1>");
      response.write(`<h2>${name}</h2>`);

      response.write(`<table border='1'>`);
      response.write("<tr><th>Registration No</th>\
      <th>Subject</th>\
      <th>Marks</th>\
      <th>Percentage</th></tr>");
      result.forEach((record) => {
        totalMarks += record.marks;
        response.write("<tr>");
        response.write(`<td>${record.regno}</td>`);
        response.write(`<td>${record.subject}</td>`);
        response.write(`<td>${record.marks}</td>`);
        response.write(`<td>${record.marks * 100 / 150}`);
        response.write("</tr>")
      });
      response.write(`</table>`);

      let percentage = totalMarks * 100 / 450;
      response.write("<table border='1'>");
      response.write("<tr><th>Total Marks`</th><th>Percentage</th>")
      response.write(`<tr><td>${totalMarks}</td>`);
      response.write(`<td>${percentage}</td></tr>`);
      response.write("</table>");
      if (percentage>=65) {
        response.write("<font style='color:green'>You have PASSED the exam!</font>");
      } else {
        response.write("<font style='color:red'>You have FAILED the exam!</font>");
      }
    }
    response.end();
  });
};

let personalinformation = function (req, response) {
  let regno = req.params.regno;
  let name = req.params.name;

  con.query(`Select * from personal_details where regno=${regno}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.writeHead(200, { "Content-Type": "text/HTML" });
      response.write(`You are looking for the presonal details of : ${name}`);
      result.forEach(function (record) {
        response.write(`<br> Address ${record.address} </br>`);
        response.write(`Post Code: ${record.postcode} </br>`);
        response.write(`City record ${record.city} </br>`);
      });
      response.end();
    }
  });
};

app.get("/dbf", function (req, res) {
  showRecords(req, res);
});

app.get("/personinfo/:regno/:name", function (req, res) {
  personalinformation(req, res);
});
app.get("/examdetails/:regno/:name", function (request, response) {
  examsinformation(request, response);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);

  con = dbConnection();
  con.connect();
});
