var akumaNoMi = document.getElementById("akumaNoMi");
var governoMundial = document.getElementById("governoMundial");
var shichibukai = document.getElementById("shichibukai");
var yonkou = document.getElementById("yonkou");
var grandRedLine = document.getElementById("grandRedLine");

var imagens = [akumaNoMi, governoMundial, shichibukai, yonkou, grandRedLine];
var contador = 0;

function btnNext() {
  imagens[contador].classList.toggle("aparecer");
  if (contador == 4) {
    contador = 0;
  } else {
    contador++;
  }
  imagens[contador].classList.toggle("aparecer");
  console.log("Passou");
}

function btnPrev() {
  imagens[contador].classList.toggle("aparecer");
  if (contador == 0) {
    contador = 4;
  } else {
    contador--;
  }
  imagens[contador].classList.toggle("aparecer");
  console.log("voltou");
}
