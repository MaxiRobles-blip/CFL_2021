
"use strict";
let suma = '1';

function mostrarCadena() {
    
let cantNumeros = 100;

for (let index = 1; index < cantNumeros; index++) {
    
    suma = suma +" "+ (index + 1);
   
}
document.getElementById('cadena').innerHTML=suma;
}


