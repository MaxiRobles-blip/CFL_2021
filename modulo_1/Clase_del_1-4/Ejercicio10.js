let readlineSync = require('readline-sync');
let precioProducto = readlineSync.questionInt("Ingrese precio del producto: ");
let porcentajeIngresado = readlineSync.questionInt("Ingrese descuento a hacer al producto: ");
let porcentajeDescuento = porcentajeIngresado / 100;
let descuentoCalculado = precioProducto * porcentajeDescuento;
let precioFinal = precioProducto - descuentoCalculado;
console.log("El descuento seria de: $", descuentoCalculado);
console.log("El precio final del producto con descuento seria de: $", precioFinal);