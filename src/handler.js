const fs = require("fs");
const path = require("path");

const handleHomePage = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      handleErr(request, response);
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handleCSS = (request, response, endpoint) => {
  const filePath = path.join(__dirname, "..", "public", ...endpoint.split("/"));
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, "Server");
      response.end("<h1>Page Not Found</h1>");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/css" });
      response.end(file);
    }
  });
};

const handleDom = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "DOM.js");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      // handleErr(request, response);
      response.writeHead(500, "Server");
      response.end("<h1>Page Not Found</h1>");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/js" });
      response.end(file);
    }
  });
};

const handleErr = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "html", "404.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Page Not Found</h1>");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handleImg = (request, response, endpoint) => {
  const filePath = path.join(__dirname, "..", "public", ...endpoint.split("/"));
  fs.readFile(filePath, (error, file) => {
    if (error) {
      handleErr(request, response);
      return;
    } else {
      response.writeHead(200, { "Content-Type": "image/*" });
      response.end(file);
    }
  });
};

module.exports = {
  handleHomePage,
  handleCSS,
  handleDom,
  handleErr,
  handleImg,
};
