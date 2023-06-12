b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

validarSessao();

let proximaAtualizacao;

window.onload = obterDadosPersonagem();

function obterDadosPersonagem() {
  obterDadosPersonaFav(1);
}

function obterDadosPersonaFav(idPersonagem) {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/dadosPersonagem/${idPersonagem}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta;

          plotarGraficoPersonagem(resposta, idPersonagem);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados p/ gráfico: ${error.message}`
      );
    });
}

// grafico personagens
function plotarGraficoPersonagem(resposta, idPersonagem) {
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
        label: "votos",
        data: [],
        fill: false,
        backgroundColor: [
          "#e64c4c", //luffy
          "#a56dda", //zoro
          "#fff046", //sanji
                     // jimbei
                     //brook
          "#cf6ef0", //robin 
          "#f7a24e",  // nami
          "#cf64d3", // franky
                     //usopp
                    // chopper
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
  console.log(resposta);
  console.log("Dados:");
  console.log(dados.datasets);
  console.log("----------------------------------------------");

  const config = {
    type: "bar",
    data: dados,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  };

  let myChart = new Chart(document.getElementById(`myChart1`), config);
  setTimeout(
    () => atualizarGraficoPersonagem(idPersonagem, dados, myChart),
    2000
  );
}

function atualizarGraficoPersonagem(idPersonagem, dados, myChart1) {
  fetch(`/medidas/dadosPersonagem/${idPersonagem}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {
          let avisoCaptura = document.getElementById(
            `avisoCaptura${idPersonagem}`
          );

          proximaAtualizacao = setTimeout(
            () => atualizarGraficoPersonagem(idPersonagem, dados, myChart1),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(
          () => atualizarGraficoPersonagem(idPersonagem, dados, myChart1),
          2000
        );
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados p/ gráfico: ${error.message}`
      );
    });
}
