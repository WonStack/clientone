import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import { productHandler } from "./productHandler.js";

const hostname = "localhost";
const port = 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (!req.url) {
      return;
    }

    if (req.url.includes("product")) {
      productHandler(req, res);
      return;
    }

    if (req.url === "/") {
      const filePath = path.join(__dirname, "html", "index.html");
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
    } else if (req.url === "/about") {
      const filePath = path.join(__dirname, "html", "about.html");
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
    } else if (req.url === "/contact") {
      const filePath = path.join(__dirname, "html", "contact.html");
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
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
