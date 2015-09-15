/* Variaveis */
var nome,numero,aux;


/* Eventos */
$("#btn_incluir").click(function(e){
    incluirJogador($("#nomeJogador").val(),$("#numeroFigurinha").val());
});

$("#tabelaJogadores").on("click", ".suicida", removeLinha);



/* Funcoes */
function removeLinha() {
    $(this).parent().parent().remove();
}
function incluirJogador(nome, numero){

    if(validacao($("#nomeJogador")) && validacao($("#numeroFigurinha"))){

        var linhaTabela = "<tr> <td>" + nome + "</td> <td>" + numero + "</td><td> <button class=\"btn btn-danger suicida\"> Exluir <i class=\"glyphicon glyphicon-trash\"></i> </button> </td></tr>";
        $("#tabelaJogadores").append(linhaTabela);
        $("#nomeJogador").val("");
        $("#numeroFigurinha").val("");
    }



}

function validacao(campo){
    if(campo.val() == ""){
        return false;
    }
    else {
        return true;
    }
}
