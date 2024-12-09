import fs from "fs";
import path from "path";
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
export function productHandler(req, res) {
    if (!req.url) {
        return;
    }
    const id = req.url.split("/").pop();
    const filePath = path.join(__dirname, "html", `${req.url}.html`);
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Error reading index.html");
        }
        else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
    console.log(id);
    return id;
}
