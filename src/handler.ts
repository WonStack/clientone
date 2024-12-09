import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export function handler(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) {
    return;
  }

  const pageIndex = req.url === "/" ? "index.html" : `${req.url}.html`;
  const filePath = path.join(__dirname, "html", pageIndex);

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
  console.log("connect to page:", req.url);
}
