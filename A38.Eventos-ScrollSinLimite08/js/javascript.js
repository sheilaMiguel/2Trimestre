window.onload = function() {
  window.onscroll = function() {
   tamaVentana=window.innerHeight;
   posicionScroll=window.scrollY; //posicion scroll
   tamaCompleto=document.documentElement.scrollHeight; //tam height del scroll
    console.log("el tam de la ventana: "+ tamaVentana)
    console.log("posicion del scroll: "+ posicionScroll)
    console.log("tam completo: "+ tamaCompleto)
    
  };


  //tam completo-tamventana
  window.onscrollend = function() {
    crear();


  };

  function crear(){
  
    // Crear un nuevo título
     nuevoTitulo = document.createElement('h2');
    nuevoTitulo.textContent = 'Nuevo Título';

    // Crear un nuevo párrafo con texto "Lorem"
    nuevoTexto = document.createElement('p');
    nuevoTexto.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    // Crear una img con  "Lorem"
     nuevaImagen = document.createElement('img');

      // Generar un número aleatorio entre 1 y 10
      num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
    // Establecer la propiedad src con una URL de imagen específica
    nuevaImagen.src = 'img/baraja/Bastos'+ num+".png"; // Reemplaza 'URL_DE_LA_IMAGEN' con la URL real de la imagen
    nuevaImagen.alt="mensaje fotito"
  
    
    
    document.body.appendChild(nuevoTitulo);
    document.body.appendChild(nuevoTexto);
  document.body.appendChild(nuevaImagen);

   tamaVentana=window.innerHeight;
   posicionScroll=window.scrollY; //posicion scroll
   tamaCompleto=document.documentElement.scrollHeight; //tam height del scroll
    console.log("el tam de la ventana: "+ tamaVentana)
    console.log("posicion del scroll: "+ posicionScroll)
    console.log("tam completo: "+ tamaCompleto)
    

  return posicionScroll + tamaVentana >= tamaCompleto;
}


}