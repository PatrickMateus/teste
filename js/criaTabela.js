var adicionarAtendimento = document.querySelector("#adicionar-atendimento");

adicionarAtendimento.addEventListener("click",function(event){
    event.preventDefault();
    var form  = document.querySelector("#formAdiciona");
    var nome = form.nome.value;
    var freshdesk = form.freshdesk.value;
    var id = form.id.value;
    var app = form.app.value;
    var difi = form.dificuldade.value;
    var data = form.data.value;
    var diag = form.diagnostico.value;
    var resposta = form.resposta.value;

    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var freshdeskTd = document.createElement("td");
    var idTd = document.createElement("td");
    var appTd = document.createElement("td");
    var difiTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var diagTd = document.createElement("td");
    var respostaTd = document.createElement("td");

    nomeTd.textContent = nome;
    idTd.textContent = id;
    freshdeskTd.textContent = freshdesk;
    appTd.textContent = app;
    respostaTd.textContent = resposta;
    difiTd.textContent = difi;
    dataTd.textContent = data;
    diagTd.textContent = diag;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(idTd);
    alunoTr.appendChild(freshdeskTd);
    alunoTr.appendChild(appTd);
    alunoTr.appendChild(difiTd);
    alunoTr.appendChild(dataTd);
    alunoTr.appendChild(diagTd);
    alunoTr.appendChild(respostaTd);

    var tabela = document.querySelector("#tabela-atendimentos");
    tabela.appendChild(alunoTr);

    form.reset();
});

