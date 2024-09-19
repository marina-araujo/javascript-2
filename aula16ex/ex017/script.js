let num = document.getElementById('fnum')
let adc = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }  
} 

function adicionar() {      
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    
    /*if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
    }*/
}