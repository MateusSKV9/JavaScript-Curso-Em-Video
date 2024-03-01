let amigo = {
    nome: 'Mateus',
    peso: 52,
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)