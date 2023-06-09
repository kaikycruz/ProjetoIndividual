var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  usuarioModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function entrar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .entrar(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listarPontos(req, res) {
  usuarioModel.listarPontos()
      .then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

function quiz(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var pontuacao = req.body.pontuacaoServer;

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else if (pontuacao == undefined) {
    res.status(400).send("Sua pontuacao está indefinida!");
  } else {
    usuarioModel
      .quiz(idUsuario, pontuacao)
      .then(function (resultado) {
        res.status(204).send("pontuacao enviada")
        console.log(`\nResultados encontrados: ${resultado}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var uf = req.body.ufServer;
  var idade = req.body.idadeServer;
  var senha = req.body.senhaServer;
  var epsAssistidos = req.body.epsAssistidosServer;
  var personagemFav = req.body.personagemFavServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (uf == undefined) {
    res.status(400).send("Seu UF está undefined!");
  } else if (idade == undefined) {
    res.status(400).send("Sua Idade está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (epsAssistidos == undefined) {
    res.status(400).send("Qtd eps assistidos está undefined!");
  } else if (personagemFav == undefined) {
    res.status(400).send("Seu personagem Favorito está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, uf, idade, senha, epsAssistidos, personagemFav)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  entrar,
  cadastrar,
  quiz,
  listarPontos,
  listar,
  testar,
};
