var adicionarAtendimento = document.querySelector("#adicionar-atendimento");

adicionarAtendimento.addEventListener("click",function(event){
    // tira a função de enviar do butão
    event.preventDefault(); 

    var form  = document.querySelector("#formAdiciona");
    var aluno = obtemAtendimentoDoFormulario(form);

    var alunoTr = montaTr(aluno);

    var tabela = document.querySelector("#tabela-atendimentos");
    tabela.appendChild(alunoTr);

    form.reset();
});

function obtemAtendimentoDoFormulario(form){

    var aluno = {
        nome: form.nome.value,
        freshdesk: form.freshdesk.value,
        id: form.id.value,
        app: form.app.value,
        difi: form.difi.value,
        data: form.data.value,
        diag: form.diag.value,
        resposta: form.resposta.value,
    }
    return aluno;
}

function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.freshdesk, "info-freshdesl"));
    alunoTr.appendChild(montaTd(aluno.id, "info-id"));
    alunoTr.appendChild(montaTd(aluno.app, "info-app"));
    alunoTr.appendChild(montaTd(aluno.resposta, "info-resposta"));
    alunoTr.appendChild(montaTd(aluno.difi, "info-difi"));
    alunoTr.appendChild(montaTd(aluno.data, "info-data"));
    alunoTr.appendChild(montaTd(aluno.diag, "info-diag"));

    return alunoTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
