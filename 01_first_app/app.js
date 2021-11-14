var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Welcome");
  })
  .listen(8181);
console.log("Servidor rodando na porta 8181");
