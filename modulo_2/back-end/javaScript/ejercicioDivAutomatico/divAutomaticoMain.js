"use strict";

// let btnComenzar = document.getElementById('botonComienzo');
// let btnDetener = document.getElementById('botonDetener');
// let divAleatorio = document.querySelector('#divCambiante');
// let llamandoInterval = setInterval(cambiarAuto, 1000);
// btnComenzar.addEventListener('click',llamandoInterval);


let btnComenzar = document.getElementById('botonComienzo');
let btnDetener = document.getElementById('botonDetener');
let divAleatorio = document.querySelector('#divCambiante');
btnComenzar.addEventListener('click',llamandoInterval);
btnDetener.addEventListener('click',llamandoClear);
let probando = llamandoInterval;


function llamandoInterval() {
    
    probando = setInterval(cambiar,1000)
    
}

function cambiar() { 
  
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    let widht = Math.floor(Math.random()*580);
    let height = Math.floor(Math.random()*580);

    let top = Math.floor(Math.random()*580);
    let left = Math.floor(Math.random()*580);


    divAleatorio.style.backgroundColor = `rgb( ${red}, ${blue}, ${green})`;
    
    divAleatorio.style.width = `${widht}px`;
    divAleatorio.style.height = `${height}px`;

    divAleatorio.style.top = `${top}px`;
    divAleatorio.style.left = `${left}px`;

}

function llamandoClear() {

    clearInterval(probando)
    
}