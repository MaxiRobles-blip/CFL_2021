"use strict";

function mostrarSaludo() {

  let saludo = "Hola";
  document.getElementById(1).innerHTML=saludo;

}



let contador = 0;
function clickear() {
  //incrementa el valor de contador
  contador++; 
  alert("Hiciste " + contador + " clicks");
}

let largo = "Maxi";
let nombre = largo.length;
console.log(nombre);

