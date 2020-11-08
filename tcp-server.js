const net = require("net");

const server = net.createServer();

server.on("connection", logConnection);
server.on("connection", handleConnection);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
server.listen(port, host, () => {
  console.log(`server listening at tcp://${host}:${port}`);
});

/**
 * @param {import('net').Socket} socket
 */
function logConnection(socket) {
  console.log(
    `incoming connection ${socket.remoteAddress}:${socket.remotePort}`
  );
}

/**
 * @param {import('net').Socket} socket
 */
function handleConnection(socket) {
  const html = createPage("Hello World");
  const payload = `HTTP/1.1 200 OK
Server: NodeJS
Content-Type: text/html
Content-Length: ${Buffer.from(html, "utf-8").byteLength}

${html}`;

  socket.write(payload);
  socket.end();
}

function createPage(message) {
  return `<!DOCTYPE html>
<html>
  <body>
    <h1>${message}</h1>
  </body>
</html>`;
}
