function combustivel(parametros) {
    origem = parametros.origem.value
    destino = parametros.destino.value
    distancia = Number(parametros.distancia.value)
    kmporlitro = Number(parametros.kmporlitro.value)
    valorgas = Number(parametros.valorgas.value)

    var litrosnece = Math.floor(distancia/kmporlitro)
    var custo = litrosnece*valorgas
    var resultado = `Você precisará de ${litrosnece} litros de combustível e gastará R$ ${custo} para se deslocar de ${origem} para ${destino}`
    document.querySelector('.resultado').innerHTML = resultado
    return false
}