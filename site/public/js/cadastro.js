
var CampoSuccess = document.getElementById("sucesso");
var CampoError = document.getElementById("erro");
var xizinho = document.getElementById("fecharSuccess");
var xizinho2 = document.getElementById("fecharError");

xizinho2.addEventListener("click", () => {
  CampoError.classList.add("none");
});

xizinho.addEventListener("click", () => {
  CampoSuccess.classList.add("none");
});

function cadastrar() {
  var nomeVar = input_user.value;
  var emailVar = input_email.value;
  var ufVar = input_Uf.value;
  var idadevar = input_idade.value;
  var senhaVar = input_Senha.value;
  var confirmacaoSenhaVar = input_confirme_senha.value;
  var epsAssistidosVar = opcoesEp.value;
  var personagemFavVar = personagensFav.value;

  if (
    nomeVar == "" ||
    emailVar == "" ||
    ufVar == "" ||
    idadevar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    epsAssistidosVar == "" ||
    personagemFavVar == ""
  ) {
    //cardErro.style.display = "block"
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
    //finalizarAguardar();
    return false;
  } else if (nomeVar.length < 2) {
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
  } else if (
    emailVar.indexOf("@") == -1 ||
    emailVar.indexOf(".com") == -1 ||
    emailVar.length < 6
  ) {
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
  } else if (senhaVar.length < 4) {
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
  } else {
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        ufServer: ufVar,
        idadeServer: idadevar,
        senhaServer: senhaVar,
        epsAssistidosServer: epsAssistidosVar,
        personagemFavServer: personagemFavVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          //cardErro.style.display = "block";
          CampoSuccess.classList.remove("none");
          setTimeout(() => {
            CampoSuccess.classList.add("none");
          }, 3000);

          setTimeout(() => {
            window.location = "./login.html";
          }, 3500);

          //limparFormulario();
          //finalizarAguardar();
        } else {
          CampoError.classList.remove("none");
          setTimeout(() => {
            CampoError.classList.add("none");
          }, 3000);
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        //finalizarAguardar();
      });

    return false;
  }
}

//function sumirMensagem() {
//cardErro.style.display = "none"
//}
