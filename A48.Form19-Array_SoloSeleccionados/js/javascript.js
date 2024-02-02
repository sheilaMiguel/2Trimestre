

window.onload = () => {
  document.getElementById("miFormulario").addEventListener("submit", (event) => {
      event.preventDefault(); // evita el comportamiento por defecto de enviar el formulario
      alert("prevenido");

      var elementos = document.getElementById("miFormulario").elements;

      console.log("Campos Seleccionados:");
      for (var i = 0; i < elementos.length; i++) {
          var elementoActual = elementos[i];

          // Verificar si el campo está seleccionado (tiene un valor o está marcado)
          if ((elementoActual.type !== "radio" && elementoActual.type !== "checkbox") || elementoActual.checked || elementoActual.selected) {
              console.log("Tipo de campo: " + elementoActual.type);
              console.log("ID del campo: " + elementoActual.id);
              console.log("Nombre del campo: " + elementoActual.name);

              // En el caso de select-multiple, hay que recorrer las opciones seleccionadas
              if (elementoActual.tagName === "SELECT" && elementoActual.multiple) {
                  for (var j = 0; j < elementoActual.options.length; j++) {
                      if (elementoActual.options[j].selected) {
                          console.log("Valor seleccionado: " + elementoActual.options[j].value);
                      }
                  }
              } else {
                  console.log("Valor del campo: " + elementoActual.value);
              }

              console.log("------------------------");
          }
      }
  });
};





/* SIN SELECT MULTIPLE

window.onload = () => {
  document.getElementById("miFormulario").addEventListener("submit", (event) => {
      event.preventDefault(); // evita el comportamiento por defecto de enviar el formulario
      alert("prevenidp");

      var elementos = document.getElementById("miFormulario").elements;

      console.log("Campos Seleccionados:");
      for (var i = 0; i < elementos.length; i++) {
          var elementoActual = elementos[i];

          // Verificar si el campo está seleccionado (tiene un valor o está marcado)
          if ((elementoActual.type !== "radio" && elementoActual.type !== "checkbox") || elementoActual.checked) {
              console.log("Tipo de campo: " + elementoActual.type);
              console.log("ID del campo: " + elementoActual.id);
              console.log("Nombre del campo: " + elementoActual.name);
              console.log("Valor del campo: " + elementoActual.value);
              console.log("------------------------");
          }
      }
  });
};*/