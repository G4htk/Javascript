let ipValor = document.querySelector("#ipValor");
let btSolução = document.querySelector("#btSolução");

function Impar(){
    let Valor = Number(ipValor.value)
    if (Valor % 2 !== 0){
        alert("Impar");
    }
        else{
            alert("Par");
        }
    }
btSolução.onclick = function(){
    Impar();
};