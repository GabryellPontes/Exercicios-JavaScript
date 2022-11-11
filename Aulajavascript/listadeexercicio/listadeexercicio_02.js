/*
     2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
        a condição de peso de uma pessoa adulta.

        Formula do IMC:
        IMC = peso / (altura * altura)

        Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

        IMC em adultos Condição
        - Abaixo de 18.5 Abaixo do peso;
        - Entre 18.5 e 25 Peso normal;
        - Entre 25 e 30 Acima do peso;
        - Entre 30 e 40 Obeso;
        - Acima de 40 Obesidade Grave;
*/

const lucasAltura = 1.95;
const lucasPeso = 76;

const imcLucas = lucasPeso / (lucasAltura * lucasAltura);

console.log(imcLucas.toFixed(2));

if (imcLucas < 18.5) {
    console.log('Abaixo do Peso');

} else if (imcLucas >= 18.5 & imcLucas < 25) {
    console.log('Peso Normal');
    
} else if (imcLucas >= 25 & imcLucas < 30) {
    console.log('Acima do Peso');

} else if (imcLucas >= 30 & imcLucas < 40) {
    console.log('Obeso');

} else {
   console.log('Obesidade Grave');
}











