const handlers = require("./handler");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/" || endpoint === "/index.html") {
    handlers.handleHomePage(request, response);
  } else if (endpoint.includes(".css")) {
    handlers.handleCSS(request, response, endpoint);
  } else if (endpoint === "/DOM.js") {
    handlers.handleDom(request, response);
  } else if (
    endpoint === "/assets/images/caveman.png" ||
    endpoint === "/assets/images/cave1.jpg"
  ) {
    handlers.handleImg(request, response, endpoint);
  } else {
    handlers.handleErr(request, response);
  }
};

module.exports = router;
