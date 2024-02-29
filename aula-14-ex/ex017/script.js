var val = document.getElementById('inum')
var area = document.getElementById('itab')

function tabuada() {
    area.innerHTML = ''
    if(val.value == '') {
        alert('Número inválido!')
    } else {
        for(var i=0; i <= 10; i++) {
            var res = Number(val.value) * Number(i)
            area.innerHTML += `${val.value} x ${i}  = ${res} \n`
        }
    }
}
