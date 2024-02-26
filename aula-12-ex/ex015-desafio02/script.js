
function verificar() {
    var time = new Date()
    var anoAtual = time.getFullYear()
    var anoNasc = document.getElementById('iano')
    var msg = document.getElementById('msg')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if(anoNasc.value.length == 0 || Number(anoNasc.valeu) > anoAtual) {
        alert('[ERRO] Data inválida. Tente novamente.')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = anoAtual - Number(anoNasc.value)
        var gen = ''

        if(sex[0].checked) {
            gen = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'kid-boy.jpg')
            } else if(idade < 18) {
                img.setAttribute('src', 'boy.jpg')
            } else if(idade < 60) {
                img.setAttribute('src', 'man.jpg')
            } else {
                img.setAttribute('src', 'avô.jpg')
            }
        } else {
            gen = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'kid-girl.jpg')
            } else if(idade < 18) {
                img.setAttribute('src', 'girl.jpg')
            } else if(idade < 60) {
                img.setAttribute('src', 'woman.jpg')
            } else {
                img.setAttribute('src', 'avó.jpg')
            }
        }
        msg.innerHTML = `Detectamos ${gen} com ${idade}.`
        res.appendChild(img)
    }
}