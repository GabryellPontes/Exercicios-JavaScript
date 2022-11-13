/*Faça um programa para calcular o valor gasto do combustivel em uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que ta no seu carro;
 4 - Gasto médio de combustível de carro por km;
 5 - Distância em km da viagem

impirmir no console o valor que será gasto de combostivel para realizar esta viagem.
*/

let precoEtanol = 5.05;
let precoGasolina = 6.59;
let precoDiesel = 5.50;
let kmPorLitro = 9;
let distanciaEmKm = 80;
let tipoDeCombustivel = 'Etanol';

let litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoDeCombustivel === 'Etanol') {
    let valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
    
} else if (tipoDeCombustivel === 'Gasolina') {
    let valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

} else {
    let valorGasto = litrosConsumidos * precoDiesel;
    console.log (valorGasto.toFixed(2));
}

