"use strict";
let divMostrar = document.getElementById('mostrar');
let comprobar = document.getElementById('myCheck');
let btnCambiar = document.getElementById('btn');
btnCambiar.addEventListener('click',cambiando);

function cambiando(){
    let h1;
    let h2;
    if(comprobar.checked == true){
        h1 = document.createElement('h1');
        h1.innerText= 'Soy un H1';
        divMostrar.appendChild(h1);
    }else{
        h2 = document.createElement('h2');
        h2.innerText= 'Soy un H2';
        divMostrar.appendChild(h2);
    }
}