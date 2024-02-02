


//que cada 4 palabras te pongan la url la url para q no se pueda copiar



  window.onload=function(){

    texto1.oncopy=function(e){
      e.preventDefault();  //evita que se copie
    let texto=window.getSelection().toString();  // se utiliza para obtener el texto seleccionado por el usuario en la página web.
    let nuevaremplazamiento = texto.replace(/e/g, "  sheilamiggad.com  ");
    e.clipboardData.setData("text/plain" ,nuevaremplazamiento+ "  Copyright@SheilaMiguel ");

    
    }
  

    //getData optengo el texot de portapapeles
    //setData: mete contenido en el portapapeles , pasando dos parametros, formato (texto y el texto a copiar)
    





  texto2.oncopy = function (e) {
    e.preventDefault();  // Evita que se copie
    let textoo = window.getSelection().toString();  // Obtiene el texto seleccionado por el usuario en la página web.
    
    // Divide el texto en palabras
    let palabras = textoo.split(/\s+/);

    // Agrega "NOCOPIES" después de cada grupo de 4 palabras
    for (let i = 0; i < palabras.length; i += 4) {
        palabras.splice(i + 4, 0, "NOCOPIES");
    }

    // Une las palabras de nuevo en un texto
    let nuevaremplazamiento = palabras.join(" ");

    // Establece el nuevo valor en el portapapeles
    e.clipboardData.setData("text/plain", nuevaremplazamiento + " Copyright@SheilaMiguel");
}
  
  }


  //getData optengo el texot de portapapeles
  //setData: mete contenido en el portapapeles , pasando dos parametros, formato (texto y el texto a copiar)


 //getData optengo el texot de portapapeles
    //setData: mete contenido en el portapapeles , pasando dos parametros, formato (texto y el texto a copiar)
    


//HMTL (lenguaje menos extricto) Y XML(lenguaje muy estricto))
