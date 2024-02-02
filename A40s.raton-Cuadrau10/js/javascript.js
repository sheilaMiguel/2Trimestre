
window.onload=function(){


var miElemento = document.getElementById('miElemento');


// El ratón sale del área del elemento
miElemento.addEventListener('mouseleave', function(event) {
  miElemento.innerHTML = 'SALIDA: en el eje X con respecto a';

});



//• El ratón se sitúa sobre el elemento
miElemento.addEventListener('mouseover', function(event) {
  miElemento.innerHTML = 'ENTRADA: en el eje X con respecto a';
    //"la caja" el navegador
    var clientX = event.clientX; //ventana del nav--chrome
    var screenX = event.screenX; //eje X respecto a la pantalla del ordenador
    var offsetX = event.offsetX;  //sobre el div
  
    nuevo.innerHTML="sobre la pantalla del ordenador" + screenX + "<br> el div:" + offsetX + "<br>sobre la pantalla del navegador(chrome):"+clientX;
        // Mostrar las coordenadas en la consola
        console.log('clientX:', clientX, 'screenX:', screenX, 'offsetX:', offsetX);
        
});

}