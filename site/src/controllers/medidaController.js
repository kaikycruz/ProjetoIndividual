var medidaModel = require("../models/medidaModel");

function dadosPersonagem(req, res) {
  var idPersonagem = req.params.idPersonagem;

  console.log(`Recuperando PersonagensFavoritos`);

  medidaModel
    .dadosPersonagem(idPersonagem)
    .then(function (resultado1) {
      if (resultado1.length > 0) {
        res.status(200).json(resultado1);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}


function dadosEps(req, res) {
  var idEps = req.params.idEps;

  console.log(`Recuperando epsAssitidos`);

  medidaModel
    .dadosEps(idEps)
    .then(function (resultado2) {
      if (resultado2.length > 0) {
        res.status(200).json(resultado2);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  dadosPersonagem,
  dadosEps,
};
