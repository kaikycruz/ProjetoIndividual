b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

window.onload = obterDadosGraficos();

function obterDadosGraficos() {
  obterDadosGrafico(1);
  obterDadosGrafico(2);
}

function obterDadosGrafico(idPersonagem, idEps) {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/dadosPersonagem/${idPersonagem}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta;

          plotarGrafico(resposta, idPersonagem);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

  fetch(`/medidas/dadosEps/${idEps}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta2) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta2)}`);
          resposta2;

          plotarGrafico(resposta2, idEps);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// grafico personagens
function plotarGrafico(resposta, idPersonagem) {
  console.log("iniciando plotagem do gráfico...");

  let labels = [];

  let dados = {
    labels: labels,
    datasets: [
      {
        //donnut
        label: "Personagens Escolhidos",
        data: [],
        fill: false,
        borderColor: "none",
        tension: 0.1,
      },
      {
        label: "",
        data: [],
        fill: false,
        backgroundColor: [
          "#e64c4c", //luffy
          "#a56dda", //zoro
          "#fff046", //sanji
          "orange", // nami
          "#52d9ff",
          "#f7a24e",
          "#cf6ef0",
          "#e6c149",
        ],
        borderColor: "none",
        tension: 0.1,
      },
    ],
  };

  console.log("----------------------------------------------");
  console.log(
    'Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":'
  );
  console.log(resposta);

  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    labels.push(registro.NomePersonagem);
    dados.datasets[0].data.push(registro.personagem);
    dados.datasets[1].data.push(registro.PersonagemFavorito);
  }

  console.log("----------------------------------------------");
  console.log("O gráfico será plotado com os respectivos valores:");
  console.log("Labels:");
  console.log(labels);
  console.log("Dados:");
  console.log(dados.datasets);
  console.log("----------------------------------------------");

  const config = {
    type: "bar",
    data: dados,
  };

  let myChart = new Chart(document.getElementById("myChart1"), config);
  setTimeout(() => atualizarGrafico(idPersonagem, dados, myChart), 2000);
}

function plotarGrafico(resposta2, idEps) {
  // grafico 2
  let labels = [];

  let dados2 = {
    labels: labels,
    datasets: [
      {
        label: "Eps assistidos",
        data: [],
        fill: false,
        borderColor: "none",
        tension: 0.1,
      },
      {
        label: "Eps assistidos",
        data: [],
        fill: false,
        backgroundColor: [
          "#e64c4c", //luffy
          "#a56dda", //zoro
          "#fff046", //sanji
          "orange", // nami
          "#52d9ff",
          "#f7a24e",
          "#cf6ef0",
          "#e6c149",
        ],
        borderColor: "none",
        tension: 0.1,
      },
    ],
  };

  for (i = 0; i < resposta2.length; i++) {
    var registro = resposta2[i];
    labels.push(registro.EpsAssistidos);
    dados2.datasets[0].data.push(registro.epsassistidos);
    dados2.datasets[1].data.push(registro.QuantidadeEps);
  }

  const config2 = {
    type: "line",
    data: dados2,
  };

  let myChart = new Chart(document.getElementById("myChart2"), config2);
  setTimeout(() => atualizarGrafico(idEps, dados2, myChart), 2000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas,

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(idPersonagem, dados, myChart) {
  fetch(`/medidas/dadosPersonagem/${idPersonagem}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {
          let avisoCaptura = document.getElementById(
            `avisoCaptura${idPersonagem}`
          );

          // apagar o primeiro de umidade
          // dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

          // apagar o primeiro de temperatura
          // dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

          // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
          proximaAtualizacao = setTimeout(
            () => atualizarGrafico(idPersonagem, dados, myChart),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(
          () => atualizarGrafico(idPersonagem, dados, myChart),
          2000
        );
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function atualizarGrafico(idEps, dados2, myChart) {
  fetch(`/medidas/dadosEps/${idEps}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {
          let avisoCaptura = document.getElementById(`avisoCaptura${idEps}`);

          // apagar o primeiro de umidade
          // dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

          // apagar o primeiro de temperatura
          // dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

          // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
          proximaAtualizacao = setTimeout(
            () => atualizarGrafico(idEps, dados2, myChart),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(
          () => atualizarGrafico(idEps, dados2, myChart),
          2000
        );
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
