function tabuada(){
    var txtNumero = document.querySelector("input#numeroTabuada").value
    const tabuada = document.querySelector("select#selTabuada")
    
    if (txtNumero.length == 0){
        alert("Caixa vazia. Digite um número")
    }else{
        const numero = Number(txtNumero)
        tabuada.innerHTML = ''
        for (var contador = 1; contador <= 10 ; contador++){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${contador*numero}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
        }

    }

}