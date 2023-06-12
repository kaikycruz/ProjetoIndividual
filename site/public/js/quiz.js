var CampoSuccess = document.getElementById("sucesso");
var CampoError = document.getElementById("erro");
var xizinho = document.getElementById("fecharSuccess");
var xizinho2 = document.getElementById("fecharError");

var idUsuarioVar = Number(sessionStorage.ID_USUARIO);



xizinho2.addEventListener("click", () => {
  CampoError.classList.add("none");
});

xizinho.addEventListener("click", () => {
  CampoSuccess.classList.add("none");
});

var questions = [
  {
    numQuest: 1,
    pergunta: "Qual o nome do navio dos chapéus de palha?",
    alternativaA: "Oro Jackson",
    alternativaB: "Red Force",
    alternativaC: "Chapéus de Palha",
    alternativaD: "Thousand Sunny",
    correta: "Thousand Sunny",
  },
  {
    numQuest: 2,
    pergunta: "Por quantos membros é composto o bando dos chapéus de palha?",
    alternativaA: "10",
    alternativaB: "11",
    alternativaC: "9",
    alternativaD: "12",
    correta: "10",
  },
  {
    numQuest: 3,
    pergunta: "Qual o sobrenome do Sanji?",
    alternativaA: "Portgas Sanji",
    alternativaB: "Figarland Sanji",
    alternativaC: "Vinsmoke Sanji",
    alternativaD: "Kozuki Sanji",
    correta: "Vinsmoke Sanji",
  },
  {
    numQuest: 4,
    pergunta:
      "Em qual arco o Luffy utiliza a técnica gear fourth pela primeira vez?",
    alternativaA: "Wano",
    alternativaB: "Alabasta",
    alternativaC: "Skypiea",
    alternativaD: "Dressrosa",
    correta: "Dressrosa",
  },
  {
    numQuest: 5,
    pergunta: "Quem é o braço direito do Luffy?",
    alternativaA: "Shanks",
    alternativaB: "Sanji",
    alternativaC: "Zoro",
    alternativaD: "Sabo",
    correta: "Zoro",
  },
  {
    numQuest: 6,
    pergunta: "Quem o Luffy reencontra no arco de Alabasta?",
    alternativaA: "Ace",
    alternativaB: "Shanks",
    alternativaC: "Sabo",
    alternativaD: "Garp",
    correta: "Ace",
  },
  {
    numQuest: 7,
    pergunta: "O que descobrimos sobre o Luffy no arco de Wano",
    alternativaA: "O verdadeiro nome de sua fruta",
    alternativaB: "Quem é sua mãe",
    alternativaC: "Qual sua verdadeira motivação",
    alternativaD: "Seu verdadeiro nome",
    correta: "O verdadeiro nome de sua fruta",
  },
  {
    numQuest: 8,
    pergunta: "Quanto tempo durou o timeskip",
    alternativaA: "9 meses",
    alternativaB: "1 ano",
    alternativaC: "5 meses",
    alternativaD: "2 anos",
    correta: "2 anos",
  },
  {
    numQuest: 9,
    pergunta: "Quais são os novos imperadores do mar",
    alternativaA: "Shanks, Luffy, Buggy, Teach",
    alternativaB: "Barba branca, Doflamingo, Luffy, Shanks",
    alternativaC: "Kaido, Big Mom, Shanks, Luffy",
    alternativaD: "Teach, Dragon, Buggy, Shanks",
    correta: "Shanks, Luffy, Buggy, Teach",
  },
  {
    numQuest: 10,
    pergunta:
      "Quantas vezes Luffy foi derrotado por Kaido ate finalmente vencer",
    alternativaA: "12 vezes",
    alternativaB: "9 vezes",
    alternativaC: "10 vezes",
    alternativaD: "5 vezes",
    correta: "9 vezes",
  },
];

var gabarito = [
  "Thousand Sunny",
  "10",
  "Vinsmoke Sanji",
  "Dressrosa",
  "Zoro",
  "Ace",
  "O verdadeiro nome de sua fruta",
  "2 anos",
  "Shanks, Luffy, Buggy, Teach",
  "10 vezes",
];

var respostasUser = [];

var i = 0;
var numeroQuestao = 1;

// let segundos = 0;
// let minutos = 0;
// let cron;

// function timer() {
//   if (segundos == 60) {
//     segundos = 0;
//     minutos++;
//     document.getElementById("minuto").innerText = returnData(minutos);
//   } else {
//     segundos++;
//     document.getElementById("segundo").innerText = returnData(segundos);
//   }
// }

// cron = setInterval(() => {
//   timer();
// }, 1000);

// function returnData(input) {
//   return input >= 10 ? input : `0${input}`;
// }

