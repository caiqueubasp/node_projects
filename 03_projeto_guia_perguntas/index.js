const express = require("express");
const app = express();
// const home = require("./views/index.ejs");

app.set("view engine", "ejs");

const port = 8050;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("App Rodando");
});
