var alunos = document.querySelectorAll(".aluno");

var tabela = document.querySelector("#tabela-atendimentos");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    },500);
});