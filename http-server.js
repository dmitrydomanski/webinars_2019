const http = require("http");
const url = require("url");
const httpServer = http.createServer();
const port = process.env.PORT || 5000;

httpServer.listen(port, function() {
  console.log(`Server is up and running at port ${port}`);
});

const endpoints = ["sum", "sub", "div", "mul"];

for (let endpoint of endpoints) {
  httpServer.on(endpoint, performOperation);
}

function getContent(content, res) {
    // TODO: append style
  res.write(`<div> ${content}</div>`);
}

function performOperation(endpoint, query, res) {
  const { op1, op2 } = query;
  switch (endpoint) {
    case "sum":
      getContent(parseInt(op1, 10) + parseInt(op2, 10), res);
      break;
    case "sub":
      getContent(op1 - op2, res);
      break;
    case "div":
      getContent(op1 / op2, res);
      break;
    case "mul":
      getContent(op1 * op2, res);
      break;
  }
}

// console.log(http.METHODS);
// console.log(http.STATUS_CODES);

httpServer.on("request", (req, res) => {
  res.setHeader("content-type", "text/html");
  const { url } = req;
  handleOperation(url, res);
  res.end();
});

function handleOperation(currentUrl, res) {
  const parsedUrl = url.parse(currentUrl, true);
  const { pathname, query } = parsedUrl;
  const endpoint = pathname.split("/").pop();
  // TODO: verify if path contains 'calculator' and enpoint belongs to enpoints array
  httpServer.emit(endpoint, endpoint, query, res);
}
