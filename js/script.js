try{
    var acertos = 0;
    var cont = 0;
    function mostrar(){
        if(cont>0){
            return false;
        }
        var radios = document.getElementsByName('resposta');
        var radiosvalue;
        for(var i in radios){
            if(radios[i].checked){
                radiosvalue = radios[i].value;
                if(radiosvalue == "true"){
                    acertos++
                }
            }
        }
        var usuario = document.getElementById('usuario').value;
        document.getElementById('resultadop').innerHTML = `Parabéns ${usuario}!! Você acertou ${acertos} questões!`
        cont++
    }
    function mat(menu) {
        $('#areamat').load(`modulos/${menu}.html`);
    }
    function voltar(){
        $('#areamat').load("modulos/area.html");
    }
} catch(error) {
    console.log(`O nome do erro é: ${error.name}\n`);
    console.log(`A mensagem do erro é: ${error.message}\n`);
    console.log(`A stack do erro é: ${error.stack}\n`);
}