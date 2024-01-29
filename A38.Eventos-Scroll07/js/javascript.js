window.onload = function() {
  window.onscroll = function() {
   tamaVentana=window.innerHeight; //altura de la ventana
   posicionScroll=window.scrollY; //posicion scroll
   tamaCompleto=document.documentElement.scrollHeight; //tam height del scroll
    console.log("el tam de la ventana: "+ tamaVentana)
    console.log("posicion del scroll: "+ posicionScroll)
    console.log("tam completo: "+ tamaCompleto)
  };

  //tam completo-tamventana
  window.onscrollend = function() {
    console.log('Se ha realizado un desplazamiento en la ventana.');
  };
};

/*clientX/clientY se refiere a la ventana del navegador,
 pageX/pageY toma en cuenta el desplazamiento de la página,
  offsetX/offsetY se relaciona con el elemento específico, 
  screenX/screenY se refiere a la pantalla del dispositivo en sí.*/
