b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

validarSessao();

let proximaAtualizacao2;

window.onload = obterDadosEps();

function obterDadosEps() {
  obterDadosEp(1);
}

function obterDadosEp(idEps) {
  if (proximaAtualizacao2 != undefined) {
    clearTimeout(proximaAtualizacao2);
  }

  fetch(`/medidas/dadosEps/${idEps}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta;

          plotarGraficoEps(resposta, idEps);
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

function plotarGraficoEps(resposta, idEps) {
  // grafico 2
  let labels2 = [];

  let dados2 = {
    labels: labels2,
    datasets: [
      {
        label: "",
        data: [],
        fill: false,  
        border: "none",
        tension: 0.1,
      },
      {
        label: "votos",
        data: [],
        fill: false,
        backgroundColor: [
          "#4783d3", //menos 200
          "#e64c4c", // manga
          "#fff046", //semanais
          "#cf64d3", // quase 800
        ],
        border: "none",
        tension: 0.1,
      },
    ],
  };

  for (i = 0; i < resposta.length; i++) {
    var registro2 = resposta[i];
    labels2.push(registro2.QuantidadeEps);
    dados2.datasets[0].data.push(registro2.epsassistidos);
    dados2.datasets[1].data.push(registro2.EpsAssistidos);
  }

  const config2 = {
    type: "bar",
    data: dados2,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  };

  let myChart = new Chart(document.getElementById(`myEps`), config2);
  setTimeout(() => atualizarGraficoEps(idEps, dados2, myChart), 2000);
}

function atualizarGraficoEps(idEps, dados2, myChart) {
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
          proximaAtualizacao2 = setTimeout(
            () => atualizarGraficoEps(idEps, dados2, myChart),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao2 = setTimeout(
          () => atualizarGraficoEps(idEps, dados2, myChart),
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