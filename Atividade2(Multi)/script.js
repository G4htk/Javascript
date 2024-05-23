let ipValor = document.querySelector ("#ipValor");
let ipQuantidade = document.querySelector ("#ipQuantidade");
let btPagamento = document.querySelector ("#btPagamento");
let h3Valor = document.querySelector ("#h3Valor");

function MultiplicarValor(){
    h3Valor.textContent = Number(ipValor.value) * Number(ipQuantidade.value)
}

btPagamento.onclick = MultiplicarValor;