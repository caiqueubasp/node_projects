const express = require("express");
const app = express();

const port = 4000;

const workingIn = `Funcionando na porta ${port} <br>`;

const home = `
Funcionando na porta ${port} <br>
<h1>Bem vindo a página Home </h1> <p style="font-size: 80px;">&#127960;</p>
`;

const blog = `
Funcionando na porta ${port} <br>
<h1>Bem vindo ao meu Blog </h1> <p style="font-size: 80px;">&#128525;</p>
`;

const canal = `
Funcionando na porta ${port} <br>
<h1>Bem vindo ao meu Canal </h1> <p style="font-size: 80px;">&#128151;</p>
`;

const perfil = `
Funcionando na porta ${port} <br>
<h1>Bem vindo ao meu Perfil </h1> <p style="font-size: 80px;">&#128512;</p>
`;

app.get("/", function (req, res) {
  res.send(home);
});

app.get("/blog", function (req, res) {
  res.send(blog);
});

app.get("/canal", function (req, res) {
  res.send(canal);
});

app.get("/perfil", function (req, res) {
  res.send(perfil);
});

app.get("/params/:nome/:empresa", function (req, res) {
  var nome = req.params.nome;
  var empresa = req.params.empresa;

  const params = `
    ${workingIn}
   <h1> Olá, ${nome} da empresa: ${empresa} </h1> <br>
   <p style="font-size: 80px;">&#127917;</p>
    `;

  res.send(params);
});

app.get("/paramsNotObg/:nome?/:empresa?", function (req, res) {
  var nome = req.params.nome;
  var empresa = req.params.empresa;

  const params = `
      ${workingIn}
     <h1> Olá, ${nome ? nome : ""} da empresa: ${
    empresa ? empresa : ""
  } </h1> <br>
     <p style="font-size: 80px;">&#127917;</p>
      `;

  res.send(params);
});

app.get("/paramsWithQuery/param/", function (req, res) {
  var query = req.query["paramsWithQuery"];
  const withQuery = `Passou a query ${query}`;
  const withOutQuery = "Não passou nenhum query";

  const params = `
        ${workingIn}
       <h1> Trabalhando com queries params ${
         query ? withQuery : withOutQuery
       } </h1> <br>
       ${req.query["paramsWithQuery/param"]}
       <p style="font-size: 80px;">&#127917;</p>
        `;

  res.send(params);
});

app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!", erro);
  } else {
    console.log(`Servidor rodando na porta: ${port}`);
  }
});
