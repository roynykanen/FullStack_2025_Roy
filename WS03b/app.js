// Exercise 1: Setting Up EJS with Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/routes");

// Exercise 1: Setting Up EJS with Express
app.set("view engine", "ejs");

// Exercise 1: Setting Up EJS with Express
app.use("/", routes);

// Exercise 1: Setting Up EJS with Express
app.listen(PORT);
console.log("Server is listening on port " + PORT + " ...");
