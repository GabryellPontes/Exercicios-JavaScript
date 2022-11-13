/*
    1 - Crie uma classe para representar bola de basquete.
    Os bola possuem uma cor, um tamanho  e nos dé o valor da bola de basquete mais uma cesta.
*/

class Bola {
  cor;
  tamanho;

  constructor(cor,tamanho) {
    this.cor = cor;
    this.tamanho = tamanho;

  }

  valorDaBolaECesta (bolaPreco, cestaPreco) {
    return bolaPreco + cestaPreco
  }

  criancaAdulto () {
    let crianAdultoo = this.valorDaBolaECesta();
    if (this.tamanho === 'p') {
      return ('bola para criança')

    }else if (this.tamanho === 'f'){
      return ('bola feminina')
    }else {
      return ('bola para adutlo')
    }
  }

  }

let bol = new Bola ('laranja' , 'f');
bol.criancaAdulto();
bol.valorDaBolaECesta(250,500);
console.log(bol , bol.valorDaBolaECesta(250, 500) , bol.criancaAdulto());