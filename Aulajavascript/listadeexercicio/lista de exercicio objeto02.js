/*
		2 - Crie uma classe para representar pessoas.
		Para cada pessoa termeos os atributos nome, peso e altura.
		As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
		Instacie uma pessoa chama josé tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu
		IMC;
*/

class Pessoa {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;

	}

	valorDoImc() {
		return this.peso / (this.altura * this.altura);
	}
	classificarImc() {
	
		const imc =	this.valorDoImc();
		if (imc < 18.5) {
			return ('Abaixo do Peso');
	
	} else if (imc >= 18.5 & imc < 25) {
			return ('Peso Normal');
			
	} else if (imc >= 25 & imc < 30) {
			return ('Acima do Peso');
	
	} else if (imc >= 30 & imc < 40) {
			return ('Obeso');
	
	} else {
		 return ('Obesidade Grave');
	}
	
	}
}

const jose = new Pessoa(' José', 50, 1.75);
console.log(jose.classificarImc());
const lucas = new Pessoa(' Lucas', 120, 1.93);
console.log(lucas.classificarImc());
const pontes = new Pessoa(' Pontes', 70, 1.80);
console.log(pontes.classificarImc());