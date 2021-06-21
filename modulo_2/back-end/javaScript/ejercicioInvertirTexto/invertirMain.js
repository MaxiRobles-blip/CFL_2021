"use strict";


let btnInvertir = document.getElementById('btn1');
btnInvertir.addEventListener('click',invertiendo);


function invertiendo() {
    let texto = document.getElementById('textbox1').value;
    let texto2;

    texto2=(invertir_palabra(texto));
    
    document.getElementById('mostrar').innerHTML=texto2;
    function invertir_palabra(palabra) {
        return palabra.split("").reverse().join("");
    }
}


// function invertiendo() {


//     let texto = document.getElementById('textbox1').value;
//     let texto2;

//     let espacio = " ";

//     function hacerfilas(dividirpalabras, separador) {
//         let textoIngresado = dividirpalabras.split(separador);
 
    

//         for (let i = 0; i <=  textoIngresado.length; i++) {
        
//             texto2=(invertir_palabra(textoIngresado[i]) + "<br>");
//             document.getElementById('mostrar').innerHTML=texto2;
//         }
//     }
 
//     function invertir_palabra(palabra) {
//         return palabra.split("").reverse().join("");
//     }



//     hacerfilas(texto, espacio );


// }