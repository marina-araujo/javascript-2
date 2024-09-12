let num = [5, 8, 2, 9, 3]
num.sort()
console.log(num)
console.log(`nosso vetor é o ${num}`)
num.push(6)
num.sort()
console.log(`nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
