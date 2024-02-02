

var miElemento = document.getElementById('miElemento');


//• Click sobre el elemento
miElemento.addEventListener('click', function(event) {
  miElemento.innerHTML = 'Click sobre el elemento';
});

//• Doble click sobre el elemento
miElemento.addEventListener('dblclick', function(event) {
  miElemento.innerHTML = 'Doble click sobre el elemento';
});

//• Se pulsa botón del ratón sobre el elemento
miElemento.addEventListener('mousedown', function(event) {
  miElemento.innerHTML = 'Botón del ratón presionado';
});

//• Se levanta el boton del ratón sobre el elemento
miElemento.addEventListener('mouseup', function(event) {
  miElemento.innerHTML = 'Botón del ratón liberado';
});


//El ratón pasa sobre el elemento
miElemento.addEventListener('mouseenter', function(event) {
  miElemento.innerHTML = 'El ratón está sobre el elemento';
});


// El ratón sale del área del elemento
miElemento.addEventListener('mouseleave', function(event) {
  miElemento.innerHTML = 'El ratón ha salido del área del elemento';
});

//• El ratón se mueve sobre el elemento
miElemento.addEventListener('mousemove', function(event) {
  miElemento.innerHTML = 'El ratón se mueve sobre el elemento';
});


//• El ratón se sitúa sobre el elemento
miElemento.addEventListener('mouseover', function(event) {
  miElemento.innerHTML = 'El ratón se sitúa sobre el elemento';
});

//• El ratón sale del área del elemento
miElemento.addEventListener('mouseout', function(event) {
  miElemento.innerHTML = 'El ratón sale del área del elemento';
});


/*contextmenu
• Se pulsa el botón derecho sobre el elemento, pero
también si se pulsa en el teclado la tecla de
desplegar el menú contextual. */
miElemento.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Evita que aparezca el menú contextual por defecto
  miElemento.innerHTML = 'Menú contextual activado';
});


//Se usa la rueda del ratón
miElemento.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    miElemento.innerHTML = 'Rueda hacia abajo';
  } else if (event.deltaY < 0) {
    miElemento.innerHTML = 'Rueda hacia arriba';
  }
});