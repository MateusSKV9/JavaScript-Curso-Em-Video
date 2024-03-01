let num = [1, 4, 3, 5, 8]

console.log(num[1])
console.log(`O vetor tem ${num.length} posições`)

num.push('Mateus')
console.log(num)
console.log(num.length)

num.sort()
console.log(num)

for(var i = 0; i < num.length; i++) {
    console.log(`Posição ${i} - valor ${num[i]} \n`)
}
let pos = num.indexOf(5)
console.log(num)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}