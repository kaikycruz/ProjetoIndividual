const notificacoes = document.querySelector('.notificacoes'),
button = document.querySelectorAll('.btnTeste');

const detalhesAlerta = {
    success: {
        icon: 'fa-circle-check style="color:#0abf30"',
        texto: 'Cadastro realizado com sucesso!'
    },
    error: {
        icon: 'fa-circle-xmark',
        texto: 'Erro ao realizar cadastro, verifique seus dados'
    }
}

    const criarAviso = (id) => {
     
        const aviso = document.createElement("li")
        aviso.className = `aviso ${id}`
        aviso.innerHTML = `<div class="coluna">
        <i class="fa-solid fa-circle-check"  style="color:#0abf30"></i>
        <span>Cadastro realizado com sucesso!</span>
      </div>
      <i class="fa-solid fa-xmark"></i>`
      notificacoes.appendChild(aviso)
    }

    button.forEach(btnTeste => {
        btnTeste.addEventListener('click', () => criarAviso(btnTeste.id))
    })

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

      swal("Ops", "Preencha todos os campos ", "warning");

      //finalizarAguardar();
      return false;
    } else if (nomeVar.length < 2) {
      swal(
        "Ops",
        "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 8 caracteres ",
        "warning"
      );
    } else if (
      emailVar.indexOf("@") == -1 ||
      emailVar.indexOf(".com") == -1 ||
      emailVar.length < 6
    ) {
      swal("Ops", "Por favor, insira um E-mail válido", "warning");
    } else if (senhaVar.length < 4) {
      swal(
        "Ops",
        "A senha inserida é muito curta. Por favor, insira uma com pelo menos 5 caracteres",
        "warning"
      );
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
            swal(
              "Parabéns",
              "Cadastro realizado com sucesso redirecionando a tela de login!",
              "success"
            );
            setTimeout(() => {
              window.location = "./login.html";
            }, 3000);

            //limparFormulario();
            //finalizarAguardar();
          } else {
            swal("Ops", "Mais de um usuário com o mesmo login e senha !");
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