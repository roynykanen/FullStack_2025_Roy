const http = require("http");

const hostname = "192.168.1.30";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html; charset=utf-8");
    if (req.url === "/") {
        res.write("<h1> Hello, World! </h1>");
    } else if (req.url === "/about") {
        res.write("<h1> About Page </h1>");
    } else if (req.url === "/contact") {
        res.write("<h1> Contact Page </h1>");
    } else {
        res.write("<strong> Hakemaasi sivua ei löydy! </strong>");
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});