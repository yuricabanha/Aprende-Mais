function sortear(parametros) {
    valorinicial = Number(parametro.valorinicial.value)
    valorfinal = Number(parametros.valorfinal.value)
    qtdnum = Number(parametros.qtdnumeros.value)
    numsorteados = []
    for ( i = 0; i < qtdnum; index++) {
        numsorteados[i] = Math.floor(Math.random() * (valorfinal - valorinicial + 1)) + valorinicial
    }
    var resultado = `Quantidade de Números Solicitados: ${qtdnum} - Números Sorteados: `
    for (k in numsorteados) {
        resultado += `${numsorteados[k]} - `
    }
    document.querySelector('.resultado').innerHTML = resultado
    return false
}