const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.end("Hello World.");
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
      break;
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`);
});
