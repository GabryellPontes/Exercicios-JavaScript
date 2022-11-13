/*
     3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
     e a escolha da condição de pagamento.
     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
     adequado.

     Código Condição de Pagamento:
     1 - À vista Débito, recebe 10% de desconto;
     2 - À vista no Dinheiro ou pix, recebe 15% de desconto;
     3 - Em duas vezes, preço normal de etiqueta sem juros;
     4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoProduto = 65;

let aVistaDebito = (precoProduto - (precoProduto * 0.1));
let DinheiroPix = (precoProduto - (precoProduto * 0.15));
let acimaDeDuasVezes = ((precoProduto * 0.1) + precoProduto);
let formaDePagamento = 1;

if (formaDePagamento === 1) {
     console.log(aVistaDebito);
} else if (formaDePagamento === 2) {
     console.log(DinheiroPix);
} else if (formaDePagamento === 3) {
     console.log(precoProduto);
} else {
     console.log(acimaDeDuasVezes);
}