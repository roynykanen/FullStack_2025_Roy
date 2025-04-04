const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // Exercise 5: Looping in EJS
  var users = [
    { name: "Alice Johnson", email: "alice.johnson@example.com", role: "admin" },
    { name: "Bob Smith", email: "bob.smith@example.com", role: "user" },
    { name: "Charlie Davis", email: "charlie.davis@example.com", role: "user" },
    { name: "Dana Lee", email: "dana.lee@example.com", role: "moderator" },
    { name: "Ethan Wright", email: "ethan.wright@example.com", role: "user" },
  ];

  // Exercise 4: Conditional Rendering in EJS
  let showMessage = true;

  // Exercise 2: Passing Data to EJS Templates
  res.render("pages/index", {
    users: users,
    message: "Workshop (WS03b) EJS",
    showMessage: showMessage,
    hiddenMessage: "You can't see this message if showMessage is set to false.",
  });
});

module.exports = router;
