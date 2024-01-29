//compruebo que este bien enlazado




/*keydown:

Se desencadena cuando una tecla es presionada y se mantiene pulsada.
Incluye todas las teclas
Proporciona información sobre la tecla presionada */


window.onresize=function(){
   recalcular();
}

function recalcular(){ 
   //no hace falta declararlas, significa que son globales
   ancho=window.innerWidth;
   altura=window.innerHeight;
   console.log("ancho: "+ ancho + " alto: "+altura)
}

window.onload=function(){
   recalcular();

   // Almacenar las posiciones iniciales
   var nave = document.getElementById("nave");
   var topoInicial = parseInt(window.getComputedStyle(nave).top);
   var leftInicial = parseInt(window.getComputedStyle(nave).left);

   window.addEventListener("keydown", mover )
    function mover(){
        event.preventDefault(); //para que se desactiven las funciones que tienen ciertas teclas como f11 que es para hacermas grande la pantalla
     console.log(event.key)

      topo=parseInt(window.getComputedStyle(document.getElementById("nave")).top)
      left=parseInt(window.getComputedStyle(document.getElementById("nave")).left)

      switch (event.key) {
               
         case "ArrowUp":        
         if (topo > 15) {  // Verificar que topo sea mayor a 15 antes de permitir el movimiento hacia arriba
             topo--; // Mover hacia arriba
             nave.style.top = topo + "px";
             console.log(nave.style.top);
         }
         break;
   

         case "ArrowDown":
              // Ajusta la condición para el límite inferior según tus necesidades
              if (topo < altura - nave.offsetHeight) {
               topo++; // Mover hacia abajo
               nave.style.top = topo + "px";
               console.log(nave.style.top);
           }
           break;

          case "ArrowLeft":
            if (left > 15) {
               left--; // <--Izquierda
               nave.style.left = left + "px";
            }
            break;

            case "ArrowRight":
    // Verificar si mover a la derecha no excede el límite del ancho de la ventana
         if (left + nave.offsetWidth < ancho) {
            left++; // Mover a la derecha
            nave.style.left = left + "px";
            console.log(nave.style.left);
    }
    break;

         case "Enter":
            console.log("Has pulsado la tecla Enter.");
            topo = topoInicial; // Valor inicial para el top
            left = leftInicial; // Valor inicial para el left
            nave.style.top = topo + "px";
            nave.style.left = left + "px";
            recalcular();
             break;


    }}

   }

  
  


    /*

    window.addEventListener("keyup", miFuncion )
    function miFuncion(){
     console.log(event.key)
    }

    */