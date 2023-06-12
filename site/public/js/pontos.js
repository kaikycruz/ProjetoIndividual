function updatePontos() {
    //aguardar();
    fetch("/usuarios/listarPontos").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var table = document.getElementById("infos");
                for (var contador = 0; contador < resposta.length; contador++) {
                    var publicacao = resposta[contador];
                    // criando e manipulando elementos do HTML via JavaScript

                       console.log(publicacao)
                    // // cria um novo elemento div
                    // e dá à ele conteúdo
                    var tdNome = document.createElement("td");
                    var tdpontuacao = document.createElement("td");
                    var tableTr = document.createElement("tr");
                    

                    tdNome.className = "text"
                    tdpontuacao.className = "text"
                   
                   
                    tdNome.innerHTML = `${publicacao.nome}`;
                    tdpontuacao.innerHTML = `${publicacao.pontuacao}pts.`;
        

                    // (APPENDCHILD) Cria um novo elemento de parágrafo e adiciona-o ao final do documento

                    tableTr.appendChild(tdNome);
                    tableTr.appendChild(tdpontuacao);
                    table.appendChild(tableTr);
                }

                // finalizarAguardar();
            });
        } else {
            alert("falha na API")
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}