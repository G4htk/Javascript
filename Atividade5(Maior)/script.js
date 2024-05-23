let ipPrimeiro = document.querySelector("#ipPrimeiro");
let ipSegundo = document.querySelector("#ipSegundo");
let btMaior = document.querySelector("#btMaior");

function MaiorDosDois(){
    let A = Number(ipPrimeiro.value);
    let B = Number(ipSegundo.value);
    if (A > B){
        alert("Primeiro é maior");
    } else if (A == B) {
        alert("Iguais");
    } else {alert("Segundo é Maior");
}
}
btMaior.onclick = function (){
    MaiorDosDois();;
}
