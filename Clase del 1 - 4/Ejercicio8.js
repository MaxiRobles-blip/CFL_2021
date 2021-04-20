let readlineSync = require('readline-sync');
let alturaPermitida = 1.30
let alturaPersona = readlineSync.questionFloat("Ingrese la altura de la persona: ");
if (alturaPersona >= alturaPermitida){
 console.log("La persona tiene la altura requerida para ingresar a este juego")
} else {
    console.log("La persona no tiene la altura requerida para ingresar a este juego");
}