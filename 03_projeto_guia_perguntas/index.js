const express = require("express");
const app = express();
// const home = require("./views/index.ejs");

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");

const port = 8050;

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Caique's Company",
    inscritos: 8000,
    msg: exibirMsg,
  });
});

app.listen(port, () => {
  console.log("App Rodando");
});
