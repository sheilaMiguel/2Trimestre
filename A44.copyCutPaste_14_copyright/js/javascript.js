


//cnd copie texto, cambie el texto que ha copiado y añadir copiright y mi nombre 
//(el use rpiensa q lo ha copiado y cnd lo pega añade el texto ese)




  window.onload=function(){

    texto1.oncopy=function(e){
      e.preventDefault();  //evita que se copie
    let texto=window.getSelection();  // se utiliza para obtener el texto seleccionado por el usuario en la página web.
    e.clipboardData.setData("text/plain" ,texto+ "Copyright@SheilaMiguel");

    
    }
  

    //getData optengo el texot de portapapeles
    //setData: mete contenido en el portapapeles , pasando dos parametros, formato (texto y el texto a copiar)
    
}

/* FORMA CHAT
window.onload = function () {
  var texto1 = document.getElementById('texto1');
  var caja = document.getElementById('caja');

  texto1.oncopy = function (e) {
      e.preventDefault();  // Evita que se copie

      var textoSeleccionado = window.getSelection().toString();
      var nuevoContenido = textoSeleccionado + " Copyright@SheilaMiguel";

      // Utiliza setData para establecer el nuevo valor en el portapapeles
      e.clipboardData.setData("text/plain", nuevoContenido);
  };

  caja.onpaste = function (e) {
      e.preventDefault(); // Evita que se pegue

      var elTexto = e.clipboardData.getData("text/plain");

      // Asigna el texto recuperado al valor de la caja de texto
      caja.value = elTexto;

      alert("Escribelo tú: " + elTexto);
  }
}

*/


//que cada 4 palabras te pongan la url la url para q no se pueda copiar


//HMTL (lenguaje menos extricto) Y XML(lenguaje muy estricto))
