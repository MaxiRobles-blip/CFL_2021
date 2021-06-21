
"use strict";


// Funcion para tener numeros de dados al azar
function azar(min,max) {
   
    return Math.floor((Math.random() * (max - min + 1)) + min);
    
}

//mostramos el numero que sale cuando tiramos cada dado
function tirarDados() {

    let numero1 = azar(1,6);
    let numero2 = azar(1,6);
    document.getElementById(1).innerHTML=numero1;
    document.getElementById(2).innerHTML=numero2;
}