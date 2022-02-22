const express = require("express");
const app = express();
// const home = require("./views/index.ejs");

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 8050;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.listen(port, () => {
  console.log("App Rodando");
});
