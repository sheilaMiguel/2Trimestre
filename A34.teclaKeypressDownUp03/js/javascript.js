//compruebo que este bien enlazado


/*keypress:

Se desencadena cuando se presiona una tecla y solo si la tecla presionada genera un carácter visible.
No se desencadena para teclas que no generan caracteres visibles, como las teclas de flecha o las teclas de control. */

   window.addEventListener("keypress", miFuncion )
   function miFuncion(){
    alert(event.key)
   }
   
/*keydown:

Se desencadena cuando una tecla es presionada y se mantiene pulsada.
Incluye todas las teclas
Proporciona información sobre la tecla presionada */

   window.addEventListener("keydown", miFuncion )
    function miFuncion(){
        event.preventDefault(); //para que se desactiven las funciones que tienen ciertas teclas como f11 que es para hacermas grande la pantalla
     console.log(event.key)
    }


    window.addEventListener("keyup", miFuncion )
    function miFuncion(){
     console.log(event.key)
    }