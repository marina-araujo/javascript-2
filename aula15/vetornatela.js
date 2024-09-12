var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(var pos in valores) { //esse for reduzido só pode ser usado para arrays e objects
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*
forma tradicional de fazer com o for:

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/