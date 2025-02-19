const fs = require("fs");

fs.watch("./files/watch.txt", (eventType, filename) => {
  console.log("\nThe file", filename, "was modified!");
  console.log("\nThe type of change was:", eventType);
});
