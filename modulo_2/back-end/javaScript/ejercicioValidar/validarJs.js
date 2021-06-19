

"use strict";

//boton que carga los numeros invoca esta funcion
function cargarNumeros(){

    //Tomo elementos del HTML y los guardo en variables
    let primerNumero = document.getElementById('numero1').value;
    let segundoNumero = document.getElementById('numero2').value;
    console.log(primerNumero,segundoNumero)
    

    // ((primerNumero>=0 || segundoNumero>=0))
    if ((primerNumero<0 && segundoNumero>=0) || (primerNumero>=0 && segundoNumero<0)){
        alert('Mensaje de alerta');
    } else{
        console.log('los numeros no cumplieron la condicion')
    }
}
