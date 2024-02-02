// 🌻🎋
//capturar evento-coordenadas, crear elemento y posicionarlo
window.onload = function () { 
  document.getElementById("prado").addEventListener("click", function (event) {
      // Calcula las coordenadas relativas dentro del div
      var pposx = event.clientX - 10;
      var pposy = event.clientY - 15;

      // Crea un elemento span (flor)
      var flor = document.createElement("span");
      flor.innerHTML = (Math.random() > 0.5) ? "🌻" : "🎋";

      // Posiciona la flor en las coordenadas calculadas
      flor.style.top = pposy + "px";
      flor.style.left = pposx + "px";

      // Añade la flor al div "prado"
      document.getElementById("prado").appendChild(flor);

      // Evita la propagación del evento
     event.stopPropagation();
     
  }, {capture:true});
}