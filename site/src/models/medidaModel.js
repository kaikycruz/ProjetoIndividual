var database = require("../database/config");

function dadosPersonagem(idPersonagem) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select count(usuario.fkPersonagem) as PersonagemFavorito, personagem.nomePersonagem as NomePersonagem from usuario join personagem on fkPersonagem = ${idPersonagem} group by nomePersonagem; `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select count(usuario.fkPersonagem) as PersonagemFavorito, personagem.nomePersonagem as NomePersonagem from usuario join personagem on fkPersonagem = idPersonagem group by nomePersonagem;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function dadosEps(idEps) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select count(usuario.fkEps) as EpsAssistidos, epsassistidos.qtdEps as QuantidadeEps
    from usuario join epsassistidos on fkEps = ${idEps} group by qtdEps;`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select count(usuario.fkEps) as EpsAssistidos, epsassistidos.qtdEps as QuantidadeEps
    from usuario join epsassistidos on fkEps = idEps group by qtdEps;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  dadosPersonagem,
  dadosEps,
};
