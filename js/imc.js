function imc(parametros) {
    nome = parametros.nomeimc.value
    peso = Number(parametros.peso.value)
    altura = Number(parametros.altura.value)
    var imc = Math.floor(peso/Math.pow(altura,2))
    var categoria
if (imc < 18.5) {
    categoria = 'Abaixo do peso'
} else if (imc < 24.9) {
    categoria = 'Normal'
} else if (imc < 29.9) {
    categoria = 'Sobrepeso'
} else {
    categoria = 'Obesidade'
}
    var resultado = `<p>${nome}, seu IMC é de ${imc} e você está classificado na categoria ${categoria}.</p>`
    document.querySelector('.resultado').innerHTML = resultado
    return false
}
