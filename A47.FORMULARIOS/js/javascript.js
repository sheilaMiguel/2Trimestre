document.addEventListener("DOMContentLoaded", function() {
   // Obtener referencias a elementos del formulario
   const nombreInput = document.getElementById("nombre");
   const emailInput = document.getElementById("email");
   const mensajeTextarea = document.getElementById("mensaje");
   const formulario = document.getElementById("miFormulario");

   // Evento Focus
   nombreInput.addEventListener("focus", function() {
       console.log("Input de nombre ha obtenido el foco");
   });

   // Evento Input
   mensajeTextarea.addEventListener("input", function() {
       console.log("Texto en el área de mensaje ha cambiado:", mensajeTextarea.value);
   });

   // Evento Blur
   emailInput.addEventListener("blur", function() {
       console.log("Input de email ha perdido el foco");
   });

   // Evento Change
   nombreInput.addEventListener("change", function() {
       console.log("Valor de nombre ha cambiado:", nombreInput.value);
   });

   // Evento Select
   mensajeTextarea.addEventListener("select", function() {
       console.log("Texto en el área de mensaje seleccionado");
   });

   // Evento Submit
   formulario.addEventListener("submit", function(event) {
       event.preventDefault(); // Evitar la recarga de la página
       console.log("Formulario enviado");
   });

   // Evento Reset
   formulario.addEventListener("reset", function() {
       console.log("Formulario reseteado");
   });
});