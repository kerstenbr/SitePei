// https://www.youtube.com/watch?v=BpzyuuPIEaQ

let count = 1;
document.getElementById("radio1").checked = true;
    
setInterval(function(){
    nextImage()
}, 10000) // <- Aqui controla o tempo de virado do slider, 1000ms = 10s

function nextImage(){
    count++
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}