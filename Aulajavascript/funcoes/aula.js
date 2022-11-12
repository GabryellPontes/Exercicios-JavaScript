
function calcularImc(Peso, Altura){
    return Peso / Math.pow(Altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
       return 'Abaixo do Peso';
    
    } else if (imc >= 18.5 & imc < 25) {
       return 'Peso Normal';
        
    } else if (imc >= 25 & imc < 30) {
       return 'Acima do Peso';
    
    } else if (imc >= 30 & imc < 40) {
       return 'Obeso';
    
    } else {
       return 'Obesidade Grave';
    }
}

//Main
(function () {
    const Altura = 1.93;
    const Peso = 76;
    
    const imc = calcularImc(Peso, Altura);
    console.log (classificarImc (imc));
})();

