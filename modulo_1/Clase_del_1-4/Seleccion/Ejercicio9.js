let readlineSync = require('readline-sync');
let usuario = "Juan";
let clave = "claveJuan";
let comprobarUsuario = readlineSync.question("Ingrese un nombre de Usuario: ");
let comprobarClave = readlineSync.question("Ingrese una Clave: ");
if (comprobarUsuario == usuario && comprobarClave == clave) {
 console.log("Bienvenido al sistema Juan")
 } else {
     console.log("El Usuario o Clave son incorrectos")};