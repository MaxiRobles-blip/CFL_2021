"use strict";

let divAleatorio = document.getElementById('aDiv');
let botonAleatorio = document.querySelector('#botonDiv');
botonAleatorio.addEventListener('click',cambiar);



function cambiar() { 
  
   let red = Math.floor(Math.random()*256);
   let blue = Math.floor(Math.random()*256);
   let green = Math.floor(Math.random()*256);

   let widht = Math.floor(Math.random()*580);
   let height = Math.floor(Math.random()*580);

   let top = Math.floor(Math.random()*580);
   let left = Math.floor(Math.random()*580);


   divAleatorio.style.backgroundColor = `rgb( ${red}, ${blue}, ${green})`;
   
   divAleatorio.style.width = `${widht}px`;
   divAleatorio.style.height = `${height}px`;

   divAleatorio.style.top = `${top}px`;
   divAleatorio.style.left = `${left}px`;

}
