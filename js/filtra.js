var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var alunos = document.querySelectorAll(".aluno");

    if(this.value.length > 0){
        for ( var i= 0 ; i < alunos.length; i++){
            var aluno = alunos[i];
            var tdId = aluno.querySelector(".info-id");
            var id = tdId.textContent;
            if( id != this.value){
                aluno.classList.add("invi");
            }else{
                aluno.classList.remove("invi");
            } 
    } 
}else{
    for ( var i= 0 ; i < alunos.length; i++){
        var aluno = alunos[i];
        aluno.classList.remove("invi");
}
}
});