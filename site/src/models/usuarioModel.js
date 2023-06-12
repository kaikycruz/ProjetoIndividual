var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(Email, Senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    Email,
    Senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE Email = '${Email}' AND Senha = '${Senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function listarPontos() {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPontuacao()");
  var instrucao = `
  select nome, pontuacao from resultadosQuiz join usuario on fkUser = idUser order by  pontuacao  desc;
;
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);


}


function quiz(idUsuario, pontuacao) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quiz(): ",
    idUsuario,
    pontuacao
  );
  var instrucao = `
  INSERT INTO resultadosQuiz (fkUser, pontuacao) VALUES (${idUsuario}, ${pontuacao});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(Nome, Email, UF, dtNasc, Senha, fkEps, fkPersonagem) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    Nome,
    Email,
    UF,
    dtNasc,
    Senha,
    fkEps,
    fkPersonagem
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO usuario (Nome, Email, UF, dtNasc, Senha, fkEps, fkPersonagem) VALUES ('${Nome}', '${Email}', '${UF}', '${dtNasc}', '${Senha}', '${fkEps}', '${fkPersonagem}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  entrar,
  cadastrar,
  quiz,
  listarPontos,
  listar,
};
