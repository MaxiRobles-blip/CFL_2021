"use strict";

let unDiv = document.getElementById('aDiv');
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


   unDiv.style.backgroundColor = `rgb( ${red}, ${blue}, ${green})`;
   
   unDiv.style.width = `${widht}px`;
   unDiv.style.height = `${height}px`;

   unDiv.style.top = `${top}px`;
   unDiv.style.left = `${left}px`;

}
