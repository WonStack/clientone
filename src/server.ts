import http from "http";
import fs from "fs";
import path from "path";

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading index.html");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
