const fs = require("node:fs/promises");

async function writeFile() {
  try {
    const content = "Jotain sisältöä tiedostoon\n";
    await fs.writeFile("./files/output.txt", content);
    const content2 = "Lisää sisältöä tiedostoon";
    await fs.appendFile("./files/output.txt", content2);
    console.log("File has been succesfully written.");
  } catch (err) {
    console.log(err);
  }
}

writeFile();
