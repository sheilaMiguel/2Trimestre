//compruebo que este bien enlazado

window.onload=function(){


   /*1FORMA FUNCION NORMAL*/

 // Obtener referencia al botón por su ID
 var miBoton = document.getElementById("miBoton");
 // Definir una función que se ejecutará cuando se haga clic en el botón
 function clicEnBoton() { alert("¡Has hecho clic en el botón!");}
 // Método 1: Utilizando addEventListener()
 miBoton.addEventListener("click", clicEnBoton);
 

  /*2FORMA FUNCION ANOOOOOOOOOONIMA*/
  
 // Usando window.addEventListener para el evento 'load'
 window.addEventListener("load", function() {
   alert("Se ha cargado la página");
});


  /*2FORMA ONNNNNNNNNNNNNNNNNNNNN*/

 // Método 2: También podrías hacerlo directamente asignando la función al evento onclick
 // miBoton.onclick = clicEnBoton;




 /*3FORMA CON ONNNNNNNNNNNNNNN Y FUNCION ANONIMAAAAA*/

 // Utilizando document.querySelector() para seleccionar el párrafo dentro del div
 var miParrafo = document.querySelector("div > p");

 // Asignar una función anónima al evento de clic
 miParrafo.onclick = function(event) {

    // Cambiar el color del texto del elemento sobre el que se hizo clic  ES LO MISMO
   event.target.style.color = "red";
   this.style.color = "red";

     alert("¡Has hecho clic en el párrafo!");
 };





/*PARA DEJAR DE CAPTURAR EVENTOSSSS*/

// Obtener referencia a la imagen por su ID
var miImagen = document.getElementById("miImagen");

// Definir una función que se ejecutará cuando se haga clic en la imagen
function clicEnImagen() {
    // Acciones a desencadenar
    alert("¡Has hecho clic en la imagen, pero el comportamiento predeterminado se ha evitado!");
    
    // Dejar de capturar el evento después de un clic
    miImagen.removeEventListener("click", clicEnImagen);
}

// Asignar la función al evento de clic en la imagen
miImagen.addEventListener("click", clicEnImagen);



/*AÑADIRRRR UN EVENTOSSSS*/
    // Obtener referencia a la imagen por su ID
    var miImagen = document.getElementById("miImagen");

    // Asignar la función al evento de clic en la imagen
    miImagen.addEventListener("click", function(event) {
        // Evitar el comportamiento predeterminado (en este caso, abrir la imagen a pantalla completa)
        event.preventDefault();


        // Acciones a desencadenar
        alert("¡HOLA!");
    });
  
/*
     // Definir la función que se ejecutará cuando se haga clic en la imagen
     function clicEnImagen(event) {
         event.preventDefault();
         alert("¡HOLA!");
   }
     // Asignar la función al evento de clic en la imagen
     miImagen.addEventListener("click", clicEnImagen);
     */
    
    
    
    
    }