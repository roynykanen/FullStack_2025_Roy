const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const myLogger = require("./modules/myLogger");
const checkCustomHeader = require("./modules/checkCustomHeader");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(myLogger);

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "services.html"));
});

 app.post('/submit', checkCustomHeader, (req, res) => {
 res.send('X-Custom-Header is present!');
 });

app.post('/submit', (req, res) => {
  const request = req.body;
  res.json({ message: 'Data received succesfully!', data: request}); 
});

app.get("/list", function (req, res) {
  const filePath = path.join(__dirname, "files", "list.txt");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file.");
    res.send(`<pre>${data}</pre>`);
  });
});

app.get("/json", (req, res) => {
  const filePath = path.join(__dirname, "files", "data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading JSON file.");

    const users = JSON.parse(data);
    let table = "<table border='1'><tr><th>Name</th><th>Email</th></tr>";

    users.forEach((user) => {
      table += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
    });

    table += "</table>";
    res.send(table);
  });
});

app.post("/add", (req, res) => {
  const newUser = req.body;
  const filePath = path.join(__dirname, "files", "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let users = [];
    if (data) {
      try {
        users = JSON.parse(data);
      } catch (parseErr) {
        return res.status(500).json({ error: "Error parsing user data" });
      }
    }

    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving user data" });
      }
      res
        .status(201)
        .json({ message: "User added successfully", user: newUser });
    });
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, function () {
  console.log("Listening on port: " + PORT);
});
