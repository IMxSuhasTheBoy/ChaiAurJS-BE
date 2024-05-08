import http from "http";

// Create a local server to receive data from
const server = http.createServer();

// Listen for incoming requests
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "create & run a http server and send data!!!",
    })
  );
});

server.listen(8080);
if (server) console.log("Server running on port 8080\n");
