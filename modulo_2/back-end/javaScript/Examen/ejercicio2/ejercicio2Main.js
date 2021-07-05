"use strict";

let btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click',guardandoTarea);

let btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click',limpiandoTareas);

function guardandoTarea(){

  let tareaIngresada= document.getElementById('input').value;
  document.getElementById('listaTareas').innerHTML=tareaIngresada

}

function limpiandoTareas() {
    
document.getElementById('listaTareas').innerHTML="";

}