const express = require("express");
const app = express();
// const home = require("./views/index.ejs");

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 8050;

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;

  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-Cola", preco: 5 },
    { nome: "Leite", preco: 1.45 },
  ];

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Caique's Company",
    inscritos: 8000,
    msg: exibirMsg,
    produtos: produtos,
  });
});

app.listen(port, () => {
  console.log("App Rodando");
});
