const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const home = require("./views/index.ejs");

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Rotas
const port = 8050;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send("Formulário recebido" + titulo + " " + descricao);
});

app.listen(port, () => {
  console.log("App Rodando");
});
