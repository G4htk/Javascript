let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let ipValor4 = document.querySelector("#ipValor4");
let btBotao = document.querySelector("#btBotao");

function MenorValor(){
    let Valor1 = (Number(ipValor1.value));
    let Valor2 = (Number(ipValor2.value));
    let Valor3 = (Number(ipValor3.value));
    let Valor4 = (Number(ipValor4.value));
    if (Valor1 < Valor2 && Valor1 < Valor3 && Valor1 < Valor4) {
    alert ("Valor 1");
    }else if (Valor2 < Valor1 && Valor2 < Valor3 && Valor2 < Valor4) {
        alert ("Valor 2");
} else if (Valor3 < Valor2 && Valor3 < Valor1 && Valor3 < Valor4) {
    alert ("Valor 3");
}
 else{
    alert("Valor 4")
}
}

btBotao.onclick = function(){
    MenorValor()
}