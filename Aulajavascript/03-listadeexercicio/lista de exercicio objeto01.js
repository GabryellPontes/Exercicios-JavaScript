/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dé o valor
    gasto em reais para realizar este percurso.
*/
class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor (marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  gastoEmReaisDaViagem(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
  }

}

const fit = new Carro (' Honda' , 'Branco' , 1 / 13);
fit.gastoEmReaisDaViagem(70, 6.59);

const suv = new Carro (' Chevrolet ' , ' Vermelho' , 1 / 7);
suv.gastoEmReaisDaViagem(70, 6.59);

console.log(fit);
console.log(fit.gastoEmReaisDaViagem(70, 6.59).toFixed(2));
console.log(suv);
console.log(suv.gastoEmReaisDaViagem(70, 6.59).toFixed(2));








