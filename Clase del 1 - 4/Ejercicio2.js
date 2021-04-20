let readlineSync = require('readline-sync');
console.log("Entrada:");
let ingreseNumero_1 = readlineSync.questionInt("ingrese un numero:");
let ingreseNumero_2 = readlineSync.questionInt("ingrese otro numero:");
console.log("Proceso:");
console.log("Sumando numeros...");
let suma = ingreseNumero_1 + ingreseNumero_2;
console.log("Salida:");
console.log("La suma es" ,suma);