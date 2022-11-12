
class pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;

  }

  descrever() {
    console.log('Meu nome é' + (this.nome) + ' Minha idade é ' + (this.idade));

  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log((p1.nome) + 'é mais velho(a) que ' + (p2.nome))
  } else if (p2.nome > p1.nome) {
    console.log((p2.nome) + 'é mais velho(a) que ' + (p1.nome))
  } else {
    console.log((p1.nome) + 'é mais velho(a) que ' + (p2.nome))
  }
}

const lucas = new pessoa('Lucas', 23);
const gabryell = new pessoa('Gabryell', 25);

compararPessoas(lucas, gabryell);




