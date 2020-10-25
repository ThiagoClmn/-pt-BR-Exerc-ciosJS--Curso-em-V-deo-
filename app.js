function verHorario(){

    // Variaveis de horario
    var horario = new Date()
    var horas = horario.getHours()
    var minutos = horario.getMinutes()

    // selecionando elementos
    var mensagem = document.querySelector("div#mensagem")
    var imagem = document.querySelector("img#imagem")
    mensagem.innerHTML = `Agora são ${horas}:${minutos}`
    
    // muda imagem e cor de fundo do body
    if (horas < 12 && horas > 6){
        imagem.src = "_imagens/manha.png"
        document.body.style.background = '#e2cd9f'

    }else if(horas >= 12 && horas < 18){
        imagem.src = "_imagens/tarde.png"
        document.body.style.background = '#bf897e'

    }else{
        imagem.src = "_imagens/noite.png"
        document.body.style.background = '#1b4c68'
    }
}