function iniciar() {
  var question = `<div id="questao${questions[i].numQuest}" class="questoes">`;
  question += ` 
        <span id="spanPergunta">${questions[i].numQuest}. ${
    questions[i].pergunta
  }</span>
    
    <div class="questoes">
        <div class="alternativas" id="clicouA">
        <div class ="resps">
            <input 
                type="radio" 
                name="option${questions[i].numQuest}" 
                id="alternativaA${questions[i].numQuest}"
                value="${questions[i].alternativaA}" ${
    questions[i].alternativaA == respostasUser[i] ? "checked" : ""
  }
            ><label for="alternativaA${questions[i].numQuest}">${
    questions[i].alternativaA
  }</label>
            </div>
        </div>
        <div class="alternativas" id="clicouB">
        <div class ="resps">
            <input 
                type="radio" 
                name="option${questions[i].numQuest}" 
                id="alternativaB${questions[i].numQuest}"
                value="${questions[i].alternativaB}" ${
    questions[i].alternativaB == respostasUser[i] ? "checked" : ""
  }
            ><label for="alternativaB${questions[i].numQuest}">${
    questions[i].alternativaB
  }</label>
            </div>
        </div>
        <div class="alternativas" id="clicouC">
        <div class ="resps">
            <input 
                type="radio" 
                name="option${questions[i].numQuest}" 
                id="alternativaC${questions[i].numQuest}"
                value="${questions[i].alternativaC}" ${
    questions[i].alternativaC == respostasUser[i] ? "checked" : ""
  }
            ><label for="alternativaC${questions[i].numQuest}">${
    questions[i].alternativaC
  }</label>
            </div>
        </div>
        <div class="alternativas" id="clicouD">
        <div class ="resps">
            <input 
                type="radio" 
                name="option${questions[i].numQuest}" 
                id="alternativaD${questions[i].numQuest}"
                value="${questions[i].alternativaD}" ${
    questions[i].alternativaD == respostasUser[i] ? "checked" : ""
  }
            ><label for="alternativaD${questions[i].numQuest}">${
    questions[i].alternativaD
  }</label>
            </div>
        </div>
    </div>
    </div>
    <div class="botoes" id="botoes">
    ${i > 0 ? '<button id="btnPrev" onclick="voltar()">Voltar</button>' : ""}
    ${
      i < questions.length - 1
        ? '<button id="btnNext" onclick="proxima()">Proxima</button>'
        : '<button id="btnFinalizar" onclick="proxima()">Finalizar</button>'
    }
    </div>
    <div class="numQuest" id="numQuest"></div>
    `;

  container.innerHTML = question;
  numQuest.innerHTML = `Questao ${numeroQuestao} de 10`;
}


var next = document.getElementById("btnNext");
var prev = document.getElementById("btnPrev");
var finalizado = document.getElementById("btnFinalizar");
var verResults = document.getElementById("btnverDash");

function proxima() {
  console.log(i);

  if (numeroQuestao == 10) {
    numQuest.innerHTML = `Questao 10 de 10`;
  } else {
    numQuest.innerHTML = `Questao ${numeroQuestao} de 10`;
    numeroQuestao++;
  }

  var radios = document.getElementsByName(`option${i + 1}`);
  for (var indice = 0; indice < radios.length; indice++) {
    if (radios[indice].checked) {
      if (respostasUser[i]) {
        respostasUser[i] = radios[indice].value;
      } else {
        respostasUser.push(radios[indice].value);
      }
    }
  }

  i++;

  if (i < questions.length) {
    iniciar();
  } else {
    finalizar();
  }
}

function voltar() {
  numeroQuestao--;
  numQuest.innerHTML = `Questao ${numeroQuestao} de 10`;
  i = i - 1;
  iniciar();
}

function finalizar() {
  console.log("Subiu todas as respostas");

  if (respostasUser.length != gabarito.length) {
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
  } else {
    var respostasCertas = 0;
    for (var i = 0; i < respostasUser.length; i++) {
      if (respostasUser[i] == gabarito[i]) {
        respostasCertas++;
      }
    }

    /* setTimeout(() => {
            window.location = "./.html";
          }, 3500);*/

    if (respostasCertas == 10) {
      container.innerHTML = `
            <span id="resultados">Parabéns, você acertou ${(respostasCertas/10)*100}% das questões, <br> você é um verdadeiro tripulante!</span>
        `;
    } else if (respostasCertas >= 8 && respostasCertas <= 9) {
      container.innerHTML = `
            <span id="resultados">Parabéns, você acertou ${(respostasCertas/10)*100}% das questões, <br> você é um verdadeiro fã!</span>
        `;
    } else if (respostasCertas >= 5 && respostasCertas < 8) {
      container.innerHTML = `
            <span id="resultados">Parabéns, você acertou ${(respostasCertas/10)*100}% das questões, <br> precisa acompanhar mais o anime!</span>
        `;
    } else {
      container.innerHTML = `
            <span id="resultados">xiiii, você acertou ${(respostasCertas/10)*100}% das questões,<br> precisa assistir o anime antes de responder o quiz!</span>
        `;
    }

    container.innerHTML += `
              <h1 style="color:white;">${respostasCertas}/10</h1>
            <p>Clique aqui para ver sua posição no ranking</p>
            <div class="botaoResult" id="botoes">
            <button onclick="verResultado()" id="btnverDash">
            Resultados
          </button>
          </div>  
        `;
  }
  // clearInterval(cron);
  // console.log(cron);

  console.log(respostasCertas)

  fetch("/usuarios/quiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.j
        idUsuarioServer: idUsuarioVar,
        pontuacaoServer: respostasCertas,
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      CampoSuccess.classList.remove("none");
      setTimeout(() => {
        CampoSuccess.classList.add("none");
      }, 3000)
    } else {
      console.log(resposta)
        throw ("Houve um erro ao tentar realizar o cadastro!");
    }
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
});

return false;
}


function verResultado() {
  window.location = "../ranking.html";
}
