let ipCodigo = document.querySelector("#ipCodigo");
let btBotao = document.querySelector("#btBotao");

function NomeProduto(){
    if (Number(ipCodigo.value) === 1){
        alert ("Parafuso");}
        else if  (Number(ipCodigo.value) === 2){
            alert ("Porca");}
            else if (Number(ipCodigo.value) === 3){
                alert ("Prego");}
                else{
                    alert ("Diversos")
                }}

                btBotao.onclick = function(){
                    NomeProduto()
                }