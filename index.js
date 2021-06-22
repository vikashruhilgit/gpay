const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8081;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("gpay1.html").pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
