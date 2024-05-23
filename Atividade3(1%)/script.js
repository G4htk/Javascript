let ipSaldo = document.querySelector("#ipSaldo");
let btImprimir = document.querySelector("#btImprimir");
let h3Resultado = document.querySelector("#h3Resultado");

function ImprimirResultado(){
    h3Resultado.textContent = Number(ipSaldo.value) * 1.01;
}
{
    alert (h3Resultado.textContent);
}

btImprimir.onclick = ImprimirResultado;
 
