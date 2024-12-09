import http, { IncomingMessage, ServerResponse } from "http";
import { handler } from "./handler.js";

const hostname = "localhost";
const port = 3000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    handler(req, res);
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
