let readlineSync = require('readline-sync');
let numeroIngresado = readlineSync.questionInt("Ingrese un numero para saber si es Par o Impar:");
if (numeroIngresado == 0){
    console.log("El numero 0 no es par ni impar");
} else {
    if (numeroIngresado % 2 == 0){
        console.log("El numero ingresado es Par"); 
    } else {
        console.log("El numero ingresado es Impar"); 
    }
}