let volume = document.querySelector('#volume')
let tempo = document.querySelector('#tempo')
let resultadoGotas = document.querySelector('#resultadoGotas')
let resultadoMicro = document.querySelector('#resultadoMicro')




function gotejamentoGotas() {
    resultadoGotas.innerText = parseInt(volume.value) / (parseInt(tempo.value) * 3)
    resultadoGotas.innerText = Math.round(resultadoGotas.innerText)
        gotejamentoGotas()

}


function gotejamentoMicro() {
    resultadoMicro.innerText = parseInt(volume.value) / parseInt(tempo.value)
    resultadoMicro.innerText = Math.round(resultadoMicro.innerText)
        gotejamentoMicro()
}
