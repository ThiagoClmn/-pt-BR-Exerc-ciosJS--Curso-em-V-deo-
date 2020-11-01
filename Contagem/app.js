function fazerContagem(){
    let inicio = document.querySelector("input#inicio").value
    let fim = document.querySelector("input#final").value
    let passo = document.querySelector("input#passo").value
    var c = Number(inicio)
    resultado = document.querySelector("div#resultado")

    if ((inicio.length == 0) || (fim.length == 0) || (passo.length == 0)){
        resultado.innerHTML = "Não dá pra contar"
    }else{
        resultado.innerHTML = "Contando... <br>"
        let valorInicio = Number(inicio)
        let valorFim = Number(fim)
        let valorPasso = Number(passo)

        if (valorPasso == 0){
            alert("Passo inválido! Agora o passo vale 1")
            valorPasso = 1
        }
    
        if (valorInicio < valorFim){
            for (var c = valorInicio;c <= valorFim ; c += valorPasso){
                resultado.innerHTML += `${c} -> `
            }
        }else if(valorInicio > valorFim){
            for (var c = valorInicio;c >= valorFim ; c -= valorPasso){
                resultado.innerHTML += `${c} -> `
                
            }
    
            
        }

        resultado.innerHTML += "FIM"
    }

    

    
}

