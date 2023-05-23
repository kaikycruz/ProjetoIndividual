b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

window.onload = obterDadosGraficos();

function obterDadosGraficos() {
  obterDadosGrafico(1);
}

function obterDadosGrafico(idAquario) {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/ultimas/${idAquario}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta;

          plotarGrafico(resposta, idAquario);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGrafico(resposta, idAquario) {
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
        //donnut
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


  let labels2 = [];

  let dados2 = {
    labels: labels2,
    datasets: [
      {
        label: "Personagens Escolhidos",
        data2: [],
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
        borderColor: "red",
        tension: 0.1,
      },
      {
        //donnut
        label: "",
        data2: [],
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
        borderColor: "red",
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

  let myChart1 = new Chart(document.getElementById("myChart1"), config);
  setTimeout(() => atualizarGrafico(idAquario, dados, myChart1), 2000);

  const config2 = {
    type: "doughnut",
    data: dados,
   
  };

  // Adicionando gráfico criado em div na tela
  let myChart2 = new Chart(document.getElementById("myChart2"), config2);
  setTimeout(() => atualizarGrafico(idAquario, dados2, myChart2), 2000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas,

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(idAquario, dados, myChart) {
  fetch(`/medidas/tempo-real/${idAquario}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {

          let avisoCaptura = document.getElementById(
            `avisoCaptura${idAquario}`
          );

          
            // apagar o primeiro de umidade
            // dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

            // apagar o primeiro de temperatura
            // dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura
          

          // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
          proximaAtualizacao = setTimeout(
            () => atualizarGrafico(idAquario, dados, myChart),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(
          () => atualizarGrafico(idAquario, dados, myChart),
          2000
        );
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
