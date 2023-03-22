const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);
const port = 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}. http://127.0.0.1:${port}`);
});
