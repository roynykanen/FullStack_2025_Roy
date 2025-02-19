const fs = require("node:fs/promises");

async function deleteFile() {
  try {
    await fs.unlink("./files/temp.txt");
    console.log("File has been succesfully deleted.");
  } catch (err) {
    console.log(err);
  }
}

deleteFile();
