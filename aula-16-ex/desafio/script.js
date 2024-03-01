var ent1 = document.getElementById('inum')
var list = document.querySelector('select#iarea')
var res = document.getElementById('res')
var vals = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
         return false
    }
}

function adicionar() {
    if(isNum(ent1.value) && !inList(ent1.value, vals)) {
        vals.push(Number(ent1.value))
        let item = document.createElement('option')
        item.text = `Valor ${ent1.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Erro! Número já adicionado.')
    }
    ent1.value = ''
    ent1.focus()
}

function finalizar() {
    if(vals.length ==  0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let tot = vals.length
        let maior = vals[0]
        let menor = vals[0]
        let soma = 0
        let media = 0

        for(let pos in vals) {
            soma += vals[pos]
            if(vals[pos] > maior) {
                maior = vals[pos]
            }
            if(vals[pos] < menor) {
                menor =  vals[pos]
            }
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${media}.</p>`
    }
}