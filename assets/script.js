//1
/*function pintar(){
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

//2
/*const pintar = element => element.style.backgroundColor = 'yellow';

const ele = document.getElementById("ele1");
ele.addEventListener("click", event => pintar(event.currentTarget));*/

function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

// Pintamos inicialmente el elemento de verde
pintar(ele);

// Al hacer click, pintamos de amarillo
ele.addEventListener("click", e => pintar(e.currentTarget, 'yellow'));