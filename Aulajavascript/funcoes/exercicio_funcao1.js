function escrevaSeuNome(nome) {
    return 'Meu nome é ' +  nome ;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escrevaSeuNome ('Lucas ') + 'Menor de idade')

    } else {
        console.log(escrevaSeuNome ('Lucas ') + 'Maior de idade');
    }
}

verificarIdade(17);