let readlineSync = require('readline-sync');
console.log("Para saber si tiene descuento en su compra, complete los siguientes datos: ")
let precioArticulo = readlineSync.questionInt("Ingrese el precio del articulo:");
let cantArticulo = readlineSync.questionInt("Ingrese la cantidad de articulos:");
let mesIngresado = readlineSync.question("Ingrese mes en el que esta realizando la compra: ")
let precioTotal = precioArticulo * cantArticulo;
let mesDescuento = "octubre";
if (mesIngresado == mesDescuento){
    console.log("Usted obtiene descuento. El valor de su compra es de $",precioTotal * 85 / 100);
    
}else{
    console.log("Usted no tiene descuento. El valor de su compra es de $",precioTotal);

}