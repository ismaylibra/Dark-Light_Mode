var body = document.body
var icon = document.getElementById('mode')
function ModeChange(){
    if(body.style.backgroundColor=='black'){
        body.style.backgroundColor='white'
        body.style.color = 'black'
        icon.className = 'fa-solid fa-circle-half-stroke'

    }
    else{
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        icon.className = 'fa-solid fa-circle-half-stroke'
    }

}