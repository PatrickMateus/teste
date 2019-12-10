var adicionarAtendimento = document.querySelector("#adicionar-atendimento");

adicionarAtendimento.addEventListener("click",function(event){
    event.preventDefault();
    var form  = document.querySelector("#formAdiciona");
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gor = form.gordura.value;
    var difi = form.dificuldade.value;
    var data = form.data.value;
    var diag = form.diagnostico.value;
    var resposta = form.resposta.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorTd = document.createElement("td");
    var difiTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var diagTd = document.createElement("td");
    var respostaTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorTd.textContent = gor;
    respostaTd.textContent = resposta;
    difiTd.textContent = difi;
    dataTd.textContent = data;
    diagTd.textContent = diag;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorTd);
    pacienteTr.appendChild(difiTd);
    pacienteTr.appendChild(dataTd);
    pacienteTr.appendChild(diagTd);
    pacienteTr.appendChild(respostaTd);

    var tabela = document.querySelector("#tabela-atendimentos");
    tabela.appendChild(pacienteTr);


    console.log(altura);

    form.reset();
});

