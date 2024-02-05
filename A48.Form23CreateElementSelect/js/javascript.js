
//FUNCION FLECHA
window.onload = () => {
  document.forms[0].onsubmit = (event) => {
      event.preventDefault();
  }

  document.forms[0].pais.onchange = miFuncion3;
}

function miFuncion3() {
  if (document.forms[0].pais.value == "españa") {
      // Crear un nuevo elemento select
      let nuevoInput = document.createElement("select");
      nuevoInput.id = "ciudad";
      nuevoInput.name = "ciudad";

      // Crear opciones para el select
      let opciones = ["Madrid", "Valencia", "Barcelona"];

      // Agregar opciones al select
      for (let i = 0; i < opciones.length; i++) {
          let opcion = document.createElement("option");
          opcion.text = opciones[i];
          nuevoInput.add(opcion);
      }

      // Agregar el nuevo select al div
      document.getElementById("nuevoCampo").innerHTML = "";
      document.getElementById("nuevoCampo").appendChild(nuevoInput);
  } else {
      // Si el país no es España, limpiar el contenido del div
      document.getElementById("nuevoCampo").innerHTML = "";
  }
}

//existe la posibilidad de crear un objeto
//nuevaOpcion=new Option(ciudades[i],i)
//document.forms[0].ciudades.add(nuevaOpcion)






/*ACCEDO AL LOCAL STORAGE Y COMPRUEBO SI ESTA FUARDADO, SI ES ASI, LO PONGO DIRECTAMENTE, RECOORRO EL FORM Y SI TENGO VALOR LO PONGO COMO VALUE
AUTOCOMPLETE ON: TE LO COMPLETA CON LOS DATOS Q YA HA GUARDADOS TUYOS*/


/*EN FUNCION DE LO Q PONE SE CREAN UNOS NUEVOS VALIDO UN CAMPO CON ONCHANGE, SI ES ESPAÑA, QUE SE AÑADA OTRO CAMPO QUE PONGA CIUDAD*/

