let readlineSync = require('readline-sync');
console.log("Para saber el mayor de 3 numeros, ingrese 3 numeros a continuacion");
let numero1 = readlineSync.questionInt("Ingrese primer numero: ");
let numero2 = readlineSync.questionInt("Ingrese segundo numero: ");
let numero3 = readlineSync.questionInt("Ingrese tercer numero: ");
let intenteNuevamente = false;

if (numero1 == 0 || numero2 == 0 || numero3 == 0 ){
    console.log("Ha ingresado el numero cero, por favor elija otro numero.");
    intenteNuevamente = true;
 }else{
     if (numero2 > numero1 && numero2 > numero3){
         console.log("El numero mayor es: ",numero2);
     }else{
         if (numero3 > numero2 && numero3 > numero1){
            console.log("El numero mayor es: ",numero3);
         }else{(numero1 > numero2 && numero1 > numero3)
            console.log("El numero mayor es: ",numero1);
        }
    }   
}