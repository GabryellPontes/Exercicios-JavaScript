/*Faça um programa para calcular o valor gasto do combustivel em uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustivel;
 2 - Valor médio de gasto de combustivel do carro em Km;
 3 - Distância em km da viagem;

impirmir no console o valor que será gasto de combostivel para realizar esta viagem.
*/

let precoCombustivel = 6.59;
const kmPorLitro = 12;
const distanciaEmKm = 1500;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log (valorGasto.toFixed(2));



