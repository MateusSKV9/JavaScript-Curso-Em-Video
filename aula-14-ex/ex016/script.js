var enti = document.getElementById('iini')
var entf = document.getElementById('ifim')
var entp = document.getElementById('ipas')
var msg = document.getElementById('msg')

function contar() {
    if(enti.value == '' || entf.value == '' || entp.value == '') {
        alert('[ERRO] Faltam dados!')
    } else {
        msg.innerHTML = 'Contando: <br>'
        var i = Number(enti.value)
        var f = Number(entf.value)
        var p  = Number(entp.value)

        if(p <= 0) {
            alert('Passo inválido!')
        } else {
            if(i < f) {
            for(i; i <= f; i += p) {
                msg.innerHTML += `${i} \u{1f449} `
            }
            } else {
                for(i; i >= f; i -= p) {
                    msg.innerHTML += `${i} \u{1f449} `
                }  
            }

            msg.innerHTML += `\u{1f3c1}`
        }
    }
}