const fs = require("node:fs/promises");
const path = require("path");

const dirPath = path.join(__dirname, "testDir");

async function manageDirectory() {
  try {
    await fs.mkdir(dirPath);
    console.log("Directory created successfully!");

    await fs.rmdir(dirPath);
    console.log("Directory removed successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
}

manageDirectory();
