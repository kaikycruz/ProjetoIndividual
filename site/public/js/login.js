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

function entrar() {
  //aguardar();

  var emailVar = input_email.value;
  var senhaVar = input_Senha.value;

  if (emailVar == "" || senhaVar == "") {
    CampoError.classList.remove("none");
    setTimeout(() => {
      CampoError.classList.add("none");
    }, 3000);
    return false;
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.EMAIL_USUARIO = json.Email;
          sessionStorage.NOME_USUARIO = json.Nome;
          sessionStorage.ID_USUARIO = json.id;

          CampoSuccess.classList.remove("none");
          setTimeout(() => {
            CampoSuccess.classList.add("none");
          }, 3000);

          setTimeout(() => {
            window.location = "./homeLogin.html";
          }, 3000);
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
          //finalizarAguardar(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}
