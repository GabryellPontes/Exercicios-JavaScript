
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

let precoProduto = 65;

let aVistaDebito = (precoProduto - (precoProduto * 0.1));
let DinheiroPix = (precoProduto - (precoProduto * 0.15));
let acimaDeDuasVezes = ((precoProduto * 0.1) + precoProduto);
let formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoProduto, 15));
} else if (formaDePagamento === 3) {
    console.log(precoProduto);
} else {
    console.log(aplicarJuros(precoProduto, 10));
}

