let readlineSync = require('readline-sync');
let longitud = readlineSync.questionInt("Ingrese longitud del arreglo: ");
let numeros = new Array(longitud);
let indice = 0;
let suma = 0;
for (indice = 0; indice < longitud; indice++){
    numeros[indice] = readlineSync.questionInt("Ingrese un numero:");
    suma = suma + numeros[indice];
}
    console.log(suma);