function contar() { 
    var res = document.getElementById('res')
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { 
            //contagem crescente
            res.innerHTML += 'Temos uma Contagem Crescente:<br>'
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `//mesmo que: U+1F449
            }
        } else {
            //contagem regressiva
            res.innerHTML += 'Temos uma Contagem Regressiva:<br>'
            for(var c = i; c>= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    /* 
    minhas tentativas sozinha:
    (deu errado pq não transformei os values dos numbers)

    var res = txti
    while (res <= txtf) {
        res.innerHTML('res')
        res = res + txtp
    }
    
    /*for(var res=iniciocont; res<=fimcont; res+passo) {
        res.innerHTML('res')
    } */  
}
