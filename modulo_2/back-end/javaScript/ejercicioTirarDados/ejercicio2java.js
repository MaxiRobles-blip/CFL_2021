
"use strict";

let btnDados = document.querySelector('#botonDados');
btnDados.addEventListener('click',tirarDados);
let cantTiros = 1000;

let arreglo1 = [cantTiros];
let arreglo2 = [cantTiros];


// Funcion para tener numeros de dados al azar
function azar(min,max) {
   
    return Math.floor((Math.random() * (max - min + 1)) + min);
    
}

//funcion para tirar los dados

function tirarDados(){
    
    let suma = 0;
    let numero1 = 0;
    let numero2 = 0;

    for (let index = 0; index < cantTiros; index++) {
       
        // let numero1 = azar(1,6);
        // let numero2 = azar(1,6);
        arreglo1[index] = azar(1,6);
        arreglo2[index] = azar(1,6);

        console.log(arreglo1[index]+" "+arreglo2[index]);
        if ((arreglo1[index] + arreglo2[index]) === 7 ){
        
        suma ++;
        }
    }
    console.log(suma);
    document.getElementById('resultado').innerHTML = `Salio --> ${suma} <-- vez/veces el numero " 7 " `;

    mostrarArreglo();
    
}

function mostrarArreglo() {

    let mostrar1 = "";  
    let mostrar2 = "";

    for (let index = 0; index < cantTiros; index++) {

        mostrar1 += `${arreglo1[index]} `;
        mostrar2 += `${arreglo2[index]} `;
        
    }
    document.getElementById('1').innerHTML = `${mostrar1}`;
    document.getElementById('2').innerHTML = `${mostrar2}`;

}