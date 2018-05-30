const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", function(client) {
  console.log("connection successed!");
  client.on("event", function(data) {});
  client.on("disconnect", function() {});
});
server.listen(3000, () => {
  console.log("dasdsadad");
});
