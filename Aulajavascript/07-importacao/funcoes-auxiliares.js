
const entrada = [10, 5, 50, 10, 98, 23, 45, 99, 150, 1, 5];
let i = 0;

function gets () {
    const valor = entrada [i];
    i++;
    return valor;
}

function print (texto) {
    console.log(texto);
}

module.exports = {gets, print};


