
const pessoa = {
  nome: 'Lucas G Pontes',
  idade: 23,

  descrever: function () {

    console.log('Meu nome é ' + (this.nome) + ' Minha idade é ' + (this.idade));
  }

};

pessoa.descrever = function () {
  console.log('Meu nome é ' + (this.nome));
};

const atributo = 'idade';
console.log(pessoa[atributo]);