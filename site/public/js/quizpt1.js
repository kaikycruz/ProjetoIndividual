/* */

var next = document.getElementById('btnNext')
var prev = document.getElementById('btnPrev')
var finalizado = document.getElementById('btnFinalizar')
var verResults = document.getElementById('btnverDash')

var questao1 = document.getElementById('quest1')
var questao2 = document.getElementById('quest2')
var questao3 = document.getElementById('quest3')
var questao4 = document.getElementById('quest4')
var questao5 = document.getElementById('quest5')
var questao6 = document.getElementById('quest6')
var questao7 = document.getElementById('quest7')
var questao8 = document.getElementById('quest8')
var questao9 = document.getElementById('quest9')
var questao10 = document.getElementById('quest10')


function clicou() {
  console.log("cliclou na alternativa");
  resposta.push();
}

var gabarito = ["Thousand Sunny", "10", "Vinsmoke Sanji", "Dressrosa", "Zoro", "Ace", "O verdadeiro nome de sua fruta", "2 anos", "Shanks, Luffy, Buggy, Teach", "10 vezes"]

var questoes = [questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao9, questao10];
var contador = 0;
var numeroQuestao = 1

numQuest.innerHTML = `Questao ${numeroQuestao} de 10`

function proxima() {
  numeroQuestao++
  numQuest.innerHTML = `Questao ${numeroQuestao} de 10`
  questoes[contador].classList.toggle("none");
 
  if (contador == 9) {
    prev.classList.toggle("none")
    finalizado.classList.toggle("none")
    
    numQuest.innerHTML = `Questao 10 de 10`
  } else {
    contador++;  
  }
  questoes[contador].classList.toggle("none");
  console.log("Passou");
}




function voltar() {
  numeroQuestao--
  numQuest.innerHTML = `Questao ${numeroQuestao} de 10`
  questoes[contador].classList.toggle("none");
 
  if (contador == 0) {
    numQuest.innerHTML = `Questao 1 de 10`
  }
  else {
    contador--;  
  }
  questoes[contador].classList.toggle("none");
  console.log("Voltou");
}

/*function btnPrev() {
  imagens[contador].classList.toggle("view");
  if (contador == 0) {
    contador = 4;
  } else {
    contador--;
  }
  imagens[contador].classList.toggle("view");
  console.log("voltou");
}*/


function finalizar() {
  questions.innerHTML = `<h1>Quiz Finalizado</h1>`
  finalizado.classList.toggle("none")
  verResults.classList.toggle("none")
  alert('Quiz finalizado')
}


function verdash() {
  window.location = '../index.html'
}