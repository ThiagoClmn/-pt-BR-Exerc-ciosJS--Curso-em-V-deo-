/**

Verificador de idade

1 - ano do sistema
2 - input ano de nascimento
    VALIDAÇÃO: sempre menor que o ano do sistema e positivo
3 - idade = anoatual - nascimento
4 - sexo pelo html (bola selecionada)
5 - idade e sexo => carrega imagem dinamicamente
*/

function checkIdade(){
    
    // armazenando data de nascimento e data atual
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.querySelector('input#nascimento').value

    // validação do input do ano de nascimento
    if (anoNascimento.length == 0 || Number(anoNascimento.value) > anoAtual){
        window.alert("Deixou vazio ou digitou ano inválido? Digite novamente")
    } else {

        // armazenando idade e sexo selecionados
        var idade = anoAtual - anoNascimento
        var opcaoSexo = document.getElementsByName('radsex')
        
        // definindo genero e faixa etária
        var genero = ''
        var nomeImagem = '' // link para a imagem de acordo com faixa etária
        if (opcaoSexo[0].checked){
            genero = "Homem"
            if (idade < 11){
                nomeImagem = "_images/bebe-m.png"
            }else if(idade < 21){
                nomeImagem = "_images/jovem-m.png"
            }else if (idade < 60){
                nomeImagem = "_images/adulto-m.png"
            }else{
                nomeImagem = "_images/idoso-m.png"
            }
        }else{
            genero = "Mulher"
            if (idade < 11){
                nomeImagem = "_images/bebe-f.png"
            }else if(idade < 21){
                nomeImagem = "_images/jovem-f.png"
            }else if (idade < 60){
                nomeImagem = "_images/adulto-f.png"
            }else{
                nomeImagem = "_images/idoso-f.png"
            }
        }
        
        // configuração da div
        var resultado = document.querySelector('div#resultado')
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Resultado: ${genero} de ${idade} anos`

        // criação da imagem
        imagemIdade = document.createElement('img')
        imagemIdade.setAttribute('id','foto')
        imagemIdade.setAttribute('src',nomeImagem)

        resultado.appendChild(imagemIdade)

    }
}