var time = new Date()
var hour = time.getHours()
var minutes = time.getMinutes()
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#img')

msg.innerHTML += `São exatamente ${hour}:${minutes}.`

if(hour >= 5 && hour <=12) {
    img.src = "morning.jpg"
    document.body.style.background = 'rgb(14, 207, 146)'
} else if(hour < 18) {
    img.src = "afternoon.jpg"
    document.body.style.background = 'rgb(207, 159, 14)'
} else {
    img.src = "night.jpg"
    document.body.style.background = 'rgb(78, 78, 78)'
} 