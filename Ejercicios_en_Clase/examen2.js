let readlineSync = require('readline-sync');
let fechaIngresada = readlineSync.question("Ingrese fecha separando dia mes y año con (/)")
let fechaFinDeAño = "31/12/" + readlineSync.question("Ingrese fin de año a comparar");


function restaFechas (fecha1,fecha2) {
 let aFecha1 = fecha1.split('/');
 let aFecha2 = fecha2.split('/');
 let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 let fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 let dif = fFecha2 - fFecha1;
 let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }


 
console.log(restaFechas(fechaIngresada,fechaFinDeAño));